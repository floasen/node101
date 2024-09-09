import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './Button'
import './App.css'

function App() {

  function button_clicked(event) {
    document.getElementById('result').innerHTML=event.target.innerHTML
  }
 

  return (
    <>
    <h1>Hello world</h1>
    <hr />
    <div className="answer - button">
    <Button name="Max" fun={button_clicked} />
    <Button name="Glen" fun={button_clicked} />
    <Button name="Jan" fun={button_clicked} />
    </div>
    <div id="result"></div>
    </>
  )
}

export default App
