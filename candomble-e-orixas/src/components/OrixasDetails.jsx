import React from 'react'
import { useParams } from 'react-router-dom';
import { findOrixaById } from '../components/OrixasList';

function OrixasDetails() {
  const { id } = useParams();
  // console.log(id);
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