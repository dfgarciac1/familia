
import { makeStyles }from '@mui/styles'
import {  borderRadius, color, fontWeight, padding, textAlign, width } from '@mui/system';
import opacity from 'material-ui/svg-icons/action/opacity';
import transform from 'material-ui/svg-icons/image/transform';
import Image from 'next/image'
import product_1  from  '../images/camiseta1.jpg'
import pijama  from  '../images/pijama.jpg'

const useStyles = makeStyles({
    root: {
       margin :'0',
       padding:'0',
       boxSizing:'border-box',
       textAlign: 'center',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       position: 'relative',
       minHeight: '50vh',
       fontFamily: 'Hack, monospace',

    },
    container:{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width:'1200px',
        transformStyle:'preserve-3d',
        
    },
    box:{
     position:'relative',
     width: '300px',
     height: '350px',
     marginLeft:'20px',
     borderRadius:'20px',
     background:'black',
     transformStyle:'preserve-3d',
     '&::before' :{
        content: 'Camisetas',
        position: 'absolute',
        top:'20px',
        left: '20px',
        fontWeight:'600',
        color: 'white',
        
    },
    '&:hover': {
        transform: 'perspective(700px) rotateY(25deg)',
       
      },
    },
    name_product:{
        position: 'absolute',
        top:'0',
        left:'0',
        textAlign: 'center',
        color: 'black',
        width: '100%',
        transform: 'translade3d(0,0,75px)',
        transformStyle:'preserve-3d',
        transition:'0.5s',
        zIndex: 10,
        '&:hover': {
         top:'2em',
         opacity:'1',
        }
    },

    buy_element:{
         position: 'absolute',
         bottom: 'o',
         left:'15%',
         transformStyle:'preserve-3d',
         transform: 'translade3d(-50%,0,75px)',
         color:'white',
         background:'#333',
         padding: '20px 24px',
         borderRadius: '30px',
         textDecoration:'none',
         transition:'0.4s',
         zIndex: 10,
    }
   
    });
  
export default function Products() {
    const classes = useStyles();

    return (
    <div  className={classes.root}>
    <div className ={classes.container}>
      <div className={classes.box}>
        <h2 className={classes.name_product}> Camiseta prueba 1 </h2>
        <Image   src ={ product_1 as any } />
        <div>
         <a href="#" className={classes.buy_element}> More information</a>
         </div>
        </div>
        
        <div className={classes.box}>
        <h2 className={classes.name_product}> pantalon prueba 2 </h2>
        <Image   src ={ pijama as any }   className="Products"/>
        <div>
         <a href="#" className={classes.buy_element}> More information</a>
         </div>
        </div>
      
      </div>
      
      </div>
    )

}
