import logo from "../../assets/Frontend_Assets/logo.png";
import cart_icon from "../../assets/Frontend_Assets/cart_icon.png";
import {
  ContainerLogo,
  ContainerNavBar,
  ContainerNavLoginCart,
  NavCartCount,
} from "./NavBarStyled";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menu, setMenu] = useState("shop");

  return (
    <ContainerNavBar>
      <ContainerLogo>
        <img src={logo} alt="" />
      </ContainerLogo>

      <ul>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("compression");
          }}
        >
          <Link to="/compression">Compression</Link>
          {menu === "compression" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("oversized");
          }}
        >
          <Link to="/oversized">Oversized</Link>
          {menu === "oversized" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("tankTop");
          }}
        >
          <Link to="/tank-top">Tank Top</Link>
          {menu === "tankTop" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("shorts");
          }}
        >
          <Link to="/shorts">Shorts</Link>
          {menu === "shorts" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("pants");
          }}
        >
          <Link to="/pants">Pants</Link>
          {menu === "pants" ? <hr /> : <> </>}
        </li>
      </ul>

      <ContainerNavLoginCart>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" width={28} />
        </Link>
        <NavCartCount>0</NavCartCount>
      </ContainerNavLoginCart>
    </ContainerNavBar>
  );
}
