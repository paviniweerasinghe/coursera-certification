import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  NavItem,
  Collapse,
  NavbarToggler,
  Nav,
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div class="container">
            <NavbarToggler onClick={() => this.toggleNav()} />
            <NavbarBrand className="mr-auto" href="">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Gedara_Yana_Gaman"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav brand>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"> Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"> About</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"> Menu</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"> Contact</span>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
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
