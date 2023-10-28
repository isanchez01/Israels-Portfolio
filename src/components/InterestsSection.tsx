import "./InterestsSection.css"
import React, {useState, useEffect} from 'react';
import MusicIcon from "/Users/israelsanchez/israelsportfolio/src/images/music_icon_transparent2.png"
import AutoRepairIcon from "/Users/israelsanchez/israelsportfolio/src/images/auto_repair_trans.png"
import HikingIcon from "/Users/israelsanchez/israelsportfolio/src/images/hiking_trans.png"
import Music3 from '/Users/israelsanchez/israelsportfolio/src/images/music3.jpg'
import AutoRepairImg from '/Users/israelsanchez/israelsportfolio/src/images/autoRepair.jpg'
import Temple from '/Users/israelsanchez/israelsportfolio/src/images/exploring1.jpg'
import { useInView } from "react-intersection-observer";

function InterestsSection() {
    
    const [isShown, setIsShown] = useState(false);
    const[isShown2, setIsShown2] = useState(false);
    const[isShown3, setIsShown3] = useState(false);

    const[isVisible, setIsVisible] = useState(false);
    const[isVisible2, setIsVisible2] = useState(false);
    const[isVisible3, setIsVisible3] = useState(false);
    useEffect(() => {
        document.getElementById('musicSectionId')?.scrollIntoView();
    }, [isVisible]);
    useEffect(() => {
        document.getElementById('autoRepairSectionId')?.scrollIntoView();
    }, [isVisible2]);
    useEffect(() => {
        document.getElementById('hikingSectionId')?.scrollIntoView();
    }, [isVisible3]);
    function handleClick() {
        if (isVisible == false) {
            setIsVisible(true);
            setIsVisible2(false);
            setIsVisible3(false);
        }
        else if (isVisible == true) {
            setIsVisible(false);
        }
    }
    function handleClick2() {
        if (isVisible2 == false) {
            setIsVisible(false);
            setIsVisible2(true);
            setIsVisible3(false);
        }
        else if (isVisible2 == true) {
            setIsVisible2(false);
        }
    }
    function handleClick3() {
        if (isVisible3 == false) {
            setIsVisible(false);
            setIsVisible2(false);
            setIsVisible3(true);
        }
        else if (isVisible3 == true) {
            setIsVisible3(false);
            

        }
    }
    return (
        <div id="interests" className="interestsDiv">
            <h2>My Interests</h2>
            <h3 className="interestsCaption">My other wonderful hobbies</h3>
            <h2 className="interestsInfo">Hover and click above the icons below to learn more about what
                    I like to do when I'm not programming
            </h2>
            <div className="interestsBodyDiv">
                <div className="musicDiv">
                    <img className="musicIcon" src={MusicIcon} onClick={handleClick} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
                    {isShown && (
                        <h3 className="musicIconFooter">
                            Music
                        </h3>
                    )}
                </div>
                <div className="musicSectionDiv" style={{display: isVisible ? 'block':'none', animationName:isVisible?'rollDown':'', animationDuration:isVisible?'1s':''}} id="musicSectionId">
                        <h2 className="musicSectionHeader">I'm a bit of a music lover</h2>
                        <img className="music3" src={Music3}></img>
                        <div className="musicSectionParagraphDiv">
                            <p className="musicSectionParagraph">
                                Music has always been a cornerstone of my life. I have numerous memories of me jamming out to a CD on the family stereo,
                                or on my personal CD player. I grew up listening to Mexican music, but since my childhood, I've branched out to many different
                                genres. I frequently listen to Hip-Hop/Rap music and Indie Rock, but I am always experimenting with new genres. 
                                My favorite artists to listen to, as of now, are: Moby, Fun., Gorillaz, Kid Cudi, and Juanes.
                            </p>
                            <p className="musicSectionParagraph"> 
                                As you can see, I have quite a bit of CD's. 
                                As a matter of fact, I have conducted inventory on my CD's and on the last inventory count, I had counted 750 CD's.
                                If you're curious, I try to listen to all of them, but with this many CD's, that would be quite a feat!
                                In addition, I tend to gravitate towards a few albums that I love. 
                            </p>
                            <p className="musicSectionParagraph"> 
                                Why so many CD's? It's because I've fallen in love with the record store. 
                                Since I began collecting CD's around December 2019, I absolutely love going to the record store 
                                and browsing the many CD's that are in stock. Primarily, this love comes from me looking at the 
                                different album covers and discovering new and awesome artists from artwork that piqued my curiosity.
                                Not to mention the price, which has allowed me to purchase many albums in one store run for cheap.
                                For me, it's always a good time at the record store.
                            </p>
                        </div>
                </div>
                <div className="autoRepairDiv">
                    <img className="autoRepairIcon" src={AutoRepairIcon} onClick={handleClick2} onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}/>
                    {isShown2 && (
                        <h3 className="autoRepairIconFooter">
                            Auto Repair
                        </h3>
                    )}
                </div>
                <div className="autoRepairSectionDiv" id="autoRepairSectionId" style={{display: isVisible2 ? 'block':'none', animationName:isVisible2?'rollDown':'', animationDuration:isVisible2?'1s':''}}>
                        <h2 className="autoRepairSectionHeader">I'm also a self-proclaimed gearhead</h2>
                        <img className="autoRepairImg" src={AutoRepairImg}></img>
                        <div className="autoRepairParagraphDiv">
                            <p className="autoRepairSectionParagraph">
                                Ever since I can remember, I've been helping my father fix up his car in our garage.
                                My very first memory pertaining to auto repair was of me tightening up the battery terminals
                                on my dad's Pontiac Grand AM. Like programming, I can talk all day about cars and the repairs
                                that I've completed with my dad. I love putting in hours of dirty, hard labor to replace a faulty part on a car.
                                Something about turning the key and driving a freshly repaired car after putting in hours of dirty, hard labor really
                                tickles me pink, especially when the car gets a performance boost. 
                            </p>
                            <p className="autoRepairSectionParagraph">
                                I'm also interested in learning about the history of different car brands. My favorite type and brand of vehicle
                                has changed throughout my nearly 20 year-old passion of cars, but as of now, I love all cars equipped with an 8 cylinder engine.
                                The aggressive, throaty, bassy roar that those engines produce has won me over. 
                            </p>
                            <p className="autoRepairSectionParagraph">
                                If you're wondering if the creation of AutoBuddy was inspired by my passion for auto repair, the answer is yes.
                                I created AutoBuddy as a means to give people an edge over overcharging mechanics.
                                I am well aware of the substantial number of dishonest mechanics who charge victims too much for repairs, or for unnecessary repairs.
                                While AutoBuddy isn't aimed to help people evade unnecessary repairs, it does give them a change to avoid 
                                being overcharged.
                            </p>
                        </div>
                </div>
                <div className="exploreDiv">
                    <img className="hikingIcon" src={HikingIcon} onClick={handleClick3} onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}/>
                    {isShown3 && (
                        <h3 className="hikingIconFooter">
                            Exploring
                        </h3>
                    )}
                </div>
                <div id="hikingSectionId" className="hikingSectionDiv" style={{display: isVisible3 ? 'block':'none', animationName:isVisible3?'rollDown':'', animationDuration:isVisible3?'1s':''}}>
                        <h2 className="hikingSectionHeader">Nothing beats exploring a new place!</h2>
                        <img className="temple" src={Temple}></img>
                        <div className="hikingSectionParagraphDiv">
                            <p className="hikingSectionParagraph">
                                I love the feeling of covering new ground, whether it be a section in my
                                neighborhood that I've never been to, or a national park that my partner and I
                                stumbled upon. Something about taking in the new, never-before-seen landscape of a foreign place
                                really soothes me. 
                            </p>

                            <p className="hikingSectionParagraph">
                                One of my favorite activites that I do with my partner is traveling to and walking around new neighborhoods and/or cities in our area.
                                The train ride there provides us with a space to sit together and observe the different settings of the towns we pass by.
                                Once we walk across a town, we like to chose between one of many local restaurants to eat at.
                            </p>

                            <p className="hikingSectionParagraph">
                                My love for exploring extends way past my hometown, as I love traveling to different states and exploring the different towns there.
                                If I'm in the mood for some hiking, I'll take a trip to a national park. One of my more memorable trips took place at Utah, where my cousins
                                and I drove across the country to Moab, where we hiked and did many new activites.
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default InterestsSection;