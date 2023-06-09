import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
