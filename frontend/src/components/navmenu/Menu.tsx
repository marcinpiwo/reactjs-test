import * as React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
class Menu extends React.Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">LOL Boosting</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                        <NavLink to="/" exact>Home</NavLink>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <NavLink  to="/about" exact>About</NavLink>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <NavLink to="/buy-boost" exact>Buy Boost</NavLink>
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown" >
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;

