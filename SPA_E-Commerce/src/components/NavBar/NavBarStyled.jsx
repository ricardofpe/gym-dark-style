
import styled from "styled-components"

export const ContainerNavBar = styled.div`
display: flex;
justify-content: space-around;
padding: 16px;
box-shadow: 0 1px 3px -2px black;
align-items: center;

ul{
    display: flex;
align-items: center;
list-style: none;
gap: 50px;
color: #525252;
font-size: 20px;
font-weight: 500;

}


li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    cursor: pointer;
}

hr{
    border: none;
    width: 80%;
    height: 3px;
    border-radius: 10px;
    background-color: #ff4141;
}
`

export const ContainerLogo = styled.div`
display: flex;
align-items: center;
gap: 10px;

`
export const ContainerNavLoginCart = styled.div`


display: flex;
align-items: center;
gap: 20px;

button{
    width: 110px;
    height: 42px;
    outline: none;
    border: 1px solid #7a7a7a;
    border-radius: 75px;
    color: #515151;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    background: white;

    &:active{
    background-color:#f3f3f3 ;
}
}




`