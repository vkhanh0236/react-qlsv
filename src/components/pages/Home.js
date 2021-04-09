import { useState, useEffect } from "react";
import Body from "./Body";
// import { STUDENTS } from "./mockData";
import ModalDelete from "./modalDelete";
import ModalAdd from "./modalAdd";
import ModalEdit from "./modalEdit";
function Home() {
  // const [students, setStudents] = useState([STUDENTS]);
  const [students, setStudents] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [Id, setId] = useState(0);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://khanhsaodo.herokuapp.com/users");
      const data = await res.json();
      setStudents(data);
    }
    getUsers();
  }, []);
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
  const openModalEdit = (
    studentId,
    studentName,
    studentBirthday,
    studentEmail,
    studentPhone
  ) => {
    setShowModalEdit(true);
    setId(studentId);
    setName(studentName);
    setBirthday(studentBirthday);
    setEmail(studentEmail);
    setPhone(studentPhone);
  };
  const closeModalEdit = () => {
    setShowModalEdit(false);
  };
  return (
    <>
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
          students={students}
          setStudents={setStudents}
          name={name}
          birthday={birthday}
          email={email}
          phone={phone}
        />
      )}
    </>
  );
}

export default Home;
// lấy total count trong sever .
// sort , paginate .
// mockaroo .