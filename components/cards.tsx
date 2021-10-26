
import { makeStyles }from '@mui/styles'
import { padding, width } from '@mui/system';
import clear from 'material-ui/svg-icons/content/clear';
const useStyles = makeStyles({
    column: {
       display: 'flex',
       float: 'left',
       width: '25%',
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
        padding: '126px',
        textAlign: 'center',
        backgroundColor: '#C0BCFC'
  },
  card1: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    padding: '126px',
    textAlign: 'center',
    color : 'white',
    backgroundColor: '#221E20'
},
card2: {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  padding: '126px',
  textAlign: 'center',
  backgroundColor: '#BDF5CE'
},
  });
  
export default function cards  (){
const classes = useStyles();
return(
<div className={classes.row} >
  <div className={classes.column}>
    <div className={classes.card}>1 Paso</div>
  </div>

  <div className={classes.column}>
    <div className={classes.card1}> 2 Paso </div>
  </div>
  <div className={classes.column}>
    <div className={classes.card2}>3 Paso</div>
  </div>

</div>
)
}