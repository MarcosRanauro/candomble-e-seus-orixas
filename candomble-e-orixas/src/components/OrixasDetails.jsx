import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { findOrixaById } from '../components/OrixasList';
// Aqui eu fiz a importação do useParams para pegar o id do orixá que eu quero renderizar na página de detalhes. E importei também a função findOrixaById para encontrar o orixá pelo id.

function OrixasDetails() {
  // Aqui eu usei o useParams para pegar o id do orixá que eu quero renderizar na página de detalhes.
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);
  // Aqui eu usei a função findOrixaById para encontrar o orixá pelo id.
  const orixa = findOrixaById(id);
  // console.log(orixa);
  if (!orixa) {
    return <p>Orixá não encontrado</p>
  };

  function handleClick() {
    navigate(-1);
  }

  return (
    <>
      <Header />
      <div class="d-flex justify-content-center">
        <h1>{orixa.name}</h1>
      </div>
      <div class="d-flex justify-content-center">
        <div class="col-md-4 mb-2">
          <img src={orixa.image} alt={orixa.name} class="img-fluid" />
          <h6>{orixa.getSymbolDescription()}</h6>
          <h6>{orixa.getOduDescription()}</h6>
          <p>{orixa.history}</p>
          <button class="btn btn-primary" onClick={handleClick}>Voltar</button>
        </div>
      </div>
    </>
  )
}

export default OrixasDetails;