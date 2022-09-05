import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles"
import TextareaAutosize from '@mui/base/TextareaAutosize'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CircularProgress from '@mui/material/CircularProgress'
import {useRouter} from 'next/router';
function mainPage({todos,toggleTheme}) {
const router = useRouter()
const dispatch = useDispatch()
let reduxTodos=useSelector(state=>state.todos)
const theme = useTheme().palette

const [expanded, setExpanded] = useState(false);
const [limit,setLimit]=useState(2)
const [pages,setPages]=useState([])
const [currentPage,setCurrentPage]=useState(1)
const [todosUpdated,setTodosUpdated]=useState([])
const [searchValue,setSearchValue]=useState(false)
const [searchPlace,setSearchPlace]=useState('title')
const [searchPlaces,setSearchPlaces]=useState(['title','body'])
const [settingToSort,setSettingToSort]=useState(false)
const [sort,setSort]=useState(false)
const [sortDirections,setSortDirections]=useState([
  {
    forUser:'Lowest',
    forServer:'asc'
  },
  {
    forUser:'Highest',
    forServer:'desc'
  }
])
const [sortPlaces,setSortPlaces]=useState(['title','body','date','time'])
const [sortPlace,setSortPlace]=useState('')
const [sortDirection,setSortDirection]=useState('')
const [loading,setLoading]=useState(false)
const [titleIsInvalid,setTitleIsInvalid]=useState(false)
const [patching,setPatching] = useState(false)
const [creating,setCreating] = useState(false)

// функция вывода todos первично, при поиске или сортировке
async function setPagination(){  
    setLoading(true) // показывать гифку загрузки, пока грузится контент
    const res = await axios.get(
      searchValue ? 
          sort ? 
          `http://localhost:5000/todos?${searchPlace}_like=${searchValue}&_sort=${sortPlace}&_order=${sortDirection}&_limit=1000000` :
          `http://localhost:5000/todos?${searchPlace}_like=${searchValue}&_limit=1000000` :
        sort ?
        `http://localhost:5000/todos?_sort=${sortPlace}&_order=${sortDirection}&_limit=1000000` :
      `http://localhost:5000/todos?_limit=1000000`
      )
    const xTotalCount = await res.headers['x-total-count']
    const PreTodosUpdated = await res.data
    setTodosUpdated(PreTodosUpdated) // это стейт ВСЕХ todos
    setPages(getPages(Math.ceil(xTotalCount/limit))) // это стейт страниц
    setLoading(false) // убирает гифку
}
// функция, определяющая по входящему числу страницы, типа 4 => [1,2,3,4], используется в setPagination выше
function getPages(countedPages){
  let result = []
  for (let i=0;i<countedPages;i++){
    let res = i+1 
    result.push(res)
   }
   return result
}
// как только изменяется стейт страниц, вычленяется что мы будем диспатчить с поправкой на лимит
// todos выводятся из redux state
function whatToDispatch(){
    currentPage>1 ? 
      pages.includes(currentPage) ?
      dispatch({type:'DownloadTodos',todos:[...todosUpdated.slice((limit*(currentPage-1)),(limit*currentPage))]}) : 
      dispatch({type:'DownloadTodos',todos:[...todosUpdated.slice((limit*(currentPage-2)),(limit*currentPage-1))]}) && setCurrentPage(currentPage-1) :
    dispatch({type:'DownloadTodos',todos:[...todosUpdated.slice(0,(limit*currentPage))]}) 
}

useEffect(()=>{
  whatToDispatch()
},[pages])
// при переходе на другую страницу колесо Сансары даёт оборот
useEffect(() => {
  setPagination()
}, [currentPage])
// функция смены страницы
function changePage(pageId){
  setCurrentPage(pageId)
  setExpanded(false)
}
// вся эта благодать запускается по факту загрузки страницы
useEffect(() => {
    setPagination()
    console.log(router)
}, [])

          const CustomAccordion = styled(Accordion)(({theme})=>({
            backgroundColor:theme.palette.primary.main,
            color:theme.palette.secondary.main,
            padding:'10px 5px',
            transition:'.3s!important',
            margin:'5 auto',
            border:0,
            borderRadius:'.25rem',
    
            '.css-bzav2w-MuiPaper-root-MuiAccordion-root.Mui-expanded':{
                color:'yellow'
            }  ,
            '.css-1qslbnz-MuiPaper-root-MuiAccordion-root':{
              margin:'5 auto',
            }
          }))
// функция редактирования todo
          async function patchTodo(id){
            // сразу определяем, что в заголовке: он не должен быть пустым
            const title = document.getElementById(`title${id}`).value
            // когда не создаём, а просто патчим todo
            if(patching==id && creating!=id && title.length!=0){
              const body = document.getElementById(`body${id}`).value
              const rawDate = new Date()
              const date = [
                String(rawDate.getDate()).length<2 ? `0${rawDate.getDate()}` : rawDate.getDate(),
                String(rawDate.getMonth()+1).length<2 ? `0${rawDate.getMonth()+1}` : rawDate.getMonth()+1,
                rawDate.getFullYear()
              ].join('.')
              const time = [
                String(rawDate.getHours()).length<2 ? `0${rawDate.getHours()}` : rawDate.getHours(),
                String(rawDate.getMinutes()).length<2 ? `0${rawDate.getMinutes()}` : rawDate.getMinutes(),
                String(rawDate.getSeconds()).length<2 ? `0${rawDate.getSeconds()}` : rawDate.getSeconds(),
              ].join(':')
              const dbResponse = await fetch(`http://localhost:5000/todos/${id}`, {
                method:'PATCH',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  "title":title,
                  "body":body,
                  "date":date,
                  "time":time
                })
               })
               setPagination()
               setTitleIsInvalid(false)
            }
            // когда создаём todo(он сразу приходит пустым и его можно только подтвердить)
            if(creating==id && title.length!=0){
                const body = document.getElementById(`body${id}`).value
                setTitleIsInvalid(false)
              const rawDate = new Date()
              const date = [
                String(rawDate.getDate()).length<2 ? `0${rawDate.getDate()}` : rawDate.getDate(),
                String(rawDate.getMonth()+1).length<2 ? `0${rawDate.getMonth()+1}` : rawDate.getMonth()+1,
                rawDate.getFullYear()
              ].join('.')
              const time = [
                String(rawDate.getHours()).length<2 ? `0${rawDate.getHours()}` : rawDate.getHours(),
                String(rawDate.getMinutes()).length<2 ? `0${rawDate.getMinutes()}` : rawDate.getMinutes(),
                String(rawDate.getSeconds()).length<2 ? `0${rawDate.getSeconds()}` : rawDate.getSeconds(),
              ].join(':')
              const dbResponse = await fetch(`http://localhost:5000/todos`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  "title":title,
                  "body":body,
                  "date":date,
                  "time":time
                })
               })
               setPagination()
            }
            // это чтобы не срабатывало когда создаём что-то И кликаем по другому todo
            // указаны только приемлемые для срабатывания условия
            if((patching==id && creating!=id || creating==id || !creating) && title.length!=0){
              setPatching(patching ? false : `${id}`)
              setCreating(false)
              setExpanded(`${id}`)
              setTitleIsInvalid(false)
            }
            // если заголовок пуст, то зажигаем его красным
            if(title.length==0){
              setTitleIsInvalid(true)
            }
         }
         // функция создания todo
         async function createTodo(){
           // если мы уже что-то создаём, и вновь кликаем по кнопке создать, то создающийся todo удаляется
           if(creating){
             deleteTodo(creating)
           }
           // если мы жмём на кнопку не имея создающийся todo
           else{
            const rawDate = new Date()
            const date = [
              String(rawDate.getDate()).length<2 ? `0${rawDate.getDate()}` : rawDate.getDate(),
              String(rawDate.getMonth()+1).length<2 ? `0${rawDate.getMonth()+1}` : rawDate.getMonth()+1,
              rawDate.getFullYear()
            ].join('.')
            const time = [
              String(rawDate.getHours()).length<2 ? `0${rawDate.getHours()}` : rawDate.getHours(),
              String(rawDate.getMinutes()).length<2 ? `0${rawDate.getMinutes()}` : rawDate.getMinutes(),
              String(rawDate.getSeconds()).length<2 ? `0${rawDate.getSeconds()}` : rawDate.getSeconds(),
            ].join(':')
            const todosIds = todosUpdated.map(todo=>todo.id)
            const newMaxId = todosIds.length==0 ? 1 : Math.max.apply(Math, todosIds)+1
            const todoTemplate = {
                    "id":newMaxId,
                    "title":'',
                    "body":'',
                    "date":date,
                    "time":time
            }
            reduxTodos.push(todoTemplate)
            dispatch({type:'DownloadTodos',todos:reduxTodos})
            setExpanded(`${newMaxId}`)
            setPatching(`${newMaxId}`)
            setCreating(`${newMaxId}`)
           }
          
       }
       // функция удаления todo
       async function deleteTodo(id){ 
         // если кликаем по создаваемому todo
         if(creating==id){
           const reduxTodosClear = reduxTodos.filter(todo=>todo.id!=id)
           dispatch({type:'DownloadTodos',todos:reduxTodosClear})
           setPatching(patching ? false : `${id}`)
           setExpanded(false)
           setCreating(false)
           setTitleIsInvalid(false)
         }
         // если кликаем по только редактируемому todo
         if(patching==id && creating!=id){
         
          const res = await fetch(`http://localhost:5000/todos/${id}`, {
            method:'DELETE'})
            setPagination()
         }
         // если кликаем по отличному от создаваемого todo
         if(creating && creating!=id && patching && patching!=id){
          const res = await fetch(`http://localhost:5000/todos/${id}`, {
            method:'DELETE'})
            const localTodos = reduxTodos.filter(todo=>todo.id!=id)
            const creatingTodo = localTodos.filter(todo=>todo.id==creating)
            creatingTodo[0].title = document.getElementById(`title${creating}`).value
            creatingTodo[0].body = document.getElementById(`body${creating}`).value
            dispatch({type:'DownloadTodos',todos:localTodos})
         }
         // если ничего не патчим и не создаём
         if(!creating && !patching){
          const res = await axios.delete(`http://localhost:5000/todos/${id}`)
            setPagination()
         }
     }
     
     const useStyles = makeStyles(({
      TextArea: {
        backgroundColor:'transparent',
        width:'100%',
        border:0,
        resize: 'none',
        outline: 'none',           
        opacity:1,
        color:theme.secondary.main,
        fontSize:'1rem',
        padding:0,
        maxHeight:'20vh',
        fontSize:'16px',
        borderRadius:'5px',
        '@media screen and (min-width: 360px)':{
          fontSize:'20px',
          borderRadius:'7.5px',
          },
        '@media screen and (min-width: 768px)':{
          fontSize:'30px',
          borderRadius:'10px',
          },
        '@media screen and (min-width: 1024px)':{
          fontSize:'30px',
          borderRadius:'12.5px',
          },
        '@media screen and (min-width: 1366px)':{
          fontSize:'30px',
          borderRadius:'15px',
          },
        '@media screen and (min-width: 1920px)':{
          fontSize:'40px',
          borderRadius:'17.5px',
          },
      },
      TextAreaActive:{
        backgroundColor:'transparent',
        width:'100%',
        border:0,
        resize: 'none',
        outline: 'none',           
        opacity:1,
        color:theme.success.main,
        fontSize:'1rem',
        padding:0,
        fontSize:'16px',
        borderRadius:'5px',
        '@media screen and (min-width: 360px)':{
          fontSize:'20px',
          borderRadius:'7.5px',
          },
        '@media screen and (min-width: 768px)':{
          fontSize:'30px',
          borderRadius:'10px',
          },
        '@media screen and (min-width: 1024px)':{
          fontSize:'30px',
          borderRadius:'12.5px',
          },
        '@media screen and (min-width: 1366px)':{
          fontSize:'30px',
          borderRadius:'15px',
          },
        '@media screen and (min-width: 1920px)':{
          fontSize:'40px',
          borderRadius:'17.5px',
          },
      },
      TextAreaInvalid:{
        backgroundColor:'transparent',
        boxShadow:'inset 0 0 .25rem .1rem red',
        width:'100%',
        border:0,
        resize: 'none',
        outline: 'none',           
        opacity:1,
        color:theme.success.main,
        fontSize:'1rem',
        padding:0,
        fontSize:'16px',
        borderRadius:'5px',
        '@media screen and (min-width: 360px)':{
          fontSize:'20px',
          borderRadius:'7.5px',
          },
        '@media screen and (min-width: 768px)':{
          fontSize:'30px',
          borderRadius:'10px',
          },
        '@media screen and (min-width: 1024px)':{
          fontSize:'30px',
          borderRadius:'12.5px',
          },
        '@media screen and (min-width: 1366px)':{
          fontSize:'30px',
          borderRadius:'15px',
          },
        '@media screen and (min-width: 1920px)':{
          fontSize:'40px',
          borderRadius:'17.5px',
          },
      },
      Input:{
        backgroundColor:'transparent',
        width:'100%',
        border:0,
        resize: 'none',
        outline: 'none',           
        opacity:1,
        color:theme.secondary.main,
        fontSize:'1rem',
        padding:0,
        resize: 'horizontal',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellips'
      },
      InputActive:{
        backgroundColor:'transparent',
        width:'100%',
        border:0,
        resize: 'none',
        outline: 'none',           
        opacity:1,
        color:theme.success.main,
        fontSize:'1rem',
        padding:0,
        resize: 'none'
      },
      Button:{
        borderRadius:'50%',
        padding:20,
        margin:5,
        minHeight:0,
        minWidth:0,
        backgroundColor:theme.secondary.main+'!important',
        backgroundSize:'80%',
        transition:'all .3s linear',
        width:'40px',
        height:'40px',
        '@media screen and (min-width: 360px)':{
          width:'45px',
          height:'45px',
          },
        '@media screen and (min-width: 768px)':{
          width:'50px',
          height:'50px',
          },
        '@media screen and (min-width: 1024px)':{
          width:'55px',
          height:'55px',
          },
        '@media screen and (min-width: 1366px)':{
          width:'60px',
          height:'60px',
          },
        '@media screen and (min-width: 1920px)':{
          width:'65px',
          height:'65px',
          },
      },
      ButtonSearchNSort:{
        borderRadius:'50%',
        padding:0,
        margin:0,
        minHeight:0,
        minWidth:0,
        backgroundColor:'transparent!important',
        boxShadow:'none!important',
        backgroundSize:'80%',
        transition:'all .3s linear',
        width:'40px',
        height:'40px',
        '@media screen and (min-width: 360px)':{
          width:'45px',
          height:'45px',
          },
        '@media screen and (min-width: 768px)':{
          width:'50px',
          height:'50px',
          },
        '@media screen and (min-width: 1024px)':{
          width:'55px',
          height:'55px',
          },
        '@media screen and (min-width: 1366px)':{
          width:'60px',
          height:'60px',
          },
        '@media screen and (min-width: 1920px)':{
          width:'65px',
          height:'65px',
          },
      },
      ButtonOut:{
        borderRadius:'50%',
        padding:20,
        margin:5,
        minHeight:0,
        minWidth:0,
        backgroundColor:theme.primary.main,
        backgroundSize:'100%',
        width:'40px',
        height:'40px',
        '@media screen and (min-width: 360px)':{
          width:'45px',
          height:'45px',
          },
        '@media screen and (min-width: 768px)':{
          width:'55px',
          height:'55px',
          },
        '@media screen and (min-width: 1024px)':{
          width:'65px',
          height:'65px',
          },
        '@media screen and (min-width: 1366px)':{
          width:'75px',
          height:'75px',
          },
        '@media screen and (min-width: 1920px)':{
          width:'85px',
          height:'85px',
          },
      },
      ButtonPagination:{
        borderRadius:'50%',
        padding:20,
        margin:5,
        minHeight:0,
        minWidth:0,
        width:'40px',
        height:'40px',
        backgroundColor:theme.primary.main,
        color:theme.secondary.main,
        backgroundSize:'100%',
        fontSize:'16px',
        fontWeight:'bold',
        '@media screen and (min-width: 360px)':{
          width:'45px',
          height:'45px',
          fontSize:'20px',
          },
        '@media screen and (min-width: 768px)':{
          width:'50px',
          height:'50px',
          fontSize:'30px',
          },
        '@media screen and (min-width: 1024px)':{
          width:'55px',
          height:'55px',
          fontSize:'30px',
          },
        '@media screen and (min-width: 1366px)':{
          width:'60px',
          height:'60px',
          fontSize:'30px',
          },
        '@media screen and (min-width: 1920px)':{
          width:'65px',
          height:'65px',
          fontSize:'40px',
          },
      },
      ButtonPaginationActive:{
        borderRadius:'50%',
        padding:20,
        margin:5,
        minHeight:0,
        minWidth:0,
        width:'45px',
        height:'45px',
        backgroundColor:theme.success.main+'!important',
        color:theme.error.main,
        backgroundSize:'100%',
        fontSize:'20px',
        fontWeight:'bold',
        '@media screen and (min-width: 360px)':{
          width:'50px',
          height:'50px',
          fontSize:'30px',
          },
        '@media screen and (min-width: 768px)':{
          width:'55px',
          height:'55px',
          fontSize:'30px',
          },
        '@media screen and (min-width: 1024px)':{
          width:'60px',
          height:'60px',
          fontSize:'30px',
          },
        '@media screen and (min-width: 1366px)':{
          width:'65px',
          height:'65px',
          fontSize:'40px',
          },
        '@media screen and (min-width: 1920px)':{
          width:'70px',
          height:'70px',
          fontSize:'45px',
          },
      },
      Search:{
        backgroundColor:theme.primary.main,
        width:'100%',
        border:0,
        borderRadius:'5px',
        outline: 'none',           
        opacity:1,
        color:theme.secondary.main,
        fontSize:'16px',
        padding:'.25rem',
        resize: 'none',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellips',
        '@media screen and (min-width: 360px)':{
          fontSize:'20px',
          borderRadius:'7.5px',
          },
        '@media screen and (min-width: 768px)':{
          fontSize:'30px',
          borderRadius:'10px',
          },
        '@media screen and (min-width: 1024px)':{
          fontSize:'30px',
          borderRadius:'12.5px',
          },
        '@media screen and (min-width: 1366px)':{
          fontSize:'30px',
          borderRadius:'15px',
          },
        '@media screen and (min-width: 1920px)':{
          fontSize:'40px',
          borderRadius:'17.5px',
          },
      },
      SearchPlace:{
          color: theme.primary.main,
          backgroundColor:theme.secondary.main,
          padding:'.15rem',
          border:0,
          borderRadius:'.25rem',
      },
      SearchPlaceActive:{
        color: theme.secondary.main,
        backgroundColor:theme.primary.main,
        padding:'.15rem',
        border:0,
        borderRadius:'.25rem',
      },
      jestTest:{
        color:'red',
        fontSize:'50px',
        width:'fit-content',
        '&:hover':{
          color:'green'
        }
      }
    }));
    const classes = useStyles();
// функция определения, какую гармошку раскрыть
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    // функция определения, где мы ищем
    // если в строке поиска что-то есть, то запускам setPagination чтобы он вывел
    function figureSearchPlace(event){
      const id = event.target.id
      searchPlace==id?null:setSearchPlace(id)
      searchValue ? setPagination() : null
    }
      // слушатель, запускающий цикл вывода при 
      // смене значения поиска или места поиска или при входе/выходе из меню сортировки
useEffect(()=>{
  setPagination()
},[searchValue,searchPlace,settingToSort])
// функция установки направления сортировки: от большего к меньшему или наоборот
      function setSortDirectionFunction(event){
        setSortDirection(event.target.value)
      }
// функция установки поля сортировки, того, что будем сортировать
      function setSortPlaceFunction(event){
        setSortPlace(event.target.value)
      }
// функция установки того, сортируем мы что сейчас или нет
      function setSettingToSortFunction(){
        if(settingToSort){
          setSettingToSort(false)
          setSort(true)
        }
        else{
          setSettingToSort(true)
        }
      }
// булевый индикатор загрузки страницы, требуется ввиду устройства Next.js
const isBrowser = () => typeof window !== "undefined"
// если страница прогрузилась, вешаем на неё слушатель, чтобы при клике на Enter в поле поиска не было переноса строки
if(isBrowser()){document.addEventListener('keypress', (event) => {
  event.key == 'Enter' && document.activeElement == document.getElementById('search') ? event.preventDefault() : null
}, false)}

    return (
        <Container sx={{p:0,m:0,width:1,backgroundColor:theme.secondary.main,minHeight:'90vh'}}>
                      <Container sx={{p:'.5rem',m:0,display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-around'}}>
                        {searchValue  ? 
                        <Button id='clear_button' data-testid={`clear_button`}
                         disableRipple variant='contained' color='secondary' className={classes.ButtonSearchNSort}>
                          <ClearIcon sx={{width:1,height:1}} onClick={()=>{setSearchValue(false),setCurrentPage(1),document.getElementById('search').value=''}}/>
                        </Button> :
                        <Button id='search_button' data-testid={`search_button`} 
                        disableRipple variant='contained' color='secondary' className={classes.ButtonSearchNSort}>
                          <SearchIcon  sx={{width:1,height:1,boxShadow:'none!important'}} onClick={()=>setSearchValue(document.getElementById('search').value)}/> 
                        </Button>
                        }
                        {searchValue  ? 
                        <Button id='search_button' data-testid={`search_button`} 
                        disableRipple variant='contained' color='secondary' className={classes.ButtonSearchNSort}>
                        <SearchIcon  sx={{width:1,height:1,boxShadow:'none!important'}} onClick={()=>setSearchValue(document.getElementById('search').value)}/> 
                        </Button> :
                         null
                        }
                      <TextareaAutosize    defaultValue={searchValue ? searchValue : null}   id='search' data-testid={`search`} maxRows='1' placeholder='idleness kills.' className={classes.Search} ></TextareaAutosize>
                      <Typography sx={{p:'0 .25rem',fontSize:{
                        zero:'16px',
                        mobile:'20px',
                        tablet:'30px',
                        laptopS:'30px',
                        laptopL:'30px',
                        pc:'40px'
                      }}}>in</Typography>
                      <Container sx={{width:'fit-content',display: 'flex', flexDirection:'column', alignItems:'center',justifyContent:'space-around',gap:'.25rem'}}>
                        {searchPlaces.map(place=>
                        <Typography sx={{fontSize:{
                          zero:'16px',
                          mobile:'20px',
                          tablet:'30px',
                          laptopS:'30px',
                          laptopL:'30px',
                          pc:'40px'
                        }}} id={place} data-testid={`place_${place}`} key={place} onClick={(event)=>figureSearchPlace(event)} className={searchPlace==place?classes.SearchPlaceActive:classes.SearchPlace}>{place}</Typography> 
                        )}
                      </Container>
                      <Button disableRipple variant='contained' color='secondary'  onClick={setSettingToSortFunction} className={classes.ButtonSearchNSort}>
                        <FilterAltIcon  sx={{width:1,height:1}}></FilterAltIcon>
                        </Button>
                        </Container>
                    {loading ?  <Container sx={{p:'.5rem',m:0,display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-around'}}><CircularProgress/></Container> : 
                    <Container>
                      <Container sx={{p:'.5rem',m:0,display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-around'}}>
                        <Dialog disableEscapeKeyDown id='dialog_container' data-testid={`dialog_container`} open={settingToSort}>
                        <DialogTitle sx={{fontSize:{
                           zero:'16px',
                           mobile:'20px',
                           tablet:'30px',
                           laptopS:'30px',
                           laptopL:'30px',
                           pc:'40px'
                        }}} data-testid={`sort_title`}>Sort</DialogTitle>
                          <DialogContent data-testid={"dialog_content"}>
                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap',m:10 }}>
                              <FormControl sx={{ m: 1, minWidth: '25vw' }}>
                              <InputLabel id="demo-dialog-select-label2" sx={{
                              fontSize:{
                                zero:'16px',
                                mobile:'20px',
                                tablet:'30px',
                                laptopS:'30px',
                                laptopL:'30px',
                                pc:'40px'
                              }}}>Sort</InputLabel>
                                <Select
                                id="demo-dialog-select2"
                                data-testid="demo-dialog-select2"
                                value={sortPlace}
                                labelId='demo-dialog-select-label2'
                                onChange={setSortPlaceFunction}
                                input={<OutlinedInput  label="Sort" />}
                                sx={{fontSize:{
                                  zero:'16px',
                                  mobile:'20px',
                                  tablet:'30px',
                                  laptopS:'30px',
                                  laptopL:'30px',
                                  pc:'40px'
                                }}}
                                >
                                  <MenuItem sx={{
                              fontSize:{
                                zero:'16px',
                                mobile:'20px',
                                tablet:'30px',
                                laptopS:'30px',
                                laptopL:'30px',
                                pc:'40px'
                              }}} data-testid={`option_0`} value="" ><em>none</em></MenuItem>
                                  {sortPlaces.map(place=>
                                  <MenuItem sx={{
                                    fontSize:{
                                      zero:'16px',
                                      mobile:'20px',
                                      tablet:'30px',
                                      laptopS:'30px',
                                      laptopL:'30px',
                                      pc:'40px'
                                    }}} value={place} key={place}
                                    id={`option_${place}`}
                                    data-testid={`option_${place}`}>
                                      {place}</MenuItem>
                                  )}
                                </Select>
                              </FormControl>
                            </Box>
                          </DialogContent>
                          <DialogTitle sx={{
                              fontSize:{
                                zero:'16px',
                                mobile:'20px',
                                tablet:'30px',
                                laptopS:'30px',
                                laptopL:'30px',
                                pc:'40px'
                              }}}>Sort by</DialogTitle>
                          <DialogContent>
                            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap',m:10 }}>
                            <FormControl sx={{ m: 1, minWidth: '25vw' }}>
                              <InputLabel id="demo-dialog-select-label" sx={{
                              fontSize:{
                                zero:'16px',
                                mobile:'20px',
                                tablet:'30px',
                                laptopS:'30px',
                                laptopL:'30px',
                                pc:'40px'
                              }}}>Sort direction</InputLabel>
                                <Select
                                id="demo-dialog-select"
                                value={sortDirection}
                                labelId='demo-dialog-select-label'
                                onChange={setSortDirectionFunction}
                                input={<OutlinedInput label="Sort direction" />}
                                sx={{fontSize:{
                                  zero:'16px',
                                  mobile:'20px',
                                  tablet:'30px',
                                  laptopS:'30px',
                                  laptopL:'30px',
                                  pc:'40px'
                                }}}
                                >
                                  <MenuItem sx={{
                              fontSize:{
                                zero:'16px',
                                mobile:'20px',
                                tablet:'30px',
                                laptopS:'30px',
                                laptopL:'30px',
                                pc:'40px'
                              }}} value="" ><em>none</em></MenuItem>
                                  {sortDirections.map(direction=>
                                  <MenuItem sx={{
                                    fontSize:{
                                      zero:'16px',
                                      mobile:'20px',
                                      tablet:'30px',
                                      laptopS:'30px',
                                      laptopL:'30px',
                                      pc:'40px'
                                    }}} value={direction.forServer} key={direction.forServer}>{direction.forUser}</MenuItem>
                                  )}
                                </Select>
                              </FormControl>
                            </Box>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={setSettingToSortFunction} sx={{fontSize:{
                                zero:'16px',
                                mobile:'20px',
                                tablet:'30px',
                                laptopS:'30px',
                                laptopL:'30px',
                                pc:'40px'
                              }}}>Ok</Button>
                          </DialogActions>
                        </Dialog>
                      </Container>
                    <Container 
                    sx={{p:0, m:0, display: 'flex', flexDirection:'column', alignItems:'center',justifyContent:'space-around',gap:'1vh'}} >
                        {reduxTodos.length!=0 ? reduxTodos.map(todo=>
                            <CustomAccordion 
                            TransitionProps={{ unmountOnExit: true }}
                            key={todo.id}
                            expanded={expanded === `${todo.id}`} 
                            onChange={patching ? (event)=>event.stopPropagation() : handleChange(`${todo.id}`)}
                            >
                            <AccordionSummary
                            >
                            <Container 
                            sx={{p:5, m:0, display: 'flex', flexDirection:'column', alignItems:'center',justifyContent:'space-around',gap:10}} position="static">
                              <Link href={`/todos/${todo.id}`} >
                              <OpenInNewIcon sx={{position:'absolute',top:0,right:0,width:{
                                  zero:'25px',
                                  mobile:'25px',
                                  tablet:'30px',
                                  laptopS:'30px',
                                  laptopL:'30px',
                                  pc:'40px'
                                },
                                height:{
                                  zero:'25px',
                                  mobile:'25px',
                                  tablet:'30px',
                                  laptopS:'30px',
                                  laptopL:'30px',
                                  pc:'40px'
                                },padding:'0 0 5px 5px'}} onClick={(event)=>event.stopPropagation()}
                                id={`link${todo.id}`} data-testid={`link${todo.id}`}>
                              </OpenInNewIcon>
                              </Link>
                              <input id={`title${todo.id}`} data-testid={`title${todo.id}`} className={patching==todo.id ? titleIsInvalid? classes.TextAreaInvalid : classes.TextAreaActive : classes.TextArea}  placeholder='Title placeholder' disabled={patching==todo.id ? false : true} id={`title${todo.id}`} defaultValue={todo.title} ></input>
                                        <Container
                                        sx={{p:0, m:0, display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',gap:10}}>
                                        <Typography data-testid={`date${todo.id}`} sx={{
                                        fontSize:{
                                          zero:'16px',
                                          mobile:'20px',
                                          tablet:'25px',
                                          laptopS:'25px',
                                          laptopL:'25px',
                                          pc:'35px'}
                                        }}>{todo.date}</Typography>
                                        <Typography sx={{
                                        fontSize:{
                                          zero:'16px',
                                          mobile:'20px',
                                          tablet:'25px',
                                          laptopS:'25px',
                                          laptopL:'25px',
                                          pc:'35px'}
                                        }}>|</Typography>
                                        <Typography data-testid={`time${todo.id}`} sx={{
                                        fontSize:{
                                          zero:'16px',
                                          mobile:'20px',
                                          tablet:'25px',
                                          laptopS:'25px',
                                          laptopL:'25px',
                                          pc:'35px'}
                                        }}>{todo.time}</Typography>
                                        </Container>
                                        <Container
                                        sx={{p:0, m:0, display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',gap:10}}
                                        >
                                        <Button variant='contained'  data-testid={`delete${todo.id}`}
                                         sx={{background: theme.mode=='light'? `url(../../trashLight.png) center center no-repeat`:`url(../../trashDark.png) center center no-repeat`}} className={classes.Button}
                                        onClick={(event)=>{event.stopPropagation();deleteTodo(todo.id)}}></Button>
                                        <Button variant='contained'   data-testid={`patch${todo.id}`}
                                         sx={{
                                           background: theme.mode=='light'?patching==todo.id?`url(../../okLight.png) center center no-repeat`:`url(../../editLight.png) center center no-repeat`:patching==todo.id?`url(../../okDark.png) center center no-repeat`:`url(../../editDark.png) center center no-repeat`
                                          }} className={classes.Button}
                                        onClick={(event)=>{event.stopPropagation();patchTodo(todo.id)}}></Button>
                                        <Button variant='contained' data-testid={`expand${todo.id}`}
                                         sx={{background: theme.mode=='light'? `url(../../arrowLight.png) center center no-repeat`:`url(../../arrowDark.png) center center no-repeat`,
                                        transform: expanded==todo.id?'rotate(180deg)':'rotate(0deg)'}} className={classes.Button}
                                       ></Button>
                                        </Container>
                                    </Container>
                            </AccordionSummary>
                            <AccordionDetails>
                              <TextareaAutosize data-testid={`body${todo.id}`} className={patching==todo.id ? classes.TextAreaActive : classes.TextArea} placeholder='Body placeholder' disabled={patching==todo.id ? false : true} id={`body${todo.id}`} defaultValue={todo.body} onClick={(event)=>event.stopPropagation()}></TextareaAutosize>
                            </AccordionDetails>
                        </CustomAccordion>
                        ) : 
                        searchValue ? 
                        <Typography variant='h4' sx={{textAlign:'center',fontSize:{
                          zero:'35px',
                          mobile:'40px',
                          tablet:'50px',
                          laptopS:'50px',
                          laptopL:'55px',
                          pc:'65px'
                        }}}>¯\_(ツ)_/¯<br></br>Nothing's found </Typography> :
                        <Typography variant='h4' sx={{textAlign:'center',fontSize:{
                          zero:'35px',
                          mobile:'40px',
                          tablet:'50px',
                          laptopS:'50px',
                          laptopL:'55px',
                          pc:'65px'
                        }}}>¯\_(ツ)_/¯<br></br>Nothing's here yet </Typography>}
                    </Container>
                    <Button sx={{background: theme.mode=='light'? `url(../../addDark.png) center center no-repeat`:`url(../../addLight.png) center center no-repeat`,transform:creating?'rotate(45deg)':null}} data-testid="buttonAdd" className={classes.ButtonOut} variant='contained' onClick={createTodo}>
                      </Button>
                    </Container> }
                    <Container sx={{p:0, m:0, display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',gap:5}}>
                       {pages.map(page=>
                       pages.length>3?
                        page==currentPage || currentPage-1==page || currentPage+1==page || pages.indexOf(page)==0 || pages.indexOf(page)==pages.length-1 ?
                        <Button id={`page_${page}`} data-testid={`page_${page}`} key={page} className={currentPage==page ? classes.ButtonPaginationActive : classes.ButtonPagination} variant='contained' onClick={()=>changePage(page)}>{page}</Button> :
                        null :
                        <Button id={`page_${page}`} data-testid={`page_${page}`} key={page} className={currentPage==page ? classes.ButtonPaginationActive : classes.ButtonPagination} variant='contained' onClick={()=>changePage(page)}>{page}</Button>
                        )}                   
                    </Container>
                </Container>
    )
}

export default mainPage