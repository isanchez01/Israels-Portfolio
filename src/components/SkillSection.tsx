import "./SkillSection.css"
import Tower from '/Users/israelsanchez/israelsportfolio/src/images/tower.png'
import Monitor from '/Users/israelsanchez/israelsportfolio/src/images/monitor.svg'
import Keyboard from '/Users/israelsanchez/israelsportfolio/src/images/keyboard.jpg'
import HTMLLogo from '/Users/israelsanchez/israelsportfolio/src/images/html5Logo.png'
import JavaScriptLogo from '/Users/israelsanchez/israelsportfolio/src/images/javascriptLogo.png'
import CSSLogo from '/Users/israelsanchez/israelsportfolio/src/images/cssLogo.png'
import ReactLogo from '/Users/israelsanchez/israelsportfolio/src/images/reactLogo.png'
import JqueryLogo from '/Users/israelsanchez/israelsportfolio/src/images/jqueryLogo.png'
import BootstrapLogo from '/Users/israelsanchez/israelsportfolio/src/images/bootstrapLogo.png'
import TypeScriptLogo from '/Users/israelsanchez/israelsportfolio/src/images/typescriptLogo.svg'
import ViteLogo from '/Users/israelsanchez/israelsportfolio/src/images/viteLogo.png'

import JavaLogo from '/Users/israelsanchez/israelsportfolio/src/images/JavaLogo.png'
import PythonLogo from '/Users/israelsanchez/israelsportfolio/src/images/pythonLogo.png'
import DjangoLogo from '/Users/israelsanchez/israelsportfolio/src/images/djangoLogo.png'
import SpringBootLogo from '/Users/israelsanchez/israelsportfolio/src/images/springBootLogo.png'
import ThymeleafLogo from '/Users/israelsanchez/israelsportfolio/src/images/thymeleafLogo.png'

import PostgresLogo from '/Users/israelsanchez/israelsportfolio/src/images/postgresLogo.png'
import TomcatLogo from '/Users/israelsanchez/israelsportfolio/src/images/tomcatLogo.png'
import AWSLogo from '/Users/israelsanchez/israelsportfolio/src/images/awsLogo.png'
import GitLogo from '/Users/israelsanchez/israelsportfolio/src/images/gitLogo.png'
import CpanelLogo from '/Users/israelsanchez/israelsportfolio/src/images/cpanelLogo.png'
import UiUxLogo from '/Users/israelsanchez/israelsportfolio/src/images/UIUXLogo.png'
import OOPLogo from '/Users/israelsanchez/israelsportfolio/src/images/OOPLogo.png'
import React, {useState, useEffect} from 'react';

    function SkillSection() {
        function handleMonitorClick() {
            if (monitorVisible == false) {
                setMonitorVisible(true);
                setTowerVisible(false);
                setKeyboardVisible(false);
            }
            else {
                setMonitorVisible(false);
            }
        }
        function handleTowerClick() {
            if (towerVisible == false) {
                setMonitorVisible(false);
                setTowerVisible(true);
                setKeyboardVisible(false);
            }
            else {
                setTowerVisible(false);
            }
        }
        function handleKeyboardClick() {
            if (keyboardVisible == false) {
                setMonitorVisible(false);
                setTowerVisible(false);
                setKeyboardVisible(true);
            }
            else {
                setKeyboardVisible(false);
            }
        }
        const [isHoveringTower, setIsHoveringTower] = useState(false);
        const [isHoveringMonitor, setIsHoveringMonitor] = useState(false);
        const [isHoveringKeyboard, setIsHoveringKeyboard] = useState(false);

        const [monitorClicked, setMonitorClicked] = useState(false);
        const [towerClicked, setTowerClicked] = useState(false);
        const [keyboardClicked, setKeyboardClicked] = useState(false);

        const[monitorVisible, setMonitorVisible] = useState(false);
        const[towerVisible, setTowerVisible] = useState(false);
        const[keyboardVisible, setKeyboardVisible] = useState(false);
        useEffect(() => {
            document.getElementById('frontEndSkillsHeader')?.scrollIntoView();
        },[monitorVisible])
        useEffect(() => {
            document.getElementById('backEndSkillsHeader')?.scrollIntoView();
        },[towerVisible])
        useEffect(() => {
            document.getElementById('otherSkillsHeader')?.scrollIntoView();
        }, [keyboardVisible])
        return (
            <>
                <div id="skills">
                    <h2>My Skills</h2>
                    <h3 className="skillsInstructionsLargeScreens">Hover around a part of the image below to view a set of my skills</h3>
                    <h3 className="skillsInstructionsSmallScreens">Click on a part of the image below to view my a set of my skills</h3>
                    <div className="computerSetupDiv">
                        <img className="towerImg" onClick={() => handleTowerClick()} onMouseOver={() => setIsHoveringTower(true)} onMouseLeave={() => setIsHoveringTower(false)} src={Tower}></img>
                        <img className="monitorImg" onClick={() => handleMonitorClick()} onMouseOver={() => setIsHoveringMonitor(true)} onMouseLeave={() => setIsHoveringMonitor(false)} src={Monitor}></img>
                        <img className="keyboardImg" onClick={() => handleKeyboardClick()} onMouseOver={() => setIsHoveringKeyboard(true)} onMouseLeave={() => setIsHoveringKeyboard(false)} src={Keyboard}></img>
                    </div>
                    <h2 style={{display:isHoveringMonitor?'block':''}} className="frontEndSkillsHeader">
                        Click to view my skills related to front-end development
                    </h2>
                    <h2 style={{display:isHoveringTower?'block':''}} className="backEndSkillsHeader">
                        Click to view my skills related to back-end development
                    </h2>
                    <h2 style={{display:isHoveringKeyboard?'block':''}} className="otherSkillsHeader">
                        Click to view my other skills
                    </h2>
                </div>

                <div id="frontEndSkillsHeader" style={{display:monitorVisible?'block':'none'}} className="frontEndSkillsDiv">
                    <h2>Front-End</h2>
                    <div className="frontEndSkillsImages">
                        <img className="htmlLogo" src={HTMLLogo}></img>
                        <img className="javascriptLogo" src={JavaScriptLogo}></img>
                        <img className="cssLogo" src={CSSLogo}></img>
                        <img className="reactLogo" src={ReactLogo}></img>
                        <img className="jqueryLogo" src={JqueryLogo}></img>
                        <img className="bootstrapLogo" src={BootstrapLogo}></img>
                        <img className="typescriptLogo" src={TypeScriptLogo}></img>
                        <img className="viteLogo" src={ViteLogo}></img>
                    </div>
                </div>
                <div id="backEndSkillsHeader" style={{display:towerVisible?'block':'none'}} className="backEndSkillsDiv">
                    <h2>Back-End</h2>
                    <div className="backEndSkillsImages">
                        <img className="javaLogo" src={JavaLogo}></img>
                        <img className="pythonLogo" src={PythonLogo}></img>
                        <img className="djangoLogo" src={DjangoLogo}></img>
                        <img className="springBootLogo" src={SpringBootLogo}></img>
                        <img className="thymeleafLogo" src={ThymeleafLogo}></img>
                    </div>
                </div>
                <div id="otherSkillsHeader" style={{display:keyboardVisible?'block':'none'}} className="otherSkillsDiv">
                    <h2>Other Skills</h2>
                    <div className="otherSkillsImages">
                        <img className="postgresLogo" src={PostgresLogo}></img>
                        <img className="tomcatLogo" src={TomcatLogo}></img>
                        <img className="awsLogo" src={AWSLogo}></img>
                        <img className="gitLogo" src={GitLogo}></img>
                        <img className="cpanelLogo" src={CpanelLogo}></img>
                        <img className="uiuxDesign" src={UiUxLogo}></img>
                        <img className="oopLogo" src={OOPLogo}></img>
                    </div>
                </div>

            </>
        )
    }
    

export default SkillSection;
