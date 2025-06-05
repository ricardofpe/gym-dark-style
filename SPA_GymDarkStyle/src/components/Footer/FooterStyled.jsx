import styled from "styled-components";

export const ContainerFooter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:50px;


`

export const FooterLogo = styled.div`
display: flex;
align-items: center;
gap: 20px;

p{
    color: #383838;
    font-size: 46px;
    font-weight: 700;
}

img{
    width: 150px;
}
`

export const FooterLinks = styled.ul`
display: flex;
list-style: none;
color: #252525;
font-size: 20px;
gap: 20px;

li{
    cursor: pointer;
}
`


export const FooterContainerIcons = styled.div`
padding: 10px;
padding-bottom: 6px;
background-color: #fbfbfb;
border: 1px solid #ebebeb;
display: flex;
gap: 20px;
`

export const FooterCopyright = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
width: 100%;
margin-bottom: 30px;
color:#1a1a1a;
font-size: 20px;

hr{
    width: 80%;
    border: none;
    border-radius: 10px;
    height: 3px;
    background-color: #c7c7c7;
}
`