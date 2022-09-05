import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import { Button } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { makeStyles } from "@material-ui/core/styles"

function mainContainer({children,toggleTheme}) {

    const theme = useTheme().palette
    const useStyles=makeStyles(({
        Button:{
            borderRadius:'50%',
            padding:'7.5px',
            margin:5,
            minHeight:0,
            minWidth:0,
            backgroundColor:theme.secondary.main,
            backgroundSize:'80%',
            transition:'all .3s linear',
            width:'50px',
            height:'50px',
            '@media screen and (min-width: 360px)':{
                width:'55px',
                height:'55px',
                padding:'10px',
                },
              '@media screen and (min-width: 768px)':{
                width:'60px',
                height:'60px',
                padding:'12.5px',
                },
              '@media screen and (min-width: 1024)':{
                width:'65px',
                height:'65px',
                padding:'15px',
                },
              '@media screen and (min-width: 1366)':{
                width:'70px',
                height:'70px',
                padding:'17.5px',
                },
              '@media screen and (min-width: 1920px)':{
                width:'75px',
                height:'75px',
                padding:'20px',
                },
          }
    }))
    const classes = useStyles()
    return (
        <>
         <AppBar 
            sx={{p:10, display: 'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',gap:'10%',backgroundColor:theme.primary.main,minHeight:'10vh'}} position="static">
                 <Link href="/statistics">
                    <Typography sx={{color:theme.secondary.main,fontSize:{
                        zero:'16px',
                        mobile: '20px',
                        tablet: '30px',
                        laptopS: '32.5px',
                        laptopL: '35px',
                        pc: '40px',
                    }}}>Statistics</Typography>
                </Link>
                <Button sx={{}} variant='contained' color='secondary' onClick={toggleTheme} className={classes.Button}><DarkModeIcon sx={{width:1,height:1}}></DarkModeIcon></Button>
            </AppBar>   
            <>
                {children}
            </>
        </>
    )
}

export default mainContainer
