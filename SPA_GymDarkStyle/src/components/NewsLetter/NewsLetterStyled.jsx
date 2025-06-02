import styled from "styled-components";

export const ContainerNewsLetter = styled.div`
width: 65%;
height: 40vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
padding: 0px 140px;
margin-bottom: 150px;
background: linear-gradient(to bottom, #ddd, #fff);
gap: 30px;

h1{
    color: #454545;
    font-size: 55px;
    font-weight: 600;
}

p{
    color: #454545;
    font-size: 20px;
}

div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    width: 730px;
    height: 70px;
    border-radius: 80px;
    border: 1px solid black;
}

input{
    width: 500px;
    margin-left: 30px;
    border: none;
    outline: none;
    color: #616161;
    font-family: Poppins;
    font-size: 16px;
}

button{
    width: 210px;
    height: 70px;
    border-radius: 80px;
    background-color: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
}
`