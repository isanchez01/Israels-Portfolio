import AutoBuddyCard from "./AutoBuddyCard";
import LetsCookCard from "./LetsCookCard";
import LetsCookLogo from "/Users/israelsanchez/israelsportfolio/src/images/LetsCook.png"
import AutoBuddyLogo from "/Users/israelsanchez/israelsportfolio/src/images/AutoBuddyLogo.jpg"

import {useState, useEffect} from 'react';
import "./ProjectSection.css";
import { useInView } from "react-intersection-observer";

function ProjectSection() {
    var [scrollPosition, setScrollPosition] = useState(0);
    function getScrollPosition() {
        setScrollPosition(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", getScrollPosition);
        return () => {
          window.removeEventListener("scroll", getScrollPosition);
        };
    }, [scrollPosition]);

    return <> {
        <div id="project">
            <h2 className="projectHeader">My Projects</h2>
            <h3 className="projectsCaption">Here's what I've done with my knowledge</h3>
            <div className="letsCookBodyDiv">
                <img style={{display:(scrollPosition > 1830)?'block':'', animationName:(scrollPosition > 1830)?'fadeIn':'', animationDuration:(scrollPosition > 1830)?'1s':'', animationIterationCount:1}} className="letsCookLogo" src={LetsCookLogo} />
                <h2 style={{display:(scrollPosition > 2046)?'block':'', animationName:(scrollPosition > 2046)?'fadeIn':'', animationDuration:(scrollPosition > 2046)?'1s':'', animationIterationCount:1}} className="letsCookHeader">
                    LetsCook
                </h2>
                <p style={{display:(scrollPosition > 2157)?'block':'', animationName:(scrollPosition > 2157)?'fadeIn':'', animationDuration:(scrollPosition > 2157)?'1s':'', animationIterationCount:1}} className="letsCookParagraph">
                    LetsCook is a recipe lookup web app that allows users to not only look up
                    recipes for each meal of the day, but to also add their own recipe and contribute to LetsCook.
                </p>
                
                <a href="https://github.com/isanchez01/LetsCook" target="_blank" className="codeLink">
                    See The Code
                </a>
                <a href="http://letscook.us-east-2.elasticbeanstalk.com/letscook" target="_blank" className="demoLink">
                    See The Demo
                </a>
                <h3 className="letsCookImportantInfo">
                    Scroll below for important information
                </h3>
                <h2 className="letsCookImportantInfoHeader">
                        Please read before running the demo
                </h2>
                <div className="letsCookImportantInfoPDiv">
                    <p className="letsCookImportantInfoParagraph">
                        Currently, to use LetsCook, you should type in the time of meal you would like to see recipes from.
                        As of now, LetsCook only has 1 Dinner recipe stored, "Pork Tenderloin". 
                        To demo the recipe mealtime lookup tool, type in "Dinner"
                    </p>
                    <p className="letsCookImportantInfoParagraph">
                        Consequently, "Pork Tenderloin" is the only recipe that users can lookup.
                        To do so, simply type "Pork Tenderloin" in the recipe lookup tool.
                    </p>
                    <p className="letsCookImportantInfoParagraph">
                        One important note about adding in your recipe is that you should separate your recipe steps with numbers, followed by commas (1. Like, 2. This).
                    </p>
                </div>
            </div>
            <div className="autoBuddyBodyDiv">
                <img style={{display:(scrollPosition > 3637)?'block':'', animationName:(scrollPosition > 3637)?'fadeIn':'', animationDuration:(scrollPosition > 3637)?'1s':'', animationIterationCount:1}} className="autoBuddyLogo" src={AutoBuddyLogo} />
                <h2 style={{display:(scrollPosition > 3826)?'block':'', animationName:(scrollPosition > 3826)?'fadeIn':'', animationDuration:(scrollPosition > 3826)?'1s':'', animationIterationCount:1}} className="autoBuddyHeader">
                    AutoBuddy
                </h2>
                <p style={{display:(scrollPosition > 3920)?'block':'', animationName:(scrollPosition > 3920)?'fadeIn':'', animationDuration:(scrollPosition > 3920)?'1s':'', animationIterationCount:1}} className="autoBuddyParagraph">
                    AutoBuddy is website that allows users to recieve an estimate on how much
                    they should expect to pay for repairs for their vehicle.
                </p>
                
                <a href="https://github.com/isanchez01/AutoBuddy" target="_blank" className="codeLinkAutoBuddy">
                    See The Code
                </a>
                <a href="http://13.59.112.14/" target="_blank" className="demoLinkAutoBuddy">
                    See The Demo
                </a>
                <h3 className="autoBuddyImportantInfo">
                    Scroll below for important information
                </h3>
                <h2 className="autoBuddyImportantInfoHeader">
                    Please read before running the demo
                </h2>
                <div className="autoBuddyImportantInfoPDiv">
                    <p className="autoBuddyImportantInfoParagraph1">
                        All estimates are calculated using numbers derived from reports submitted by real users of AutoBuddy.
                    </p>
                    <p className="autoBuddyImportantInfoParagraph2">
                        AutoBuddy contains two tools that empower auto repair customers: the Cost Finder Estimator Tool & the Is It Fair? Quote Comparison Tool.
                    </p>
                    <p className="autoBuddyImportantInfoParagraph3">
                        Currently, to demo the Cost Finder tool, please scroll down to the form and select "2000" for the year, type in "Toyota" for the make, "Corolla" for the model, and "Fan Cluch Replacement" for the repair.
                    </p>
                    <p className="autoBuddyImportantInfoParagraph4">
                        Currently, to demo the Is It Fair? tool, scroll down to the form and enter in the same vehicle information as in the Cost Finder tool demo. Type in whichever number you'd like for the Quote field.
                    </p>
                    <p className="autoBuddyImportantInfoParagraph5">
                        To enter in your auto repair report, scroll down to the last form and enter in any car information you'd like.
                    </p>
                </div>
            </div>
        </div>
    }
    </> 
} 

export default ProjectSection;