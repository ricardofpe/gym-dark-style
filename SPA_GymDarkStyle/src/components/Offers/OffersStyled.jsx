import styled from "styled-components";

export const ContainerOffers = styled.div`
width: 65%;
height: 60vh;
display: flex;
margin: auto;
padding: 0px 140px;
margin-bottom: 50px;
margin-top: 50px;
background: linear-gradient(to bottom, #ddd, #fff);


`

export const OffersLeft = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
h1{
    color: #171717;
    font-size: 80px;
    font-weight: 600;
}

p{
    color: #171717;
    font-size: 22px;
    font-weight: 600;

}

button{
    width: 282px;
    height: 70px;
    border-radius: 35px;
    background-color: #ff4141;
    border: none;
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
}

`

export const OffersRight = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
padding-top: 50px;


img{
    max-width: 340px;
    max-height: 320px;
}
`