//import { useState } from 'react'
import aroundLogo from '../public/logo.svg'
import './index.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div class="page">
      <Header aroundLogo={aroundLogo}></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
