import { Button, Modal } from "react-bootstrap";
export default function ModalDelete({
  students,
  setStudents,
  setShowModalDelete,
  Id,
  showModalDelete,
  closeModalDelete,
}) {
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    setShowModalDelete(false);
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
