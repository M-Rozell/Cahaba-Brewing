import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/HeroPage";
import './app.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
