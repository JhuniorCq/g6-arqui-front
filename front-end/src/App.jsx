
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home/Home';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro-postulante' element />
        <Route path='/registro-empresa' element />
        <Route path='/inicio-postulante' element />
        <Route path='/inicio-empresa' element />
      </Routes>
    </>
  )
}

export default App
