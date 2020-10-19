import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div class="container">
          <NavbarBrand href=""> Link </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
