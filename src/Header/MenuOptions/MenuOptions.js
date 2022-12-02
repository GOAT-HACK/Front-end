import { useEffect, useRef } from "react";
import './MenuOptions.css';

function MenuOptions({ isMenu }) {
    const menuOptionsLi = useRef([]);

    useEffect(() => {
        if (isMenu) { // 매뉴버튼을 눌렀는가?
            for(let i = 0; i < 4; i++)
                setTimeout(() => {
                    menuOptionsLi.current[i].classList.remove('li-show-animation');
                }, 240 - i * 80);
        } else {
            for(let i = 0; i < 4; i++)
                setTimeout(() => {
                    menuOptionsLi.current[i].classList.add('li-show-animation');
                }, 300 + i * 100);
        }
    }, [isMenu]);

    return (
        <div id="menu-options" className={isMenu ? "menu-options-window-hidden" : ""}>
            <ul>
                <li ref={e => menuOptionsLi.current[0] = e}>Home</li>
                <li ref={e => menuOptionsLi.current[1] = e}>Backdrop of GOAT</li>
                <li ref={e => menuOptionsLi.current[2] = e}>Smart Grid System</li>
                <li ref={e => menuOptionsLi.current[3] = e}>GOAT System</li>
            </ul>
            <div id="menu-options-background" className={isMenu ? "" : "menu-options-bg-animation"}></div>
        </div>
    );
}

export default MenuOptions;