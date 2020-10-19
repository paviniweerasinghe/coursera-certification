import React from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href=""> Link </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
