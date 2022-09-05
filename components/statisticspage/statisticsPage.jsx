import React, { useEffect, useState, useCallback, useContext } from 'react'
import MainContainer from '../../components/mainContainer/mainContainer'
import { useTheme } from '@mui/material/styles';
import { Container, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import 'chart.js/auto'
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export default function statisticsPage() {
    
      const [loading,setLoading]=useState(false)
      const [todos,setTodos] = useState([])
      const [todoData,setTodoData] = useState([])
      const [yAxis,setYAxis] = useState('titleLength')
      const [visualYAxis,setVisualYAxis] = useState('Title length')
      const [xAxis,setXAxis] = useState('date')
      async function getAllTodos(){
        const res = await fetch(`http://localhost:5000/todos?_limit=1000000`)
        const todos = await res.json()
        setTodos(todos)
     }
     function figureVisualYAxis(){
      let a = yAxis
      let b = a.split('')
      let c = b.filter(letter=>letter==letter.toUpperCase())
      let d = c.join('')
      let e = a.split(d)
      e[e.length-1]=`${d.toLowerCase()}${e[e.length-1]}`
      function f(s){
      return  s[0] = s[0][0].toUpperCase() + s[0].slice(1)
      }
      f(e)
      setVisualYAxis(e.join(' ')) 
     }
    useEffect(()=>{
      getAllTodos()
     },[])
    useEffect(()=>{
      figureVisualYAxis()
     },[yAxis])
    
     useEffect(()=>{
      setLoading(true)
      let xArray = []
      todos.map(todo=>xArray.push(todo[xAxis])) 
      xAxis == 'time' ?  xArray = xArray.map(time=>time.split(':')[0]) : null
      let clearXArray = Array.from(new Set(xArray)).sort()
      let preData = clearXArray.map(x=>x={[xAxis]:x,'titleLength':0,'bodyLength':0})
      todos.map(todo=>{
        for(let data of preData){
          if(data[xAxis]==todo[xAxis].split(':')[0] && xAxis=='time'){
            data.titleLength+=todo.title.length
            data.bodyLength+=todo.body.length
          }
          if(data[xAxis]==todo[xAxis] && xAxis!='time'){
            data.titleLength+=todo.title.length
            data.bodyLength+=todo.body.length
          }
      }
    }
    )
    setTodoData(preData)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    },[todos,xAxis])
      const labels = todoData.map(column=>column[xAxis])
      const theme = useTheme().palette
   
     const data = {
      
        labels,
        datasets: [
          {
            label: visualYAxis,
            data: todoData.map(column=>column[yAxis]),
            backgroundColor: theme.error.main,
            borderColor: theme.error.main,
            datalabels: {
              color: 'yellow',
              font:{
                size:'100px'
              }
            }
          }
        ],
      };
      const isBrowser = () => typeof window !== "undefined"
      let windowWidth = 0
      if(isBrowser()){
        windowWidth = window.innerWidth
      }
      
      const options = {
        font:{
          size:'100px'
        },
        responsive: true,
        plugins: {
          legend: {
            display:false,
          },
          title: {
            display: true,
            text: visualYAxis+' by '+xAxis,
            font: {
              size: 
              windowWidth>=360 ? 
                windowWidth>=768 ?
                  windowWidth>=1024 ?
                    windowWidth>=1366 ?
                      windowWidth>=1920 ?
                      '55px' : 
                    '50px' : 
                  '45px' : 
                '40px' : 
              '25px' : 
            '20px'
          }
          },
          tooltip:{
            bodyColor:'rgb(255, 0, 0)'
          }
        },
        scales: {
          yAxes: {
              grid: {
                color: theme.success.main
              },
              ticks: {
                font:{
                  size: 
              windowWidth>=360 ? 
                windowWidth>=768 ?
                  windowWidth>=1024 ?
                    windowWidth>=1366 ?
                      windowWidth>=1920 ?
                      '40px' : 
                    '35px' : 
                  '30px' : 
                '25px' : 
              '14px' : 
            '12px'
                },
            }
            },
          xAxes: {
              grid: {
                color: theme.success.main
              },
              ticks: {
                font:{
                  size: 
              windowWidth>=360 ? 
                windowWidth>=768 ?
                  windowWidth>=1024 ?
                    windowWidth>=1366 ?
                      windowWidth>=1920 ?
                      '40px' : 
                    '35px' : 
                  '30px' : 
                '25px' : 
              '14px' : 
            '12px'
                },
            }
            }
        },
      };
    return (
      <Container
      sx={{p:10,m:0,width:1,backgroundColor:theme.secondary.main,minHeight:'90vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
        {loading ?  <Container sx={{p:'.5rem',m:0,display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-around'}}><CircularProgress/></Container> : <Line options={options} data={data} />}
        {loading ?  null : <Bar options={options} data={data} />}        
        <Container sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:5}}>
        <Button sx={{
                                        fontSize:{
                                          zero:'16px',
                                          mobile:'20px',
                                          tablet:'25px',
                                          laptopS:'25px',
                                          laptopL:'25px',
                                          pc:'35px'}
                                        }} variant='contained' onClick={()=>setYAxis(yAxis=='titleLength'?'bodyLength':'titleLength')}>
          {yAxis=='titleLength'?'Body length':'Title length'}
        </Button>
        <Button sx={{
                                        fontSize:{
                                          zero:'16px',
                                          mobile:'20px',
                                          tablet:'25px',
                                          laptopS:'25px',
                                          laptopL:'25px',
                                          pc:'35px'}
                                        }} variant='contained' onClick={()=>setXAxis(xAxis=='date'?'time':'date')}>
          {xAxis=='date'?'By time':'By date'}
        </Button>
        </Container>
      </Container>
    )
  }