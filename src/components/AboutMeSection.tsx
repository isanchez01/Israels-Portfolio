import "./AboutMeSection.css"
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AboutMe1 from '/Users/israelsanchez/israelsportfolio/src/images/aboutMe1.jpg'
import AboutMe2 from '/Users/israelsanchez/israelsportfolio/src/images/aboutMe2.jpg'
function AboutMeSection() {
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
    return (
        <div id="aboutMe" className="aboutMeDiv">
            <div className="aboutMeHeaderAndCaption">
                <h2>About Me</h2>
                <h3 className="aboutMeCaption">Learn more about me!</h3>
            </div>
            <div className="aboutMeBody"> 
                <img className="aboutMe2" src={AboutMe2}></img>
                <div className="aboutMeParagraphDiv1">
                    <h3 style={{display:(scrollPosition > 270)?'block':'', animationName:(scrollPosition > 270)?'fadeIn':'', animationDuration:(scrollPosition > 270)?'1s':'', animationIterationCount:1}}className="aboutMeParagraphHeader1">
                        How my passion for computers began
                    </h3>
                    <div>
                        <p style={{display:(scrollPosition > 270)?'block':'', animationName:(scrollPosition > 270)?'fadeIn':'', animationDuration:(scrollPosition > 270)?'1s':'', animationIterationCount:1}} className="aboutMeParagraph1">
                            Ever since I can remember, I have been tinkering with computers.
                            Little old me has always loved sifting through the numerous settings,
                            running all the different interesting programs, and knowing all the obscure
                            little details of each machine that I got my hands on. When I entered my junior year
                            of high school, I decide to take up a Java class. Within 5 minutes of the class, I feel in
                            love with programming. The rest is history. 
                        </p>
                    </div>
                    <h3 style={{display:(scrollPosition > 470)?'block':'', animationName:(scrollPosition > 470)?'fadeIn':'', animationDuration:(scrollPosition > 470)?'1s':'', animationIterationCount:1}} className="aboutMeParagraphHeader1">
                        What am I like?
                    </h3>
                    <p style={{display:(scrollPosition > 570)?'block':'', animationName:(scrollPosition > 570)?'fadeIn':'', animationDuration:(scrollPosition > 570)?'1s':'', animationIterationCount:1}} className="aboutMeParagraph1">
                        Hard-working, passionate, and innovative are three adjectives that come to mind when describing myself.
                        When it comes to programming, I put in my all to solve problems that I may be having with my program.
                        When coupled with my passionate love for programming and my ability to think outside the box, I've been able to push through
                        the times when I felt hopelessly stuck.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection;