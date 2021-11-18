import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: turquoise;
  position: fixed;
  width: 100%;
  height: 1em;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    display:flex;
    flex-grow: 1;
    flex-direction: row;
    position: initial;
    padding:0px;
    padding: 2rem 1rem;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    box-sizing: border-box;
    width: 100%;
    margin:0px;
    padding-right: 10px;
    justify-content: center;
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  ul{
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  li{
    display: table-cell;
    vertical-align: middle;
    position: relative;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
  }



  a {
    font-family:Rubik Mono One;
    font-weight: 600;
    color: #000;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 14px;
    text-decoration: none;

    background-color: transparent;
  }
`