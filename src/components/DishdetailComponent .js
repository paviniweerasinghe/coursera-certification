import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardImgOverlay,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

export default class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  // rendering the dish (test)
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle> {dish.name}</CardTitle>
            <CardText> {dish.description} </CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div> </div>;
    }
  }

  renderComments(comments) {
    return (
      <div>
        <h4>Comments</h4>;
        {comments.map((comment) => {
          return (
            <ul class="list-unstyled">
              <li>{comment.comment}</li>
              <li>
                --{comment.author}, {comment.date}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }

  render() {
    let comments;
    if (this.props.selectedDish !== null)
      comments = this.renderComments(this.props.selectedDish.comments);

    return (
      <div className="row ">
        <div class="col-12 col-md-5 mt-1">
          {this.renderDish(this.props.selectedDish)}
        </div>

        <div class="col-12 col-md-5 mt-1">{comments}</div>
      </div>
    );
  }
}
