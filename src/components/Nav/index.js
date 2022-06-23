import React from 'react';
import resume from "../../assets/images/Edward_Kubiak_Resume.pdf";


function Nav(props) {
    const {
      contactSelected,
      setContactSelected,
    } = props;

    return (
        <header>
        <h2>
            <a href="/">
            <span>Edward Kubiak</span>
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                About me
                </a>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            <li className="mx-2">
                <a href="#portfolio">
                Portfolio
                </a>
            </li>
            <li className="mx-2">
                <a href={resume}>
                Resume
                </a>
            </li>
            </ul>
        </nav>
        </header>
    );
}

export default Nav;