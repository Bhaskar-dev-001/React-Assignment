import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Todo from './Todo'
import HomeTodo from './HomeTodo'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Todo/>}/>
      <Route path='/abouttodos' element={<HomeTodo/>}/>
      </Routes>
    </>
  )
}

export default App
