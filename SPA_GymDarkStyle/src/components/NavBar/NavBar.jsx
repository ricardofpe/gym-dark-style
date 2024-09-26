import logo from "../../assets/Frontend_Assets/logo.png";
import cart_icon from "../../assets/Frontend_Assets/cart_icon.png";
import {
  ContainerLogo,
  ContainerNavBar,
  ContainerNavLoginCart,
  NavCartCount,
} from "./NavBarStyled";
import { useState } from "react";

export default function NavBar() {

  const [menu, setMenu] = useState("shop")
   
  return (
    <ContainerNavBar>
      <ContainerLogo>
        <img src={logo} alt="" />
      </ContainerLogo>

      <ul>
        <li onClick={() => {setMenu("shop")}}>Shop{menu==="shop" ? <hr/> : <> </> }</li>
        <li onClick={() => {setMenu("compression")}}>Compression{menu==="compression" ? <hr/> : <> </> }</li>
        <li onClick={() => {setMenu("oversized")}}>Oversized{menu==="oversized" ? <hr/> : <> </> }</li>
        <li onClick={() => {setMenu("tankTop")}}>Tank top{menu==="tankTop" ? <hr/> : <> </> }</li>
        <li onClick={() => {setMenu("shorts")}}>Shorts{menu==="shorts" ? <hr/> : <> </> }</li>
        <li onClick={() => {setMenu("pants")}}>Pants{menu==="pants" ? <hr/> : <> </> }</li>
      </ul>

      <ContainerNavLoginCart>
        <button>Login</button>
        <img src={cart_icon} alt="" width={28} />
        <NavCartCount>0</NavCartCount>
      </ContainerNavLoginCart>
    </ContainerNavBar>
  );
}
