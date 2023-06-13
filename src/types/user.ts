export type User = {
    id: number;
    name: string;
    city: string;
  };
  
  export type AppState = {
    user: User | {};
    users: User[];
  };