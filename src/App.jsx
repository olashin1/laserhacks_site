import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
