import { useState } from 'react'
import { Routes , Route , BrowserRouter} from 'react-router-dom'
import RegistrationForm from "./components/RegistrationForm"
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Homepage from './components/HomePage'
import Navbar from './components/Navbar'
import UpdateForm from './components/UpdateForm'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/register"  element={<RegistrationForm/>}/>
      <Route path="/create-contact"  element={<ContactForm/>}/>
      <Route path='/contact-list' element={<ContactList/>}/>
      <Route path='/update-contact/:id' element={<UpdateForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
