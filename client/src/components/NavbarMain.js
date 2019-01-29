
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { NavLink as RouterNavLink} from 'react-router-dom'
  // TURN DROPDOWN INTO A ADMIN DASHBOARD
  
  
export default class NavbarMain extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogOut = event => {
    this.props.logOutUser()
  }
  
  render() {
    return (
      <div>
        <Navbar className="NavbarMain navbar-dark" light expand="md">
          <NavbarBrand tag={RouterNavLink} to="/">Art-Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { this.props.logged_in &&
              <NavItem>
                <NavLink tag={RouterNavLink} to="/products/new">Add Product</NavLink>
              </NavItem>
            }
              <NavItem>
                <NavLink tag={RouterNavLink} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RouterNavLink} to="/contact" >Contact</NavLink>
              </NavItem>
              { this.props.logged_in &&
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Admin
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.handleLogOut}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

