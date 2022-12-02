import styled from "styled-components";
import { keyframes } from "styled-components";


export const container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 103px 1fr;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  column-gap: 30px;
  background-color: black;
`;

export const header = styled.div`
    grid-column: 1 / 3;
  display: flex;
  top: 0%;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top right, #100722, #100722, #baadeb) left;
  font-size: 2.25rem;
  font-weight: bold;
  color: white;
  align-items: center;
  justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
  border-bottom: 3px solid white;
  text-shadow: 0px 0px 20px white;
  box-shadow: 0px 2px 10px white;
`;

export const LOGO = styled.img`
  width: 250px;
  height: 100%;
`;

const disappInfo = keyframes`
  from {
    opacity: 0.95;
  }
  top {
    opacity: 0.1;
  }
`;

export const coninfo = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: #2e2e2e;
  border-radius: 0.5rem;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  z-index: 3;
`;

export const baseInfo = styled.div`
    margin: 0 auto;
  position: relative;
  display: flex;
  width: 300px;
  height: 500px;
  background-color: #2e2e2e;
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 2;
  justify-content: center;
  align-items: center;
  &:hover {
    ${coninfo} {
      opacity: 0.85;
      animation: ${disappInfo} 0.0001 ease-out;
    }
  }
`;

export const desc = styled.p`
  font-size: 1rem;
  text-align: center;
  width: 70%;
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
  border-radius: 32.5%;
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

export const title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const infoDiv = styled.div`
    margin: 0 auto;
  display: grid;
  max-width: 870px;
  grid-template-columns: 1fr 1fr;
  column-gap: 72px;
  row-gap: 30px;
  flex-wrap: wrap;
`;

export const clickSpan = styled.div`
  font-size: 1.25rem;
`;

export const detInfo = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  width: 400px;
  height: 200px;
  background-color: #2e2e2e;
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 2;
  justify-content: center;
  align-items: center;
  &:hover {
    ${coninfo} {
      transition-duration: 0.1s;
      opacity: 0.85;
      background-color: gray;
      cursor: pointer;
    }
    ${clickSpan} {
      text-decoration: underline;
    }
  }
`;
export const furnitImg = styled.img`
  width: 60px;
`

export const onOffSwitch = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  width: 120px;
  height: 60px;
  background-color: red;
  border-radius: 99999px;
`

export const switchBtn = styled.div`
transition: 0.5s ease-in-out;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 99999px;
`