import styled from "styled-components";

export const ContainerPopular = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
height: 80vh;

h1{
    color:#171717;
    font-size: 50px;
    font-weight: 500;
}

hr{
    width: 200px;
    height: 6px;
    border-radius: 10px;
    background-color: #252525;
}

img{
    max-width: 240px;
    max-height: 220px;
}
`;


export const PopularItem = styled.div`
margin-top: 50px;
display: flex;
gap: 30px;
width: 100%;
flex-wrap:wrap;
`