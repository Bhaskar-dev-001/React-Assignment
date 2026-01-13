import { createRoutesFromElements, Route } from "react-router-dom";
import User from "./components/User";
import Userdetails from "./components/Userdetails";

export const routes = createRoutesFromElements(
  <>
    <Route path="/users" element={<User />} />
    <Route path="/user/:id" element={<Userdetails />} />
  </>
);