import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddModal({show,handleClose}) {


  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <>
      <Form.Group className="mb-3">
        <Form.Label>Disabled input</Form.Label>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
    </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;