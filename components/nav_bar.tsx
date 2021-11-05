
import { makeStyles }from '@mui/styles'
import { borderRadius, letterSpacing, padding } from '@mui/system';
import Cards from './cards';

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
       minHeight: '100vh',
       fontFamily: 'Hack, monospace',

    },
    div:{
        color:' #727272',
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
       borderRadius:'100px',
       paddingLeft:'8px',

       position: 'relative',
       paddingBottom:'8px'
  },
  Sharat:{
    margin: '16px',
    fontSize: '96px',
    color: '#ccc',
    textTransform: 'uppercase',
    transition: 'all 1s ease-in-out',
    position: 'relative',
    '&::before' : {
      content: 'attr(data-item)',
      transition: 'all 1s ease-in-out',
      color: '#8254ff',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      width: '0',
      overflow: 'hidden',
    },
  
    '&:hover': {
     '&::before' :{
        width: '100%',
      }
    }
  },
    });
  
export default function NavBar() {
    const classes = useStyles();

    return (
        <div  className={classes.root}>
            <p  data-item='Sharat' className={classes.Sharat}>Sharat</p>

           <section>
  <nav>
    <ul className="nav navbarmenuItems">
     {Cards()}
    </ul>
  </nav>

</section>
        </div>
    )

}
