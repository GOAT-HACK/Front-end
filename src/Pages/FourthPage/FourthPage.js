import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../defaultPage.css';
import './FourthPage.css';

function FourthPage() {
    const [isShowLGT, setIsShowLGT] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= window.innerHeight * 5) {
                setIsShowLGT(true);
            }
        })
    })
    return (
        <div className="page">
            <div className="contents">
                <h2 className={`title last-greet-title1 ${isShowLGT ? "show-lgt" : ""}`} >GOAT에 대해 들어 주셔서</h2>
                <h3 className={`title last-greet-title2 ${isShowLGT ? "show-lgt" : ""}`} >감사합니다!</h3>
                <div className="works">
                    <Link to="/info" id="three" className={`work-titles last-greet-title3 ${isShowLGT ? "show-lgt" : ""}`}><div className="GO-AT-GOAT-button">GOAT 시스템 사이트 링크</div></Link>
                </div>
            </div>
        </div>
    );
}

export default FourthPage;