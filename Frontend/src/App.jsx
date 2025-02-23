  import React, {useState, useEffect} from 'react'
  import Navbar from './components/Navbar/Navbar'
  import "prismjs/themes/prism-tomorrow.css"
  import prism from "prismjs"
  import './App.css'
  // import rehypeHighlight from "rehype-highlight";
  // import "highlight.js/styles/github-dark.css";
  import axios from 'axios'
  import Editor from "react-simple-code-editor"
  import Button from './components/Button/Button'
  import Markdown from 'react-markdown'

  const App = () => {

    const [count, setCount] = useState(0)
    const [code, setCode] = useState( `function sum(){
      return 1+1
    }`)

    useEffect(()=>{
      prism.highlightAll()
    })

    
    const [review, setReview] = useState(``)


    // async function reviewcode(){
    //   const response = await axios.post('http://localhost:3000/ai/get-review', {code})
      
    //   setReview(response.data)
    //   console.log(response.data)
    // }

    async function reviewcode() {
      try {
        const response = await axios.post('http://localhost:3000/ai/get-review', {code});
        // Set the review directly from response.data since it contains the full review string
        setReview(response.data);
        console.log('Setting review to:', response.data);
      } catch (error) {
        console.error('Error fetching review:', error);
      }
    }
    return (
    <>
      <Navbar></Navbar>
      <div className="page">
      <div className="left">
        
        <div className="code">

          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              color: '#ff1188',
              backgroundColor : '#000000',
              // border: '1px solid #d9d9d9',
              borderRadius: 5
            }}/>
        </div>
        <div onClick={reviewcode} className="but">
        <Button/>
        </div>
      </div>
      <div className="right">
          <Markdown>{review}</Markdown> 
      </div>
      </div>
    </>
    )
  }

  export default App