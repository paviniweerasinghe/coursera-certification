import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
      <CardBody className="ml-5">
        <CardTitle> {dish.name}</CardTitle>
      </CardBody>
    </Card>
  );
}

const menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default menu;
