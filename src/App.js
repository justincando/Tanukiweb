import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar sticky="top"/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
