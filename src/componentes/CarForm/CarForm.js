import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CarForm.module.css'; // Importa o CSS

function CarForm({ setCars }) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gerar um ID único para o carro
    const id = Math.random().toString(36).substring(2, 15);

    const newCar = {
      id,
      marca,
      modelo,
      ano,
      cor,
    };

    // Adicionar o novo carro à lista
    setCars(prevCars => [...prevCars, newCar]);

    // Limpar o formulário após a submissão bem-sucedida
    setMarca('');
    setModelo('');
    setAno('');
    setCor('');

    // Redirecionar para a página de lista de carros
    navigate('/cars');
  };

  const handleCancel = () => {
    navigate('/cars'); // Redirecionar para a página de lista de carros
  };

  return (
    <form onSubmit={handleSubmit} className={styles['car-form']}>
      <h2>Adicionar Carro</h2>
      <label htmlFor="marca">Marca:</label>
      <input
        type="text"
        id="marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        required
      />
      <label htmlFor="modelo">Modelo:</label>
      <input
        type="text"
        id="modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        required
      />
      <label htmlFor="ano">Ano:</label>
      <input
        type="number"
        id="ano"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
        required
      />
      <label htmlFor="cor">Cor:</label>
      <input
        type="text"
        id="cor"
        value={cor}
        onChange={(e) => setCor(e.target.value)}
        required
      />
      <button type="submit">Adicionar</button>
      <button type="button" className={styles['cancel-button']} onClick={handleCancel}>
        Cancelar
      </button>
    </form>
  );
}

export default CarForm;
