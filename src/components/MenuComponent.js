import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody className="ml-5">
          <CardTitle> {dish.name}</CardTitle>
        </CardBody>
      </Link>
    </Card>
  );
}

const menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div className="container">
      <div class="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home"> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div class="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default menu;
