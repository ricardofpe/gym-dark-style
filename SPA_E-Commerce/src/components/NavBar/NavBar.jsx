import logo from "../../assets/Frontend_Assets/logo.png";
import cart_icon from "../../assets/Frontend_Assets/cart_icon.png";
import {
  ContainerLogo,
  ContainerNavBar,
  ContainerNavLoginCart,
} from "./NavBarStyled";

export default function NavBar() {
  return (
    <ContainerNavBar>
      <ContainerLogo>
        <img src={logo} alt="" />
      </ContainerLogo>

      <ul>
        <li>Shop<hr/></li>
        <li>Compression</li>
        <li>Oversized</li>
        <li>Tank top</li>
        <li>Shorts</li>
        <li>Pants</li>
      </ul>

      <ContainerNavLoginCart>
        <button>Login</button>
        <img src={cart_icon} alt="" width={25} />
      </ContainerNavLoginCart>
    </ContainerNavBar>
  );
}
