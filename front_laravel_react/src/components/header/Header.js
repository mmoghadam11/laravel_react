import React from 'react'
import './Header.css'
import { Navbar, Nav ,Container} from 'react-bootstrap'
import { NavLink } from "react-router-dom"

function header() {
    return (
        <Navbar bg='dark' variant="dark">
            <Container>
                <Navbar.Brand href='#home'>خانه</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Item>
                        <NavLink activeClassName='is-active' to='/'>تقویم </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink activeClassName='is-active' to='/table'>جدول  </NavLink>
                    </Nav.Item>

                    {JSON.parse(localStorage.getItem('User_data')).role === 'admin' ?
                        <Nav.Item>
                            <NavLink activeClassName='is-active' to='/dashboard'>مدیریت </NavLink>
                        </Nav.Item> : null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default header