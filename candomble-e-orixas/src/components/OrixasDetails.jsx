import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { findOrixaById } from '../components/OrixasList';
// Aqui eu fiz a importação do useParams para pegar o id do orixá que eu quero renderizar na página de detalhes. E importei também a função findOrixaById para encontrar o orixá pelo id.
import '../styles/OrixasDetails.css';

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
      <div class="container">
        <div class="row justify-content-center">
        </div>
        <div class="row justify-content-center align-items-center">
          <div class="col-md-4">
            <img src={orixa.image} alt={orixa.name} class="img-fluid" />
          </div>
          <div class="col-md-8">
            <h5>{orixa.name}</h5>
            <p><strong>Dia: </strong>{orixa.day}</p>
            <p><strong>Simbolos: </strong>{orixa.symbol}</p>
            <p><strong>Odu regente: </strong>{orixa.odu}</p>
            <p><strong>Cor: </strong>{orixa.color}</p>
            <p><strong>Comida: </strong>{orixa.food}</p>
            <p><strong>Região Africana: </strong>{orixa.region}</p>
            <p><strong>Kizilas: </strong>{orixa.Kizilas}</p>
            <p><strong>Saudação: </strong>{orixa.salutation}</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="col-md-10 mb-2">
              <h3>Origem e História</h3>
              <p><strong>{orixa.history[0]}</strong></p>
              <p>{orixa.history[1]}</p>
              <p><strong>{orixa.history[2]}</strong></p>
              <p>{orixa.history[3]}</p>
              <p><strong>{orixa.history[4]}</strong></p>
              <h3><strong>Itans</strong></h3>
              <p><strong>{orixa.itansName[0]}</strong></p>
              <p>{orixa.itans[0]}</p>
              <p><strong>{orixa.itansName[1]}</strong></p>
              <p>{orixa.itans[1]}</p>
              <p><strong>{orixa.itansName[2]}</strong></p>
              <p>{orixa.itans[2]}</p>
              <h3><strong>Caracteristicas dos filhos de </strong>{orixa.name}</h3>
              <p>{orixa.characteristics}</p>
              <button class="btn btn-primary" onClick={handleClick}>Voltar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrixasDetails;