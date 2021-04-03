import { Button, Modal } from "react-bootstrap";
export default function ModalDelete({
  setStudents,
  setShowModalDelete,
  Id,
  showModalDelete,
  closeModalDelete,
}) {
  const deleteStudent = async (id) => {
    // setStudents(students.filter((student) => student.id !== id));
    setShowModalDelete(false);
    const res = await fetch("http://localhost:3001/users/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const newRes = await fetch("http://localhost:3001/users");
    const newData = await newRes.json();
    setStudents(newData);
  };

  return (
    <>
      <Modal show={showModalDelete} onHide={closeModalDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa student</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa student ... không </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalDelete(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => deleteStudent(Id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
