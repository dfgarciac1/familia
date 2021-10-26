
import { createStyles, makeStyles } from '@mui/styles'
import { images } from '../utils/carrousel_data'
import Image from "next/image"
import repeat from 'material-ui/svg-icons/av/repeat';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const useStyles = makeStyles({
    carrousel: {
        width: '100%',
        height: '12rem',
        backgroundColor: 'black',
        background: 'rgba(0,0,0,.5)',
        '@media (max-width:991px)' : {
        height: '100%',
        },
    },
    carrouselInner: {
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        boxShadow: ' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    },
    left: {
        flex: '5%',
        height: '100%',
        backgroundColor: 'rgb(0, 0, 0, 0.6)',
        display: 'grid',
        placeItems: 'center',
        color: 'white',
        cursor: 'pointer',
    }

});

export default function Wrapper_2() {
    const [currImg, setCurrImg] = useState(1);
    const classes = useStyles();

    return (

        <div className={classes.carrousel}>

            <div className={classes.carrouselInner} >
                <div
                    className={classes.left}
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                    }}
                >
                    <ArrowBackIosIcon style={{ fontSize: 50 }} />
                </div>
                <Image src={images[currImg].img} className={classes.carrouselInner} />
                <div
                    className={classes.left}
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1);
                    }}
                >
                    <ArrowForwardIosIcon style={{ fontSize: 50 }} />
                </div>
            </div>
        </div>
    )

}
