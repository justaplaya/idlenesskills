
import MainContainer from '../../components/mainContainer/mainContainer'
import Link from 'next/link'
import React, { useState } from 'react'
 import { Container, Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles"
import TextareaAutosize from '@mui/base/TextareaAutosize'

export async function getServerSideProps({params}) {
    const res = await fetch(`http://localhost:5000/todos/${params.id}`)
    const todo = await res.json()
    return {
      props: {todo}
    }
  }

export default function({todo,toggleTheme}){
const theme = useTheme().palette
const [patching,setPatching] = useState(false)
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
    backgroundColor:theme.secondary.main,
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
    backgroundColor:'transparent',
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
}));
const [titleIsInvalid,setTitleIsInvalid]=useState(false)

const classes = useStyles();
async function patchTodo(id){
  const title = document.getElementById(`title${id}`).value
  if(title.length!=0){
  const body = document.getElementById(`body${id}`).value
  const rawDate = new Date()
  const date = [rawDate.getDate(),rawDate.getMonth()+1,rawDate.getFullYear()].join('.')
  const time = [rawDate.getHours(),rawDate.getMinutes(),rawDate.getSeconds()].join(':')
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
   setPatching(patching ? false : `${id}`)
   setTitleIsInvalid(false)
  }
  if(title.length==0){
    setTitleIsInvalid(true)
  }
}

async function deleteTodo(id){ 
const res = await fetch(`http://localhost:5000/todos/${id}`, {
method:'DELETE'})
setTitleIsInvalid(false)
window.location='/'
}

    return(
      <MainContainer toggleTheme={toggleTheme}>
        <Container sx={{p:10,m:0,width:1,backgroundColor:theme.secondary.main,minHeight:'90vh'}}>
          <Container 
          sx={{borderRadius:'.25rem', p:5, m:0, width:'auto', display: 'flex', backgroundColor:theme.primary.main, flexDirection:'column', alignItems:'center',justifyContent:'space-around',gap:10}} position="static">                
            <input id={`title${todo.id}`} data-testid={`title${todo.id}`} className={patching==todo.id ? titleIsInvalid? classes.TextAreaInvalid : classes.TextAreaActive : classes.TextArea}  placeholder='Title placeholder' disabled={patching==todo.id ? false : true} id={`title${todo.id}`} defaultValue={todo.title} onClick={(event)=>event.stopPropagation()}></input>
              <Container
              sx={{p:0, m:0, display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',gap:10}}>
                <Typography sx={{color:theme.secondary.main,fontSize:{
                                          zero:'16px',
                                          mobile:'20px',
                                          tablet:'25px',
                                          laptopS:'25px',
                                          laptopL:'25px',
                                          pc:'35px'}}}>{todo.date}</Typography>
                <Typography sx={{color:theme.secondary.main,fontSize:{
                                          zero:'16px',
                                          mobile:'20px',
                                          tablet:'25px',
                                          laptopS:'25px',
                                          laptopL:'25px',
                                          pc:'35px'}}}>|</Typography>
                <Typography sx={{color:theme.secondary.main,fontSize:{
                                          zero:'16px',
                                          mobile:'20px',
                                          tablet:'25px',
                                          laptopS:'25px',
                                          laptopL:'25px',
                                          pc:'35px'}}}>{todo.time}</Typography>
              </Container>
              <Container
              sx={{p:0, m:0, display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',gap:10}}>
                <Button variant='contained' 
                sx={{background: theme.mode=='light'? `url(../../trashLight.png) center center no-repeat`:`url(../../trashDark.png) center center no-repeat`}} className={classes.Button}
                onClick={(event)=>{event.stopPropagation(),deleteTodo(todo.id)}}
                style={{backgroundColor:theme.secondary.main}}></Button>
                <Button variant='contained'  
                sx={{background: theme.mode=='light'?patching==todo.id?`url(../../okLight.png) center center no-repeat`:`url(../../editLight.png) center center no-repeat`:patching==todo.id?`url(../../okDark.png) center center no-repeat`:`url(../../editDark.png) center center no-repeat`}} className={classes.Button}
                onClick={(event)=>{event.stopPropagation(),event.preventDefault,patchTodo(todo.id)}}
                style={{backgroundColor:theme.secondary.main}}></Button>
              </Container>
            <TextareaAutosize id={`body${todo.id}`} data-testid={`body${todo.id}`} className={patching==todo.id ? classes.TextAreaActive : classes.TextArea} placeholder='Body placeholder' disabled={patching==todo.id ? false : true} id={`body${todo.id}`} defaultValue={todo.body} onClick={(event)=>event.stopPropagation()}></TextareaAutosize>
          </Container>
        </Container>
      </MainContainer>
        
    )
}
