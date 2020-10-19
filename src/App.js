import React from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <NavbarBrand href=""> Link </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default App;
