import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardImgOverlay,
  CardText,
} from "reactstrap";
import DishDetailedComponent from "./DishdetailComponent ";

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
    console.log("MenuComponent constructor is invoked");
  }

  componentDidMount() {
    console.log("MenuComponent componentDidMount is invoked");
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            {/* <CardImgOverlay> */}
            <CardBody className="ml-5">
              <CardTitle> {dish.name}</CardTitle>
            </CardBody>
            {/* </CardImgOverlay> */}
          </Card>
        </div>
      );
    });

    console.log("MenuComponent render is invoked");
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetailedComponent selectedDish={this.state.selectedDish} />
      </div>
    );
  }
}
