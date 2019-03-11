import React, {Component} from 'react'
import './nav.scss'

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
        <Navbar light expand="md">
          <NavbarBrand href="/">Djangu-Y</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink href="#">Intro</NavLink></NavItem>
              <NavItem><NavLink href="#">Message</NavLink></NavItem>
              <NavItem><NavLink href="#">Usage</NavLink></NavItem>
              <NavItem><NavLink href="#">About</NavLink></NavItem>
              <NavItem><NavLink href="#">Contact</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}