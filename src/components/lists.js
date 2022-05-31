import { Link } from "react-router-dom";
import { getlistPokemon } from "../data";
import {Container ,Card, Col, Button} from "react-bootstrap";

export default function Lists() {
  let listPokemon = getlistPokemon();
  return (
    <div style={{ display: "flex" }}>
      <div className="row">
      </div>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {listPokemon.map((lists) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/listPokemon/${lists.id}`}
            key={lists.id}
          >

      <Container className='row'>  
        <Col md="4">
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/Z2YNt0b/home.png" />
            <Card.Body>
              <Card.Title>{lists.name.french}</Card.Title>
              <Card.Text>
              type: {lists.type} {"| "} <br />
             Attack : {lists.base.Attack} {" | "} <br />Speed :{" "}
            {lists.base.Speed}
              </Card.Text>
              <Button variant="success">VOIR {lists.id}</Button>
              <Button variant="primary">EDIT {lists.id} </Button>
            </Card.Body>
          </Card>
        </Col>
        </Container> 
          </Link>
        ))}
      </nav>
    </div>
  );
}
