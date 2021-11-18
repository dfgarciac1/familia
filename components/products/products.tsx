import Image from "next/image";
import product_1 from "../../images/0.jpeg";
import product2 from "../../images/1.jpeg";
import product3 from "../../images/2.jpeg";
import product4 from "../../images/3.jpeg";

import { ProductsStyle } from "./ProductsStyle";

export default function Products() {
  return (
    <ProductsStyle>
      <div className="head_category">
        <div className="row">
          <div className="col-12">
            <div className="contenedor_mayor">
              <div className="contenedor_">
                <span className="module_name">
                  <a href="/hombres">Hombres</a>
                </span>
              </div>
              <div className="contenedor_">
                <b>
                  {" "}
                  (<span className="number_product">12 </span>
                  Articulos )
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="products">
        <div className="product_inner">
          <div className="product_row">
          <div className="product_columns">
              <div className="product_image"> 
               <Image  className="product_image_image" src={product_1}/>
              </div>
              </div>
              <div className="product_columns">
              <div className="product_image"> 
               <Image  className="product_image_image" src={product2}/>
              </div>
              </div>
              <div className="product_columns">
              <div className="product_image"> 
               <Image  className="product_image_image" src={product3}/>
              </div>
              </div>
              <div className="product_columns">
              <div className="product_image"> 
               <Image  className="product_image_image" src={product4}/>
              </div>
              </div>
            </div>   
        </div>
      </div>
       
      </div>

     
    </ProductsStyle>
  );
}
