import PasswordGenerator from "./easy/passwordGenerator"
import AccordionComponent from "./easy/accordionComponent"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/passwordgenerator" element={<PasswordGenerator/>}/>
          <Route path="/accordioncomponent" element={<AccordionComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App