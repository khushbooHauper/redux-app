import { AppState, UserAction } from "../types/user";

const initialState: AppState = {
  // user: {},
  users: [
    { id: 1, name: "radha", city: "ahmdavad" },
    { id: 2, name: "krishna", city: "punjab" },
  ],
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE":
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "EDIT":
      const { id, name, city } = action.payload;
      const updatedUsers = state.users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            name,
            city,
          };
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
};

export default userReducer;
