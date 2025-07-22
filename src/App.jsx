import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ApplyBtn from './components/ApplyBtn'
import HeroSection from './components/HeroSection'
import Gallery from './components/Gallery'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <Gallery />
    </>
  );
}

export default App
