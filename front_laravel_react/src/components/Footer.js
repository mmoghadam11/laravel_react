import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer bgColor='light' className='text-center text-lg-left'>
            <Container className='p-4'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a style={{textDecoration:'none'}} className='text-dark' href='https://github.com/mmoghadam11'>
                        MDMoghadam-github
                    </a>
                </div>
            </Container>

        </footer>
    )
}

export default Footer