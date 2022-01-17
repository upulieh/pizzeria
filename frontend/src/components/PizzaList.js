import Pizza from "./Pizza";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const PizzaList = (props) => {
  const listOfPizzas = props.listOfPizzas;
  const onAdd = props.onAdd;
  const categories = ["classic", "supreme", "signature"]; //try thiis

  const [classic, setClassic] = useState([]);
  const [supreme, setSupreme] = useState([]);
  const [signature, setSignature] = useState([]);

  function categorizeType() {
    setClassic(listOfPizzas.filter((item) => item.category === categories[0]));
    setSupreme(listOfPizzas.filter((item) => item.category === categories[1]));
    setSignature(
      listOfPizzas.filter((item) => item.category === categories[2])
    );
  }

  useEffect(() => {
    categorizeType();
  }, [listOfPizzas]);

  return (
    <>
      <h5 className="categories">{categories[0].toUpperCase()}</h5>
      <Container>
        <Row>
          {classic.map((pizza) => {
            return (
              <Col key={pizza.pizzaid}>
                <Pizza pizza={pizza} onAdd={onAdd} />
              </Col>
            );
          })}
        </Row>
      </Container>

      <h5 className="categories">{categories[1].toUpperCase()}</h5>
      <Container>
        <Row>
          {supreme.map((pizza) => {
            return (
              <Col key={pizza.pizzaid}>
                <Pizza pizza={pizza} onAdd={onAdd} />
              </Col>
            );
          })}
        </Row>
      </Container>

      <h5 className="categories">{categories[2].toUpperCase()}</h5>
      <Container>
        <Row>
          {signature.map((pizza) => {
            return (
              <Col key={pizza.pizzaid}>
                <Pizza pizza={pizza} onAdd={onAdd} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default PizzaList;
