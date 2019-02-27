import React, {Component} from 'react'
import './Navbar.css'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

export default class NavComponent extends Component
{
  constructor(props) 
  {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="warning" light expand="md">
          <NavbarBrand href="/">Djangu-y</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink href="#">Section 2</NavLink></NavItem>
              <NavItem><NavLink href="#">Section 3</NavLink></NavItem>
              <NavItem><NavLink href="#">Section 4</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}