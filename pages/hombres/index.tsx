import { makeStyles,createStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { padding, width } from "@mui/system";
import clear from "material-ui/svg-icons/content/clear";

const useStyles = makeStyles((theme) =>
createStyles ({
    column: {
    display: "flex",
    float: "left",
    width: "25%",
    justifyContent: "center",
    padding: "10px 30px",
  },
  contenedor_completion: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.5",
    color: "#212529",
    textAlign: "left",
  },
  cabecera_categorias: {
  marginTop:"50px",
  },
  "@media (min-width: 960px)": {
    cabecera_categorias: {
      backgroundColor: "black"
    }
  },
  card1: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    textAlign: "center",
    color: "white",
    backgroundColor: "#221E20",
    padding: "2em",
    borderRadius: "1em",
    transform: "perspective(500px)",
    transformStyle: "preserve-3d",
    "&:hover": {
      transform: "perspective(400px) rotateY(45deg)",
    },
  },
  card2: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    textAlign: "center",
    backgroundColor: "#B75E73",
    padding: "2em",
    borderRadius: "1em",
    transform: "perspective(500px)",
    transformStyle: "preserve-3d",
    "&:hover": {
      transform: "perspective(400px) rotateY(45deg)",
    },
  },
  a: {
    textDecoration: "none",
    margin: "16px",
    fontSize: "26px",
    color: "white",
    textTransform: "uppercase",
    position: "relative",
    "&::before": {
      content: "attr(data-item)",
      transition: "all 1s ease-in-out",
      color: "#B25454",
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "5px",
      right: "0",
      width: "0",
      overflow: "hidden",
    },
    "&:hover": {
      "&::before": {
        width: "100%",
      },
    },
  },
}));
export default function hombres() {
  const classes = useStyles();

  return (
      <div className={classes.contenedor_completion}>
        <div className={classes.cabecera_categorias}>
          <div className={classes.menu_item_genero}>
           <div className={classes.menu_item_genero_contenedor}>
              <span className ={classes.menu_item_search} >
                   <a href="/hombres">HOMBRES</a>
              </span>
               </div>
        </div>
        </div>
      </div>
  );
}
