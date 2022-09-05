import Home from "../pages/index"
import "@testing-library/jest-dom"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import mainReducer from '../store/reducer'
import axios from "axios";
import '@testing-library/jest-dom/extend-expect'

      const renderWithRedux = (
        component,
        {initialState, store = createStore(mainReducer, initialState)} = {}
      ) => {
        return {
          ...render(<Provider store={store}>{component}</Provider>), // рендер происходит в провайдере для обеспечения работы redux
          store
        }
      }

      describe('MainPage testing', () => {
        beforeEach(() => {
          renderWithRedux(<Home></Home>) // перед каждым тестом будем рендерить index.jsx, в котором лежит MainPage, обёрнутый в MainContainer
        })
        it('renders header',async () => {
          await waitFor(()=>{
            expect(screen.getByText('Statistics')).toBeInTheDocument() // отрендерил ссылку на страницу статистики
          })
        })
        it('renders todo and it\'s functional', async () => {
          await waitFor(()=>{
            async function getData(){
              const res = await axios.get(`http://localhost:5000/todos/1`) // получаем 1ый todo
              const data = await res.data
              return data  
            }
            return getData().then(data=>{
              expect(screen.getByDisplayValue(data.title)).toBeInTheDocument() // отрендерил заголовок
              expect(screen.queryByDisplayValue(data.title)).toHaveAttribute('disabled') // заголовок отключён
              expect(screen.getByText(data.date)).toBeInTheDocument() // отрендерил дату
              expect(screen.getByText(data.time)).toBeInTheDocument() // отрендерил время
              expect(screen.queryByDisplayValue(data.body)).not.toBeInTheDocument() // не отрендерил тело
              expect(screen.queryByTestId(`delete${data.id}`)).toBeInTheDocument() // отрендерил кнопку удаления
              expect(screen.queryByTestId(`patch${data.id}`)).toBeInTheDocument() // отрендерил кнопку изменения
              expect(screen.queryByTestId(`expand${data.id}`)).toBeInTheDocument() // отрендерил кнопку разворота
              fireEvent.click(screen.getByTestId(`expand${data.id}`)) // кликаем по кнопке разворота
              expect(screen.queryByDisplayValue(data.body)).toBeInTheDocument() // отрендерил тело
              expect(screen.queryByDisplayValue(data.body)).toHaveAttribute('disabled') // тело отключено
              fireEvent.click(screen.getByTestId(`expand${data.id}`)) // кликаем по кнопке разворота
              expect(screen.queryByDisplayValue(data.body)).not.toBeInTheDocument() // не отрендерил тело
              fireEvent.click(screen.getByTestId(`patch${data.id}`)) // кликаем по кнопке изменения
              expect(screen.queryByDisplayValue(data.body)).toBeInTheDocument() // отрендерил тело
              expect(screen.queryByDisplayValue(data.body)).not.toHaveAttribute('disabled') // тело не отключено
              expect(screen.queryByDisplayValue(data.title)).not.toHaveAttribute('disabled') // заголовок не отключён
              fireEvent.change(screen.getByDisplayValue(data.title), {target: { value: 'Gray' }}) // меняем заголовок
              expect(screen.getByDisplayValue('Gray')).toBeInTheDocument() // заголовок изменён
              fireEvent.change(screen.getByDisplayValue(data.body), {target: { value: '59' }}) // меняем тело
              expect(screen.getByDisplayValue('59')).toBeInTheDocument() // тело изменено
            }) 
        })
      })
      it('creates new todo', async () => {
        await waitFor(()=>{
        async function getMaxIndex(){
          const res = await axios.get(`http://localhost:5000/todos?limit=1000000`) // получаем все todos
          const data = await res.data
          const indexes = data.map(todo=>todo.id)
          const maxIndex = Math.max.apply(Math,indexes)+1 // вычленяем id, который будет присвоен новому todo
          return maxIndex  
        }
        return getMaxIndex().then(maxIndex=>{
          expect(screen.queryByTestId(`title${maxIndex}`)).not.toBeInTheDocument() // не отрендерил заголовок с новым id
          fireEvent.click(screen.queryByTestId('buttonAdd')) // кликаем по кнопке создания todo
          expect(screen.queryByTestId(`title${maxIndex}`)).toBeInTheDocument() // отрендерил заголовок с новым id
          expect(screen.queryByTestId(`body${maxIndex}`)).toBeInTheDocument() // отрендерил тело с новым id
          expect(screen.queryByTestId(`date${maxIndex}`)).toBeInTheDocument() // отрендерил дату с новым id
          expect(screen.queryByTestId(`time${maxIndex}`)).toBeInTheDocument() // отрендерил время с новым id
          expect(screen.queryByTestId(`delete${maxIndex}`)).toBeInTheDocument() // отрендерил кнопку удаления с новым id
          expect(screen.queryByTestId(`patch${maxIndex}`)).toBeInTheDocument() // отрендерил кнопку изменения с новым id
          expect(screen.queryByTestId(`expand${maxIndex}`)).toBeInTheDocument() // отрендерил кнопку разворота с новым id
         })
        })
      })
      it('changes page', async () => {
        await waitFor(()=>{
          async function getData(){
            const res = await axios.get(`http://localhost:5000/todos?limit=1000000`) // получаем все todos
            const data = await res.data
            return data  
          }
          return getData().then(data=>{
            expect(screen.getByTestId('page_2')).toBeInTheDocument() // отрендерил кнопку 2ой страницы
            expect(screen.queryByDisplayValue(data[2].title)).not.toBeInTheDocument() // не отрендерил заголовок todo со 2 страницы
            fireEvent.click(screen.getByTestId('page_2')) // кликаем по кнопке 2ой страницы
            expect(screen.getByDisplayValue(data[2].title)).toBeInTheDocument() // отрендерил заголовок со 2 страницы
          })
        })
      })
      it('search', async () => {
        await waitFor(()=>{
          async function getData(){
            const res = await axios.get(`http://localhost:5000/todos?limit=1000000`) // получаем все todos
            const data = await res.data
            return data  
          }
          return getData().then(data=>{
          expect(screen.getByTestId('search')).toBeInTheDocument() // отрендерил поле поиска
          expect(screen.queryByDisplayValue(data[2].title)).not.toBeInTheDocument() // не отрен
          fireEvent.change(screen.getByTestId('search'), {target: { value: data[2].title }})
          fireEvent.click(screen.getByTestId('SearchIcon'))
          expect(screen.getByDisplayValue(data[2].title)).toBeInTheDocument() // отрендерил заголовок со 2 страницы
        })
        })
      })
      it('changes classnames',async () => {
        expect(screen.getByTestId('place_title').getAttribute('class')).toMatch(/active/gi) // поиск по заоловку
        expect(screen.getByTestId('place_body').getAttribute('class')).not.toMatch(/active/gi) // поиск не по телу
        fireEvent.click(screen.getByTestId(`place_body`))   // кликаем на вариант "по телу"
        await waitFor(()=>{
          expect(screen.getByTestId('place_title').getAttribute('class')).not.toMatch(/active/gi) // поиск не по заоловку
          expect(screen.getByTestId('place_body').getAttribute('class')).toMatch(/active/gi) // поиск по телу
        }) 
      }) 
    })