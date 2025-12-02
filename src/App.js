import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Producto from './pages/productos';
import DetallesPastel from './pages/detallePastel';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Producto/>} />
        <Route path='/productos/:id' element={<DetallesPastel/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

