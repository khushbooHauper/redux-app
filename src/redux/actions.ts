import { User } from "../types/user";


  export const addUser = (user:User) => ({
    type: 'ADD',
    payload:user
  });
  
  export const deleteUser = (id:number) => ({
    type: 'DELETE',
    payload:id
  });
  export const editUser = (user:User) => ({
    type: 'EDIT',
    payload:user
  });
  