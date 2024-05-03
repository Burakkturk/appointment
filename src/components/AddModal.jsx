import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddModal({ show, handleClose }) {
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
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" enabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Date" />
            </Form.Group>
           <div className="text-center">
           <Button variant="success" type="submit" className="me-2" onClick={handleClose}>
              Save
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
           </div>
          </>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default AddModal;
