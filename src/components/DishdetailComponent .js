import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
  return (
    <div>
      <h4>Comments</h4>;
      {comments.map((comment) => {
        return (
          <ul class="list-unstyled">
            <li>{comment.comment}</li>
            <li>
              --{comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

const DishDetail = (props) => {
  return (
    <div className="row ">
      <div class="col-12 col-md-5 mt-1">
        <RenderDish dish={props.dish} />
      </div>

      <div class="col-12 col-md-5 mt-1">
        {props.dish && <RenderComments comments={props.dish.comments} />}
      </div>
    </div>
  );
};
export default DishDetail;
