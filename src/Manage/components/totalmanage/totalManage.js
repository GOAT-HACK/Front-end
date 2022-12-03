import * as T from "./totalManageStyle"
import GOAT from "../../Images/GOAT_logo.png";
import refrigerator from "../../Images/refrigerator.png";
import fluorescentlight from "../../Images/fluorescent-light.png";
import airconditioner from "../../Images/air-conditioner.png";
import desktop from "../../Images/computer.png";
import { useState } from "react";

function TotalManage() {
    const [switches, setSwitches] = useState({
        s1: true,
        s2: true,
        s3: true,
        s4: true,
    });
    const onClick = (num) => {
        switch(num) {
            case 1:
                setSwitches(prev => ({...prev, s1: !prev.s1}));
                break;
            case 2:
                setSwitches(prev => ({...prev, s2: !prev.s2}));
                break;
            case 3:
                setSwitches(prev => ({...prev, s3: !prev.s3}));
                break;
            case 4:
                setSwitches(prev => ({...prev, s4: !prev.s4}));
                break;
        }
    }
    return (
        <T.container>
            <T.header>
                POWER MANAGEMENT SYSTEM
                <T.LOGO src={GOAT}></T.LOGO>
            </T.header>
            <T.baseInfo>
                <T.simpleDesc>73%</T.simpleDesc>
                {/* TOP: +5*/}
                <T.amountWave top={30} left={-50} duSec={4.8}></T.amountWave>
                <T.amountWave top={29} left={-50} duSec={2.5}></T.amountWave>
                <T.amountWave top={31} left={-50} duSec={6.3}></T.amountWave>
                <T.coninfo>
                    현재 배터리 잔량
                    <br />
                    <T.desc>충전지의 배터리 잔량을 확인할 수 있습니다.</T.desc>
                </T.coninfo>
            </T.baseInfo>
            <T.infoDiv>
                <T.detInfo>
                    <T.furnitImg src={airconditioner} />
                    <T.onOffSwitch style={switches.s1 ? { backgroundColor: '#7fffbf'} : {}} onClick={() => onClick(1)}>
                        <T.switchBtn style={switches.s1 ? {marginLeft: '60px'} : {} }/>
                    </T.onOffSwitch>
                </T.detInfo>
                <T.detInfo>
                    <T.furnitImg src={desktop} />
                    <T.onOffSwitch style={switches.s2 ? { backgroundColor: '#7fffbf'} : {}} onClick={() => onClick(2)}>
                        <T.switchBtn style={switches.s2 ? {marginLeft: '60px'} : {} }/>
                    </T.onOffSwitch>
                </T.detInfo>
                <T.detInfo>
                    <T.furnitImg src={refrigerator} />
                    <T.onOffSwitch style={switches.s3 ? { backgroundColor: '#7fffbf'} : {}} onClick={() => onClick(3)}>
                        <T.switchBtn style={switches.s3 ? {marginLeft: '60px'} : {} }/>
                    </T.onOffSwitch>
                </T.detInfo>
                <T.detInfo>
                    <T.furnitImg src={fluorescentlight} />
                    <T.onOffSwitch style={switches.s4 ? { backgroundColor: '#7fffbf'} : {}} onClick={() => onClick(4)}>
                        <T.switchBtn style={switches.s4 ? {marginLeft: '60px'} : {} }/>
                    </T.onOffSwitch>
                </T.detInfo>
            </T.infoDiv>
        </T.container>
    )
}

export default TotalManage;