import React from 'react'
import { Spinner } from 'react-bootstrap';
function Spin() {
  return (
    <Spinner animation="border" variant="warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Spin