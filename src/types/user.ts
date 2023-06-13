export type User = {
    id: number;
    name: string;
    city: string;
  };
  
  export type AppState = {
    user: User | {};
    users: User[];
  };
  export type RootState = {
    user: AppState;
};
export type AddUserAction = {
    type: "ADD";
    payload: User;
  }
  
  export type DeleteUserAction = {
    type: "DELETE";
    payload: number;
  }
  
  export type EditUserAction = {
    type: "EDIT";
    payload: {
      id: number;
      name: string;
      city: string;
    };
  }
  
  export type UserAction = AddUserAction | DeleteUserAction | EditUserAction;
