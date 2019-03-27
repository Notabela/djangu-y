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
          <NavbarBrand href="/">Djangu-y</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink href="#message">Sur</NavLink></NavItem>
              <NavItem><NavLink href="#usage">Fonctionnalités</NavLink></NavItem>
              <NavItem><NavLink href="#about">Directions</NavLink></NavItem>
              <NavItem><NavLink href="#contact">S'inscrire</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}