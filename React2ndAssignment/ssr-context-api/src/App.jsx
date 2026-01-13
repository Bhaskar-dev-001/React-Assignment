import { Routes,Route,Navigate } from 'react-router-dom'
import User from './components/User';
import Userdetails from './components/Userdetails';
import './App.css'


 function App() {
  return (
    <>
      <h1>SSR</h1>
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/user/:id" element={<Userdetails />} />
      </Routes>
    </>
  );
}

export default App
