import "./CenterIntro.css";
import IsraelMainPic from '/Users/israelsanchez/israelsportfolio/src/images/israelPic.png'
import ResumePDF from "/Users/israelsanchez/israelsportfolio/src/assets/Israel Sanchez Software Engineer Resume.pdf"
import {useInView} from 'react-intersection-observer'

function CenterIntro () {
    return (
        <>
            <div className="introImage">
                <img src={IsraelMainPic}></img>
                <div className="introText">
                    <h1>
                        My name is Israel Sanchez, a Full-Stack Software Engineer 
                        and welcome to my portfolio website!
                    </h1>
                </div>
            </div>
        </>
    )
}

export default CenterIntro;