import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import "./Footer.css"

function Footer() {
    return (
        <footer  className='text-center text-lg-left '>
            
                <div className='text-center p-3 text-warning bg-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a style={{textDecoration:'none'}} className='text-white' href='https://github.com/mmoghadam11'>
                        MDMoghadam-github
                    </a>
                </div>
    

        </footer>
    )
}

export default Footer