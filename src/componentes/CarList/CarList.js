import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CarList.module.css'; 

function CarList({ cars, onRemoveCar }) {
  if (!cars || cars.length === 0) {
    return (
      <div className={styles['car-list']}>
        <h2>Lista de Carros</h2>
        <p>Nenhum carro adicionado ainda.</p>
        <Link to="/add-car">Adicionar Carro</Link>
      </div>
    );
  }

  return (
    <div className={styles['car-list']}>
      <h2>Lista de Carros</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <strong>{car.marca} {car.modelo}</strong> (ano {car.ano}) - {car.cor}
            <button onClick={() => onRemoveCar(car.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <Link to="/add-car">Adicionar Carro</Link>
    </div>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      marca: PropTypes.string.isRequired,
      modelo: PropTypes.string.isRequired,
      ano: PropTypes.string.isRequired,
      cor: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveCar: PropTypes.func.isRequired,
};

export default CarList;
