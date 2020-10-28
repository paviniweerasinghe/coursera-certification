import React, { Component } from "react";
import Header from "./Header";
import MenuComponent from "./MenuComponent";
import DishDetailedComponent from "./DishdetailComponent ";
import Contact from "./ContactComponent";
import Footer from "./Footer";
import Home from "./HomeComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/commets";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const Homepage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route
            exact
            path="/menu"
            component={() => <MenuComponent dishes={this.state.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
