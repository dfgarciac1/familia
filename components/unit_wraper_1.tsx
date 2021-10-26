
import {createStyles,  makeStyles }from '@mui/styles'
import {images} from '../utils/carrousel_data'
import Image from "next/image"
import repeat from 'material-ui/svg-icons/av/repeat';

const useStyles = makeStyles({
    carrousel: {
       width:'100%',
       height:'500px',
       backgroundColor:'black',
    },
    carrouselInner :{
        height: '100%',
        width: '100%',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        

    }

  });
  
export default function Wrapper_1() {
    const classes = useStyles();
    const image = images[0].img;
    return (
        <div  className={classes.carrousel}>
            <div className ={classes.carrouselInner}>
            <Image src={ image}  className = {classes.carrouselInner}/>
            </div>
        </div>
    )

}
