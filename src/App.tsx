import PasswordGenerator from "./easy/passwordGenerator"
import AccordionComponent from "./easy/accordionComponent"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Test} from "./easy/test"
import RandomColor from "./easy/randomColor"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/passwordgenerator" element={<PasswordGenerator/>}/>
          <Route path="/accordioncomponent" element={<AccordionComponent/>}/>
          <Route path="/randomColor" element={<RandomColor/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App