
import { makeStyles }from '@mui/styles'
import { padding, width } from '@mui/system';
import clear from 'material-ui/svg-icons/content/clear';
const useStyles = makeStyles({
    column: {
       display: 'flex',
       float: 'left',
       width: '25%',
       justifyContent : 'center',
       padding: '10px 30px',
    },
    row:{
        margin: '4n2px -5px',
        'after':{
            content : '',
            display: 'table',
            clear: 'both',
        }
    },
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        padding: '3em',
        borderRadius:'1em',
        transform:'perspective(500px)',
        transformStyle:'preserve-3d',
        textAlign: 'center',
        backgroundColor: '#39C2A3',
        '&:hover': {
          transform: 'perspective(400px) rotateY(45deg)',
         
        },
  },
  card1: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    textAlign: 'center',
    color : 'white',
    backgroundColor: '#221E20',
    padding: '2em',
        borderRadius:'1em',
        transform:'perspective(500px)',
        transformStyle:'preserve-3d',
        '&:hover': {
          transform: 'perspective(400px) rotateY(45deg)',
         
        },
},
card2: {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  textAlign: 'center',
  backgroundColor: '#B75E73',
  padding: '2em',
  borderRadius:'1em',
  transform:'perspective(500px)',
  transformStyle:'preserve-3d',
  '&:hover': {
    transform: 'perspective(400px) rotateY(45deg)',
   
  },
},
a:{
   textDecoration:'none',
    margin: '16px',
    fontSize: '26px',
    color: 'white',
    textTransform: 'uppercase',
    position: 'relative',
    '&::before' : {
      content: 'attr(data-item)',
      transition: 'all 1s ease-in-out',
      color: '#B25454',
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '5px',
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
  
export default function cards  (){
const classes = useStyles();
return(
<div className={classes.row} >
  <div className={classes.column}>
    <div className={classes.card}>
      <li><a  className={classes.a} href='/' data-item=''>Home</a></li>
    </div>
  </div>

  <div className={classes.column}>
    <div className={classes.card1}> 
    <li><a  className={classes.a} href='/hombres' data-item=''>Hombres</a></li>
     </div>
  </div>
  <div className={classes.column}>
    <div className={classes.card2}>
    <li><a className={classes.a} href='#' data-item=''>Mujeres</a></li>
    </div>
  </div>

</div>
)
}