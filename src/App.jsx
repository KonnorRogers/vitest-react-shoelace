import * as React from "react"
import './App.css'
import Input from "./Input.jsx"
import "@shoelace-style/shoelace/dist/themes/light.css"

function App() {
  return (
    <Input value="blah" data-testid="input" />
  )
}

export default App
