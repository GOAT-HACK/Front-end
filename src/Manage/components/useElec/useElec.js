import * as U from "./useElecStyle";
import GOAT from "../../Images/GOAT_logo.png";
import refrigerator from "../../Images/refrigerator.png";
import fluorescentlight from "../../Images/fluorescent-light.png";
import airconditioner from "../../Images/air-conditioner.png";
import desktop from "../../Images/computer.png";

function UseElec() {
  return (
    <U.container>
      <U.header>
        POWER MANAGEMENT SYSTEM
        <U.LOGO src={GOAT}></U.LOGO>
      </U.header>
      <U.sideDiv>
        <U.electronics
          src={airconditioner}
          width={130}
          height={130}
        ></U.electronics>
        <U.electronics src={desktop} width={100} height={100}></U.electronics>
      </U.sideDiv>
      <U.energy>
        <U.simpleDesc>75%</U.simpleDesc>
        <U.amountWave top={30} left={-50} duSec={4.8}></U.amountWave>
        <U.amountWave top={29} left={-50} duSec={2.5}></U.amountWave>
        <U.amountWave top={31} left={-50} duSec={6.3}></U.amountWave>
      </U.energy>
      <U.sideDiv>
        <U.electronics
          src={refrigerator}
          width={100}
          height={130}
        ></U.electronics>
        <U.electronics
          src={fluorescentlight}
          width={100}
          height={100}
        ></U.electronics>
      </U.sideDiv>
    </U.container>
  );
}

export default UseElec;
