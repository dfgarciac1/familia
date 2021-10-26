import type { NextPage } from 'next'
import NavBar from '../components/nav_bar'
import Wrapper_2 from '../components/unit_wraper_2'
import cards from '../components/cards'
import animation from '../components/animation'
import { makeStyles }from '@mui/styles'
const useStyles = makeStyles({
  row:{
      backgroundColor:'black',
      margin: '0 ',
      padding: '0',
      boxSizing:'border-box',
      
  },
});

const Home: NextPage = () => {
  const classes = useStyles();
  return (
   <div className={classes.row} >
        <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
        margin: 0 ;
        padding: 0;
        boxSizing:border-box;
        
      }
    `}</style>
      {animation()}
    </div>
  )
}

export default Home
