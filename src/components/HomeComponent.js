import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
} from "reactstrap";

function RenderCard(props) {
  return (
    <Card>
      <CardImg src={props.item.image} alt={props.item.name} />
      <CardBody>
        <CardTitle> {props.item.name} </CardTitle>
        {props.item.designation ? (
          <CardSubtitle> {props.item.designation} </CardSubtitle>
        ) : null}
        <CardText> {props.item.description} </CardText>
      </CardBody>
    </Card>
  );
}

export default function HomeComponent(props) {
  return (
    <div class="container">
      <div class="row align-item-start">
        <div class="col-12 col-md m-1">
          <RenderCard item={props.dish} />
        </div>
        <div class="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div class="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}
