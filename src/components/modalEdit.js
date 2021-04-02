import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
export default function ModalEdit({
  showModalEdit,
  Id,
  closeModalEdit,
  students,
  setStudents,
  email,
  name,
  phone,
  birthday,
}) {
  const [newName, setNewName] = useState(name);
  const [newBirthday, setNewBirthday] = useState(birthday);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const saveEdit = (id) => {
    const newtudents = [...students]
    for (var i = 0; i < newtudents.length; i++) {
      if (newtudents[i].id === id) {
        newtudents[i].name = newName;
        newtudents[i].birthday = newBirthday;
        newtudents[i].email = newEmail;
        newtudents[i].phone = newPhone;
      }
      closeModalEdit(false)
      return (setStudents(newtudents))
    }
 };
  const profile = students.filter((student) => student.id === Id);
  const newww = profile.map((profile) => (
    <Modal.Body key={profile.id}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          type="text"
          value={newBirthday}
          onChange={(event) => setNewBirthday(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={newPhone}
          onChange={(event) => setNewPhone(event.target.value)}
        />
      </Form.Group>
    </Modal.Body>
  ));
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
          <Button variant="primary" disabled={newName === "" || newBirthday === "" || newEmail === "" || newPhone === ""} onClick={() => saveEdit(Id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
