
import { makeStyles }from '@mui/styles'
import { borderRadius, padding } from '@mui/system';


const useStyles = makeStyles({
    root: {
       display: 'flex',
       backgroundColor:'white',
       margin :'0',
       padding:'0',
       boxSizing:'border-box',
    },
    nav:{
        margin: '25px',
        padding: '16px',
        top: '15px',
        display: 'flex',


    },
    menuItems: {
        display: 'flex',
        flex: '1 1 auto',
        listStyleType: 'none',

  },
  li :{
       margin :'10px',
       flexDirection: 'row',
       border: '2px solid transparent',
       borderRadius: '5px',
       marginLeft : '20px',
       transition: 'background 0.2s',
  },
  a:{
     textDecoration:'none',
     color : '#010001',
     borderRadius:'20px',
     padding: '6px 15px',
     fontSize:'17px',
     fontFamily:'Roboto Mono, monospace',
     '&:hover':{
         color: '#D527D5'
     }
     
  },
  });
  
export default function NavBar() {
    const classes = useStyles();

    return (
        <div  className={classes.root}>
            <nav className={classes.nav}>
                <ul className={classes.menuItems}> 
                        <li className ={classes.li}>
                        <a  href= '#' className = {classes.a} data-item='Camisetas'> 
                          Hombres 
                        </a>
                        </li>
                        <li className ={classes.li}>
                        <a  href= '#' className = {classes.a} data-item='Camisetas'> 
                             Mujeres 
                        </a>
                        </li>
                        <li className ={classes.li}>
                        <a  href= '#' className = {classes.a} data-item='Camisetas'> 
                        Niños                        </a>
                        </li>
                    
                </ul>
            </nav>
        </div>
    )

}
