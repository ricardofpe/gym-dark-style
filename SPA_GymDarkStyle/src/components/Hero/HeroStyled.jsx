import styled from "styled-components";

export const ContainerHero = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #000000, #00000021 100%);
  display: flex;
`;

export const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 180px;
  line-height: 1.1;

  h2 {
    color: white;
    font-size: 26px;
    font-weight: 600;
  }

  p {
    color: white;
    font-size: 100px;
    font-weight: 700;
  }
`;

export const ContainerHandIcon = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;

  img {
    width: 105px;
  }
`;

export const ContainerHeroButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 310px;
  height: 70px;
  border-radius: 75px;
  margin-top: 30px;
  background: #00000020;
  color: white;
  font-size: 22px;
  border: 1px solid black;
  cursor: pointer;
  font-weight: 500;
`;

export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
