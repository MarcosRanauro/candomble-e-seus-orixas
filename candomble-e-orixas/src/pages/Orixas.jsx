import React from 'react'
import OrixasClass from '../components/OrixasClass';
import OxaguianIMG from '../img/Oxaguian.jpg';

const orixas = [
  new OrixasClass(
    "Oxaguian",
    "Orixá da juventude, da renovação e do movimento.",
    "Espada e escudo",
    OxaguianIMG,
    "Oxaguian é o orixá da juventude, da renovação e do movimento. Ele é o filho de Iemanjá e Oxalá, e é considerado um orixá guerreiro. Ele é o dono da espada e do escudo, e é o protetor dos jovens e dos soldados. Oxaguian é o orixá que abre os caminhos, e é o responsável por proteger as pessoas que estão começando uma nova fase em suas vidas."
  ),
];

function Orixas() {
  return (
    <div>
      <h1>Orixas</h1>
      {orixas.map((orixa) => (
        <div key={orixa.name}>
          <h2>{orixa.name}</h2>
          <img src={orixa.image} alt={orixa.name} />
          <p>{orixa.getFullDescription()}</p>
          <p>{orixa.history}</p>
        </div>
      ))
      }
    </div>
  )
}

export default Orixas;