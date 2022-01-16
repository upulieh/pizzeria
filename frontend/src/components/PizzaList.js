import Pizza from "./Pizza";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PizzaList = (props) => {
  const listOfPizzas = props.listOfPizzas;
  const onAdd = props.onAdd;
  return (
    <Container>
      <Row>
        {listOfPizzas.map((pizza) => {
          return (
            <Col key={pizza.pizzaid}>
              <Pizza pizza={pizza} onAdd={onAdd}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PizzaList;
