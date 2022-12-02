import * as I from "./InfoStyle";
import GOAT from "../../Images/GOAT_logo.png";
import flash from "../../Images/flash.png";
import gear from "../../Images/gear.png";
import plug from "../../Images/plug.png";
import { Link } from "react-router-dom";

function Info() {
  return (
    <I.container>
      <I.header>
        POWER MANAGEMENT SYSTEM
        <I.LOGO src={GOAT}></I.LOGO>
      </I.header>
      <I.baseInfo>
        <I.simpleDesc>73%</I.simpleDesc>
        {/* TOP: +5*/}
        <I.amountWave top={30} left={-50} duSec={4.8}></I.amountWave>
        <I.amountWave top={29} left={-50} duSec={2.5}></I.amountWave>
        <I.amountWave top={31} left={-50} duSec={6.3}></I.amountWave>
        <I.coninfo>
          현재 배터리 잔량
          <br />
          <I.desc>충전지의 배터리 잔량을 확인할 수 있습니다.</I.desc>
        </I.coninfo>
      </I.baseInfo>
      <I.infoDiv>
        <I.detInfo bgImg={gear}>
          <Link
            to="/useElec"
            style={{ textDecoration: "none", width: "100%", height: "100%" }}
          >
            <I.coninfo>
              전력 사용 기기
              <br />
              <I.desc>
                전력 사용 중인 기기 현황을 확인 할 수 있습니다.
                <br />
                <br />
                <I.clickSpan>Click!</I.clickSpan>
              </I.desc>
            </I.coninfo>
          </Link>
        </I.detInfo>
        <I.detInfo bgImg={flash}>
          <Link
            to="/totalmanage"
            style={{ textDecoration: "none", width: "100%", height: "100%" }}
          >
            <I.coninfo>
              전력 사용 제어
              <br />
              <I.desc>
                기기의 전력 사용량을 제어 할 수 있습니다.
                <br />
                <br />
                <I.clickSpan>Click!</I.clickSpan>
              </I.desc>
            </I.coninfo>
          </Link>
        </I.detInfo>
        <I.detInfo bgImg={plug}>
          <Link
            to="/accdevelop"
            style={{ textDecoration: "none", width: "100%", height: "100%" }}
          >
            <I.coninfo>
              누적 발전량
              <br />
              <I.desc>
                누적 발전량 데이터를 확인 할 수 있습니다.
                <br />
                <br />
                <I.clickSpan>Click!</I.clickSpan>
              </I.desc>
            </I.coninfo>
          </Link>
        </I.detInfo>
        <I.detInfo>
          <Link
            to="/-"
            style={{ textDecoration: "none", width: "100%", height: "100%" }}
          >
            <I.coninfo>
              -
              <br />
              <I.desc>
                -
                <br />
                <br />
                <I.clickSpan>Click!</I.clickSpan>
              </I.desc>
            </I.coninfo>
          </Link>
        </I.detInfo>
      </I.infoDiv>
    </I.container>
  );
}

export default Info;
