import { Button, Modal, Form } from "react-bootstrap";
export default function ModalEdit({ showModalEdit, Id, closeModalEdit }) {
  const saveEdit = (Id) => {
      console.log(Id)
  };
  return (
    <>
      <Modal show={showModalEdit} onHide={closeModalEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formBasicBirthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control type="text" placeholder="Birthday" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Phone" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={() => saveEdit(Id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
