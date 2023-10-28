import "./AutoBuddyCard.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import AutoBuddyLogo from "/Users/israelsanchez/israelsportfolio/src/images/AutoBuddyLogo.jpg"

function AutoBuddyCard() {
    return (
        <div>
            <Card className="cardAuto">
            <Card.Img variant="top" style={{height:"213px"}} src={AutoBuddyLogo} />
            <Card.Body className="cardAutoBody">
                <Card.Title className="cardAutoTitle">AutoBuddy</Card.Title>
                <Card.Text className= "cardText">
                    AutoBuddy is website that allows users to recieve an estimate on how much
                    they should expect to pay for repairs for their vehicle.
                </Card.Text>
                <div className="buttonDiv">
                    <Button variant="primary" className="codeButton">Code</Button>
                    <Button variant="primary" className="demoButton">Live Demo</Button>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
}

export default AutoBuddyCard;