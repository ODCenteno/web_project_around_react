//import { useState } from 'react'
import logo from '../../public/logo.svg'
import '../index.css'
import Footer from './Footer/Footer.jsx'
import Main from './main/Main.jsx'
import Header from './header/Header.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Header aroundLogo={logo}></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
