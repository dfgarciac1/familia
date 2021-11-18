import type { NextPage } from 'next'
import NavBar from '../components/nav_bar'
import Products from '../components/products/products'
import { makeStyles }from '@mui/styles'
const useStyles = makeStyles({
  row:{
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

      {NavBar()}
    </div>
  )
}

export default Home
