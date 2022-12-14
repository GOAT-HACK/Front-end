import { useRef, useState } from "react";
import './Header.css';
import MenuOptions from "./MenuOptions/MenuOptions";
import Logo from '../Images/GOAT_logo.svg';

function Header() {
    const [isMenu, setIsMenu]=useState(true);
    const homeMenuButtonRef = useRef();

    const onToggleMenu = () => {
        setIsMenu(prev => !prev);
        if (isMenu) {
            homeMenuButtonRef.current.classList.add('prevent-click');
            setTimeout(() => {
                homeMenuButtonRef.current.classList.remove('prevent-click');
            }, 1000);
        } else {
            homeMenuButtonRef.current.classList.add('prevent-click');
            setTimeout(() => {
                homeMenuButtonRef.current.classList.remove('prevent-click');
            }, 700);
        }
    }

    return (
        <>
            <div id="header">
                <div id="logo">
                    <img src={Logo} />
                </div>
                <div id="home-menu-button" onClick={onToggleMenu} ref={homeMenuButtonRef}>
                    <div className={`menu-button ${isMenu ? "" : " menu-btn-hidden"}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`home-button ${isMenu ? "home-btn-hidden" : ""}`}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <MenuOptions isMenu={isMenu} />
        </>
    );
}

export default Header;