
import { Routes, Route } from 'react-router';
import './App.css';
import { Body } from './components/body';
import { About } from './components/about';

const App = () => {

  return (
    <Routes> 
      <Route path="/" element = {<Body/>} />
      <Route path="/about" element={<About/>}/>
    </Routes>

  )
}

export default App
