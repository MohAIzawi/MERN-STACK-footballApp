import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home'
import CreateClubs from './pages/CreateClubs'
import ShowClubs from './pages/ShowClubs'
import DeleteClubs from './pages/DeleteClubs'
import EditClubs from './pages/EditClubs'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Clubs/create" element={<CreateClubs />} />
      <Route path="/Clubs/details/:id" element={<ShowClubs />} /> 
      <Route path="/Clubs/edit/:id" element={<EditClubs />} /> 
      <Route path="/Clubs/delete/:id" element={<DeleteClubs />} />
    </Routes>
  )
}

export default App