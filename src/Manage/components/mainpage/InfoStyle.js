import styled from "styled-components";
import { keyframes } from "styled-components";

// height: 100vh;
// width: 100vw;
// display: flex;

// background-color: black;
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
  background: linear-gradient(to top right, #100722, #100722, #29BA5A) left;
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
  position: relative;
  display: flex;
  margin-top: 10rem;
  margin-left: 5rem;
  width: 300px;
  height: 500px;
  background-color: #2e2e2e;
  border-radius: 0.5rem;
  border: 8px solid #87ff9d;
  box-shadow: 0px 0px 40px #87ff9d;
  overflow: hidden;
  z-index: 2;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 8px solid #43bb6a;
    box-shadow: none;
    transition-duration: 0.5s;
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
  display: flex;
  flex-wrap: wrap;
  margin-top: 8rem;
  margin-left: 4rem;
  width: 70%;
  /* background-color: white; */
`;

export const clickSpan = styled.div`
  font-size: 1.25rem;
`;

export const detInfo = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-left: 7rem;
  width: 400px;
  height: 200px;
  background: url(${(props) => props.bgImg});
  background-size: 80%;
  background-position: 40%;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  border: 3px solid #2e2e2e;
  overflow: hidden;
  z-index: 2;
  justify-content: center;
  align-items: center;

  &:hover {
    transition-duration: 0.35s;
    transition-timing-function: ease-out;
    background-size: 100%;
    background-position: 50%;
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
