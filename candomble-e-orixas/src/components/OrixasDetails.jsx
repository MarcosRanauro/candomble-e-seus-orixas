import React from 'react'
import { useParams } from 'react-router-dom';
import { findOrixaById } from '../components/OrixasList';
// Aqui eu fiz a importação do useParams para pegar o id do orixá que eu quero renderizar na página de detalhes. E importei também a função findOrixaById para encontrar o orixá pelo id.

function OrixasDetails() {
  // Aqui eu usei o useParams para pegar o id do orixá que eu quero renderizar na página de detalhes.
  const { id } = useParams();
  // console.log(id);
  // Aqui eu usei a função findOrixaById para encontrar o orixá pelo id.
  const orixa = findOrixaById(id);
  // console.log(orixa);
  if(!orixa) {
    return <p>Orixá não encontrado</p>
  };

  return (
    <>
      <h1>OrixasDetails</h1>
      <img src={orixa.image} alt={orixa.name} />
      <p>Detalhes do orixá {id}</p>
      <h3>{orixa.name}</h3>
    </>
  )
}

export default OrixasDetails;