import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blogs from './pages/Blogs'
import Addblogs from './pages/Addblogs'
import About from './pages/About'
import ViewBlog from './pages/ViewBlog'
import EditBlog from './pages/EditBlog'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/addblogs' element={<Addblogs/>} />
      <Route path='/about' element={<About/>} />
      <Route path="/:id/view" element={<ViewBlog />} />
      <Route path=":id/edit" element={<EditBlog/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App 
