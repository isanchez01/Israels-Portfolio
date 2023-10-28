import "./NavBar.css";
import Hamburger from "./Hamburger";
import {useState} from 'react'

function NavBar() {
    const [openHamburger, setIsHamburger] = useState(false);
    function scrollToAboutMe() {
        document.getElementById("aboutMe")?.scrollIntoView();
    }
    function scrollToSkills() {
        document.getElementById("skills")?.scrollIntoView();
    }
    function scrollToProjects() {
        document.getElementById("project")?.scrollIntoView();
    }
    function scrollToInterests() {
        document.getElementById("interests")?.scrollIntoView();
    }
    return <> {
        <div>
            <nav>
                <div className="Hamburger" onClick={() => openHamburger ? setIsHamburger(false) : setIsHamburger(true)}>
                    <Hamburger />
                </div>
                <h2 className="navHeader">Israel's Portfolio</h2>
                <div className="navDiv">
                    <ul id="navbar">
                        <li>
                            <a onClick={scrollToAboutMe} className="aboutMeLink">About Me</a>
                        </li>
                        <li>
                            <a onClick={scrollToSkills}>Skills</a>
                        </li>
                        <li>
                            <a onClick={scrollToProjects}>Projects</a>
                        </li>
                        <li>
                            <a onClick={scrollToInterests}>Interests</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={{display:openHamburger ? '' : 'none'}} className="navbarMobile">
                <a onClick={scrollToAboutMe}>About Me</a>
                <a onClick={scrollToSkills}>Skills</a>
                <a onClick={scrollToProjects}>Projects</a>
                <a onClick={scrollToInterests}>Interests</a>
            </div>
        </div>
    }
    </>
}

export default NavBar;
