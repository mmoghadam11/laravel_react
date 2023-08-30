import React from 'react'
import { BsGearWideConnected,BsFillCalendarWeekFill } from "react-icons/bs";
import './Header.css'
import { Navbar, Nav ,Container} from 'react-bootstrap'
import { NavLink } from "react-router-dom"

function header() {
    return (
        <Navbar bg='dark' variant="dark">
            <Container className='yekan'>
                <Navbar.Brand href='#home'>خانه</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Item>
                        <NavLink  to='/'>تقویم<BsFillCalendarWeekFill/> </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  to='/table'>جدول </NavLink>
                    </Nav.Item>

                    {JSON.parse(localStorage.getItem('User_data')).role === 'admin' ?
                        <Nav.Item>
                            <NavLink  to='/dashboard'> مدیریت<BsGearWideConnected/></NavLink>
                        </Nav.Item> : null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default header