import React, { useCallback } from 'react';
import resume from "../../assets/images/Edward_Kubiak_Resume.pdf";

function Nav({ selected, onSelect }) {
    const navHandler = useCallback((evt) => {
        const page = evt.currentTarget.dataset.page
        onSelect(page)
    }, [])


    return (
        <header>
        <h2>
            <div data-page="home" onClick={navHandler}>
                <span>Edward Kubiak</span>
            </div>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className={`mx-2 ${selected === 'about' && 'navActive'}`} onClick={navHandler}  data-page="about">
                    <span data-testid="about">About me</span>
                </li>
                <li className={`mx-2 ${selected === 'contact' && 'navActive'}`}  onClick={navHandler} data-page="contact">
                    <span>Contact</span>
                </li>
                <li className={`mx-2 ${selected === 'portfolio' ? 'navActive' : ''}`} onClick={navHandler}  data-page="portfolio">
                    <span>Portfolio</span>
                </li>
                <li className="mx-2">
                    <a href={resume} target="_blank">Resume</a>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Nav;