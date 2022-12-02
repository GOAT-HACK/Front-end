import styled from "styled-components";
import { keyframes } from "styled-components";

export const container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: black;
`;

export const header = styled.div`
  display: flex;
  position: fixed;
  top: 0%;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top right, #100722, #100722, #baadeb) left;
  font-size: 2.25rem;
  font-weight: bold;
  color: white;
  align-items: center;
  padding-left: 25px;
  border-bottom: 3px solid white;
  text-shadow: 0px 0px 20px white;
  box-shadow: 0px 2px 10px white;
  margin-bottom: 3rem;
`;

export const LOGO = styled.img`
  position: absolute;
  right: 5%;
  width: 250px;
  height: 100%;
  background-size: cover;
`;

export const energy = styled.div`
  position: relative;
  display: flex;
  width: 200px;
  height: 350px;
  background-color: #2e2e2e;
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const amountWave = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  animation: ${rotate} ${(props) => props.duSec}s infinite linear;
  border-radius: 37.5%;
  width: 600px;
  height: 600px;
  background-color: #7fffbf;
  box-shadow: 0px 0px 20px #7fffbf;
`;

export const simpleDesc = styled.div`
  position: absolute;
  font-size: 3rem;
  font-weight: 600;
  color: white;
  z-index: 1;
  text-shadow: 0px 0px 20px white;
`;

export const sideDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 600px;
  background-size: cover;
  justify-content: space-around;
  align-items: center;
`;

const createborder = keyframes`
`;

export const electronics = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
