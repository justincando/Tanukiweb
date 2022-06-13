import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Signin from "./pages/Signin";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar sticky="top"/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Signin />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
