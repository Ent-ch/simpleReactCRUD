import React from 'react';
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { Link } from 'react-router-dom';

const Header = props => <Navbar>
  <Navbar.Group align={Alignment.RIGHT}>
    <Navbar.Heading>Blueprint</Navbar.Heading>
    <Navbar.Divider />
    <Link to="/"><Button className="bp3-minimal" icon="home" text="Home" /></Link>
    <Link to="/articles"><Button className="bp3-minimal" icon="document" text="Articles" /></Link>
    <Link to="/login"><Button className="bp3-minimal" icon="user" text="Login" /></Link>
  </Navbar.Group>
</Navbar>;

export default Header;
