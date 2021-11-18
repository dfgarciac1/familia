import styled from "styled-components";

export const ProductsStyle = styled.div`



  @media only screen and (min-width: 624px) {
    display:flex;
    flex-grow: 1;
    flex-direction: row;
    position: initial;
    padding: 2rem 1rem;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding-right: 10px;
    justify-content: center;
  }

  .head_category {
    margin-top: 50px;
  }

  .row {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
     justify-content: center;
    margin-right: -15px;
    margin-left: -15px;
  }

  .col-12 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .contenedor_mayor{
    display: flex;
    text-align: center;
    justify-content: center;
  }
  a{
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 16px;
    color:#0E6F73;
    text-decoration: none;
}
.module_name{
    padding: 5px;
}
.number_products{
    letter-spacing: 2px;
    font-size: 16px;
    padding: 20px;
    white-space: pre;
    margin-right: 5px;
}
.products{
    margin: 20px;
    margin-right: 50px;
    margin-left: 50px;
}
.product_row{
    margin: 0;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
}
.product_columns{
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    flex: 0 0 25%;
    max-width: 25%;
}

.product_image{
    position: relative;
    overflow: hidden;
}
img {
    vertical-align: middle;
    border-style: none;
}



}

`;
