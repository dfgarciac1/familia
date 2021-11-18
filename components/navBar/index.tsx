import React from "react";
import { NavbarWrapper } from "./NavbarStyles";

import Image from "next/image";
import logo from "../../images/logo.jpg";
function Navbar() {
  return (
    <div>
      <NavbarWrapper>
        <div>
          <ul>
            <li>
              <a>
                <Image width={40} height={40} src={logo} />
              </a>
            </li>
            <li>
              <a href="#"> Hombre</a>
            </li>
            <li>
              <a href="#"> Mujer</a>
            </li>
            <li>
              <a href="#"> Niño</a>
            </li>
            <li>
              <a> Más</a>
            </li>
          </ul>
        </div>
      </NavbarWrapper>
    </div>
  );
}

export default Navbar;
