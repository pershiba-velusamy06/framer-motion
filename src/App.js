
import './App.css';
import BasicsOfMotion from './components/BasicsOfMotion';
import Gestures from './components/Gestures';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent from './components/Parent/Parent';
import AnimationControls from './components/AnimationControls';
import ViewBasedAnimations from './components/ViewBasedAnimations';
import ScrollAnimations from './components/ScrollAnimations';
import ScrollCarosole from './components/HorizontalscrollCarosel';
import Home from './components/Home';
import { CustomKanban } from './components/CustomKanban';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Parent/>}/>
          <Route path="/Basics" element={<BasicsOfMotion></BasicsOfMotion>} />
          <Route path="/Gestures" element={<Gestures></Gestures>} />
          <Route path="/AnimationControls" element={<AnimationControls></AnimationControls>} />
          <Route path="/ViewBasedAnimations" element={<ViewBasedAnimations></ViewBasedAnimations>} />
          <Route path="/ScrollAnimations" element={<ScrollAnimations></ScrollAnimations>} />
          <Route path="/ScrollCarosole" element={<ScrollCarosole></ScrollCarosole>} />
          <Route path="/MultiLayerParallax" element={<Home></Home>} />
          <Route path="/CustomKanban" element={<CustomKanban></CustomKanban>} />
         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
