import { useEffect, useRef } from 'react';
import './FirstPage.css';

function FirstPage() {
    const highLightRefs = useRef([]);
    const smallNameRefs = useRef([]);
    const titleAbout = useRef();
    const titleMe = useRef();
    useEffect(() => {
        for(let i = 0; i < 4; i++){
            highLightRefs.current[i].classList.add('highlight-animation');
            smallNameRefs.current[i].classList.add('small-name-animation');
            titleAbout.current.classList.add('title-about-animation');
            titleMe.current.classList.add('title-me-animation');
        }
    }, []);
    return (
        <div id="first-page">
            <div id="contents">
                <h1 id="title">
                    <span id="title-about" ref={titleAbout}>Save our Energy</span>
                    <span id="title-me" ref={titleMe}>:To Flush Toilet</span>
                </h1>
                <h3 id="my-name">
                    <span className="highlight" ref={e => highLightRefs.current[0] = e}>G</span>
                    <span className="small-name" ref={e => smallNameRefs.current[0] = e}>reat</span>

                    <span className="highlight" ref={e => highLightRefs.current[1] = e}>o</span >
                    <span className="small-name" ref={e => smallNameRefs.current[1] = e}>ff</span>
                    <span className="highlight" ref={e => highLightRefs.current[2] = e}>A</span>
                    <span className="small-name" ref={e => smallNameRefs.current[2] = e}>ll</span>
                    <span className="highlight" ref={e => highLightRefs.current[3] = e}>T</span>
                    <span className="small-name" ref={e => smallNameRefs.current[3] = e}>oilet</span>
                </h3>
            </div>
        </div>
    );
}

export default FirstPage;