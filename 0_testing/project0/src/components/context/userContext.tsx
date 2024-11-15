import { createContext } from "react";

const user = {
    name: '',
    email: ''
  }

export const UserContext = createContext(user)