import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../redux/actions";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, User } from "../types/user";

function UserForm() {
  const users = useSelector((state: RootState) => state.user.users);
  const location = useLocation();
  const userToEdit = location.state?.userToEdit;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(userToEdit?.name || "");
  const [city, setCity] = useState(userToEdit?.city || "");

  const handleSave = () => {
    const biggestId = users.reduce((maxId: number, user: User) => {
      return Math.max(maxId, user.id);
    }, 0);

    if (userToEdit) {
      const updatedUser = { ...userToEdit, name, city };
      dispatch(editUser(updatedUser));
    } else {
      const newUser = { id: biggestId + 1, name, city };
      dispatch(addUser(newUser));
    }

    navigate("/table");
  };

  return (
    <Form style={{ width: "20rem", margin: "auto" }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" onClick={handleSave}>
        {userToEdit ? "Save Changes" : "Add User"}
      </Button>{" "}
    </Form>
  );
}

export default UserForm;
