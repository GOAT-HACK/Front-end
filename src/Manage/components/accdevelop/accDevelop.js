import GOAT from "../../Images/GOAT_logo.png";
import * as A from "./accDevelopStyle";

function AccDevelop() {
    return (
        <A.container>
            <A.header>
                POWER MANAGEMENT SYSTEM
                <A.LOGO src={GOAT}></A.LOGO>
            </A.header>
            <A.baseInfo>
                <A.simpleDesc>73%</A.simpleDesc>
                {/* TOP: +5*/}
                <A.amountWave top={30} left={-50} duSec={4.8}></A.amountWave>
                <A.amountWave top={29} left={-50} duSec={2.5}></A.amountWave>
                <A.amountWave top={31} left={-50} duSec={6.3}></A.amountWave>
                <A.coninfo>
                    현재 배터리 잔량
                    <br />
                    <A.desc>충전지의 배터리 잔량을 확인할 수 있습니다.</A.desc>
                </A.coninfo>
            </A.baseInfo>
            <A.infoDiv>
                <A.devAmount>
                    <A.title>일간발전량</A.title>
                    <A.fig>2877kw</A.fig>
                </A.devAmount>
                <A.devAmount>
                    <A.title>월간발전량</A.title>
                    <A.fig>86301kW</A.fig>
                </A.devAmount>
                <A.devAmount>
                    <A.title>연간발전량</A.title>
                    <A.fig>1050000kW</A.fig>
                </A.devAmount>
            </A.infoDiv>
        </A.container>
    )
}

export default AccDevelop;