import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/Header';
import About from './assets/About';
import Home from './assets/Home';
import Product from './assets/Product';
import Blog from './assets/Blog';
import Singlepost from './assets/Singlepost';
import Contact from './assets/Contact';
import Footer from './assets/Footer';
import Carts from './assets/Carts';


function App() {



  return (
    <>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Singlepost'  element={<Singlepost/>}/>
          <Route path='/Contact'  element={<Contact/>} />  
          <Route path='/Carts'element={<Carts/>}/>
          
        </Routes>
        <Footer/>

        </BrowserRouter>

    </>
  )
}

export default App
