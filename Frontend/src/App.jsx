import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import "prismjs/components/prism-jsx"
import './App.css'
import Button from './components/Button/Button'

const App = () => {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    prism.highlightAll()
  })

  return (
  <>
    <Navbar></Navbar>
    <div className="page">
    <div className="left">
      
      <div className="code">
        <pre>
          
        </pre>
      </div>
    <Button></Button>
    </div>
    <div className="right">

    </div>
    </div>
  </>
  )
}

export default App