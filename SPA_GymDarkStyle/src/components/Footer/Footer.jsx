import { ContainerFooter, FooterContainerIcons, FooterCopyright, FooterLinks, FooterLogo } from "./FooterStyled";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import logo from "/logo.png"

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <ContainerFooter>
      <FooterLogo>
        <img src={logo} alt="Logo" />
      </FooterLogo>
      <FooterLinks>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </FooterLinks>
     
        <FooterContainerIcons>
          <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
          <a href="#" aria-label="Twitter"><FaTwitter size={24} /></a>
          <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
        </FooterContainerIcons>
    

      <FooterCopyright>
        <hr />
        <p>Copyright @ {currentYear} - All Right Reserved</p>
      </FooterCopyright>
    </ContainerFooter>
  );
}