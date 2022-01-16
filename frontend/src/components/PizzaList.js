import Pizza from "./Pizza";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PizzaList = (props) => {
  const listOfPizzas = props.listOfPizzas;
  return (
    <Container>
      <Row>
        {listOfPizzas.map((pizza) => {
          return (
            <Col>
              <Pizza pizza={pizza} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PizzaList;
