import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
export default function ModalAdd({ showModalAdd, setStudents, closeModalAdd }) {
  const [nameInput, setNameInput] = useState("");
  const [birthdayInput, setBirthdayInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const saveProfile = async () => {
    // const newId = Math.random().toString(36).substr(2, 9);
    // const newStudent = {
    //   id: newId,
    //   name: nameInput,
    //   birthday: birthdayInput,
    //   email: emailInput,
    //   phone: phoneInput,
    // };
    // const news = [...students];
    // news.unshift(newStudent);
    // setStudents(news);
    closeModalAdd(false);

    const data = {
      name: nameInput,
      birthday: birthdayInput,
      email: emailInput,
      phone: phoneInput,
    };
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newRes = await fetch("http://localhost:3001/users");
    const newData = await newRes.json();
    setStudents(newData);
  };

  return (
    <div className="modalAdd">
      <Modal show={showModalAdd} onHide={closeModalAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add new student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label className="content">
              Name
              <input
                value={nameInput}
                onChange={(event) => setNameInput(event.target.value)}
              ></input>
            </label>
            <label className="content">
              Birthday
              <input
                value={birthdayInput}
                onChange={(event) => setBirthdayInput(event.target.value)}
              ></input>
            </label>
            <label className="content">
              Email
              <input
                value={emailInput}
                onChange={(event) => setEmailInput(event.target.value)}
              ></input>
            </label>
            <label className="content">
              Phone
              <input
                value={phoneInput}
                onChange={(event) => setPhoneInput(event.target.value)}
              ></input>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalAdd}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={
              nameInput === "" ||
              birthdayInput === "" ||
              emailInput === "" ||
              phoneInput === ""
            }
            onClick={() => saveProfile()}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
