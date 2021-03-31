import { Button, Modal, Form } from "react-bootstrap";
export default function ModalEdit({
  showModalEdit,
  Id,
  closeModalEdit,
  students,
}) {
  const saveEdit = () => {
    console.log(Id);
  };
  const profile = students.filter((student) => student.id === Id);
  const newww = profile.map((profile) => (
    <Modal.Body key={profile.id}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={profile.name} value={profile.name} />
      </Form.Group>
      <Form.Group controlId="formBasicBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="text" placeholder={profile.birthday} value={profile.birthday} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder={profile.email} value={profile.email} />
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder={profile.phone} value={profile.phone} />
      </Form.Group>
    </Modal.Body>
  ));
  console.log(newww);
  return (
    <>
      <Modal show={showModalEdit} onHide={closeModalEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit student</Modal.Title>
        </Modal.Header>
        {newww}
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={() => saveEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
