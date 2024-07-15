
import './App.css';
import BasicsOfMotion from './components/BasicsOfMotion';
import Gestures from './components/Gestures';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Parent/>}/>
          <Route path="/Basics" element={<BasicsOfMotion></BasicsOfMotion>} />
          <Route path="/Gestures" element={<Gestures></Gestures>} />
         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
