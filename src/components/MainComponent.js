import React, { Component } from "react";
import Header from "./Header";
import MenuComponent from "./MenuComponent";
import DishDetailedComponent from "./DishdetailComponent ";
import Footer from "./Footer";
import Home from "./HomeComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const Homepage = () => {
      return <Home />;
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
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
