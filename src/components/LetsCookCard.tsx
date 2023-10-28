import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import "./LetsCookCard.css"
import LetsCookLogo from "/Users/israelsanchez/israelsportfolio/src/images/LetsCook.png"
function LetsCookCard() {
    return (
        <Card className="card">
          <Card.Img variant="top" src={LetsCookLogo} />
          <Card.Body className="cardBody">
            <Card.Title className="cardTitle">LetsCook</Card.Title>
            <Card.Text className= "cardText">
              LetsCook is a recipe lookup web app that allows users to not only look up
              recipes for each meal of the day, but to also add their own recipe and contribute to LetsCook.
            </Card.Text>
            <Button variant="primary" className="codeButton">Code</Button>
            <Button variant="primary" className="demoButton">Live Demo</Button>
          </Card.Body>
        </Card>
    );
}

export default LetsCookCard;
