import styled from "styled-components";

export const ButtonProdutos = styled.button`
  background-color: #ffbe33;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  font-size: 15px;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const UlProducts = styled.ol`
  background: #ffba68;
  padding: 20px;
`;

export const LiProducts = styled.li`
  background: #ffe6c8;
  padding: 10px;
  margin: 10px;
`;

export const ContainerDetalhes = styled(Container)`
  flex-direction: column;
  width: 50%;
  text-align: justify;
`;

export const Text = styled.span`
  font-weight: bold;
`;

export const Title = styled.h1`
  text-align: center;
`;
