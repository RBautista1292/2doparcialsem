import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import CotizadorPrestamo from './components/CotizadorPrestamo';
import FormularioAltas from './components/FormularioAltas';
import TablaResultados from './components/TablaResultados';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Menu />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cotizar-prestamo" element={<CotizadorPrestamo />} />
        <Route path="/alta-cliente" element={<FormularioAltas />} />
        <Route path="/tabla" element={<TablaResultados />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
