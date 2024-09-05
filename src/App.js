import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home/Home';
import About from './componentes/About/About';
import CarForm from './componentes/CarForm/CarForm';
import CarList from './componentes/CarList/CarList';
import NavBar from './componentes/NavBar/NavBar';
import NotFound from './componentes/NotFound/NotFound';

function App() {
  const [cars, setCars] = useState([]);

  // Função para adicionar carro
  const handleAddCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  // Função para remover carro
  const handleRemoveCar = (carId) => {
    setCars(cars.filter((car) => car.id !== carId));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/cars" 
          element={<CarList cars={cars} onRemoveCar={handleRemoveCar} />} 
        />
        <Route 
          path="/add-car" 
          element={<CarForm setCars={setCars} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
