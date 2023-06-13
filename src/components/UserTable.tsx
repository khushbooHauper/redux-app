import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState, User } from "../types/user";
import { useDispatch } from "react-redux";
import { deleteUser, editUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const UserTable = () => {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userToEdit, setUserToEdit] = useState<User | {}>({});
  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };
  const handleEdit = (user: User) => {
    setUserToEdit(user);
    navigate("/form", { state: { userToEdit: user } });
  };

  return (
    <>
      <Table bordered style={{ width: "50rem", margin: "auto" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user: User) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="m-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="m-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserTable;
