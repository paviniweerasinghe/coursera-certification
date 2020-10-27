import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div class="container">
            <NavbarBrand href=""> Gedara yana gaman </NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div class="container">
            <div class="row row-header">
              <div class="col-12 col-sm-6">
                <h1>Gedara Yana Gaman</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi inventore numquam eveniet et dolorum deserunt atque
                  perspiciatis, suscipit aliquid error.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}
