import styled from "styled-components";

export const ContainerNewCollections = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
margin-bottom: 100px;

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


export const Collections = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin-top: 50px;
gap: 30px;
`