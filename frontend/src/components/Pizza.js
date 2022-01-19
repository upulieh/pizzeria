import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Pizza = (props) => {
  const pizza = props.pizza;
  const pizzatype = props.pizza.pizzatype;
  const pizzaid = props.pizza.pizzaid;
  const sprice = props.pizza.sprice;
  // const mprice = props.pizza.mprice;
  // const lprice = props.pizza.lprice;
  const imageurl = props.pizza.imageurl;
  const onAdd = props.onAdd;

  // const handleClick = (pizzaid, price, e) => {
  //   console.log(`Add ${pizzaid} of price ${price}`, e.target);
  // };

  return (
    <Card className="pizza" key={pizzaid}>
      <Card.Img variant="top" src={imageurl} className="photo" />
      <Card.Body>
        <Card.Title>{pizzatype}</Card.Title>
        <Card.Text className="pizzadescription">
          Rich tomato sauce with a triple layer of mozzarella cheese.
        </Card.Text>
        <Card.Text className="pizzaprice">
          Starting from <b>${sprice}</b>
        </Card.Text>
        <Button variant="primary" onClick={() => onAdd(pizza)}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Pizza;
