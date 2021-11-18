import buzo from "../../images/image4.svg";
import camiseta from "../../images/image5.svg"
import Image from "next/image";
import Navbar from "../../components/navBar/index"
import navBar from "../../components/navBar/index";
import Products from "../../components/products/products";

export default function hombres() {
  return (
    <div>
    { navBar()}


    { Products()}

    </div>

    );
}
