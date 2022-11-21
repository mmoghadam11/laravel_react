import React from 'react'
import {Form,Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './ModalForm.css';

function ModalForm(props) {
  return (
    <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>روز {props.day}ام {props.month} ماه</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>شروع ساعت کاری</Form.Label>
              <Form.Control
                type="time"
                placeholder={`${props.modalData? props.modalData.user:"null"}`}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>پایان ساعت کاری</Form.Label>
              <Form.Control
                type="time"
                value="13:00" step="900"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
export default ModalForm