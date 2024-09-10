import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Naav from './Components/Naav'
import Highlights from './Components/Highlights';
import Categories from './Components/Categories';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Naav/>
      <Highlights/>
      <Categories/>
      <Footer/>
    </>
  )
}

export default App
