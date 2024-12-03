import styled from "styled-components";

export const ContainerItem = styled.div`
  width: 350px;

  p {
    margin: 6px 0px;
  }
`;

export const ContainerPrices = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContainerItemPriceNew = styled.div`
  color: #374151;
  font-size: 18px;
  font-weight: 600;
`;

export const ContainerOldPrice = styled.div`
  color: #8c8c8c;
  font-size: 18px;
  font-weight: 500;
  text-decoration: line-through;

  &hover {
    transform: scale(1.05);
    transition: 0.6s;
  }
`;
