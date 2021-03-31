import { useState } from "react";
import Body from "./components/Body";
import { STUDENTS } from "./mockData";
import ModalDelete from "./components/modalDelete";
import ModalAdd from "./components/modalAdd";
import ModalEdit from "./components/modalEdit";

function App() {
  const [students, setStudents] = useState(STUDENTS);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [Id, setId] = useState(0);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  // bật tắt modal delete
  const openModalDelete = (studentId) => {
    setShowModalDelete(true);
    setId(studentId);
  };
  const closeModalDelete = () => {
    setShowModalDelete(false);
  };

  // bật tắt modal add
  const openModalAdd = () => {
    setShowModalAdd(true);
  };
  const closeModalAdd = () => {
    setShowModalAdd(false);
  };

  // bật tắt modal edit
  const openModalEdit = (studentId) => {
    setShowModalEdit(true);
    setId(studentId);
  };
  const closeModalEdit = () => {
    setShowModalEdit(false);
  };
  return (
    <div>
      <Body
        students={students}
        openModalDelete={openModalDelete}
        openModalAdd={openModalAdd}
        openModalEdit={openModalEdit}
      />
      {showModalDelete && (
        <ModalDelete
          students={students}
          setStudents={setStudents}
          setShowModalDelete={setShowModalDelete}
          Id={Id}
          showModalDelete={showModalDelete}
          closeModalDelete={closeModalDelete}
        />
      )}
      {showModalAdd && (
        <ModalAdd
          closeModalAdd={closeModalAdd}
          students={students}
          setStudents={setStudents}
          showModalAdd={showModalAdd}
        />
      )}
      {showModalEdit && (
        <ModalEdit
          closeModalEdit={closeModalEdit}
          showModalEdit={showModalEdit}
          Id={Id}
        />
      )}
    </div>
  );
}

export default App;
