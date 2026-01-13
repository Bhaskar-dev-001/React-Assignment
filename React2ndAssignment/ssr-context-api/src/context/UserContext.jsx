import { createContext,useContext,useState } from "react";

const UserContext = createContext({ users: [] });

export function UserProvider({ users: initialUsers, children }) {
  const [users] = useState(initialUsers || []);
  return <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}