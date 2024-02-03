import React from 'react';
import { Link } from 'react-router-dom';
import OrixasClass from '../components/OrixasClass';
import OxaguianIMG from '../img/Oxaguian.jpg';
import OxalaIMG from '../img/Oxala.jpg';
import Nana from '../img/Nana.jpg';
import Yemanja from '../img/Yemanja.jpg';

const orixas = [
  new OrixasClass(
    1,
    "Oxala",
    "Orixá da paz, da harmonia e da criação.",
    "Cajado",
    OxalaIMG,
    "Oxalá é o orixá da paz, da harmonia e da criação. Ele é o pai de todos os orixás, e é considerado o criador do mundo. Ele é o dono do cajado, e é o protetor dos doentes e dos idosos. Oxalá é o orixá que traz a paz e a tranquilidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    2,
    "Oxaguian",
    "Orixá da juventude, da renovação e do movimento.",
    "Espada e escudo",
    OxaguianIMG,
    "Oxaguian é o orixá da juventude, da renovação e do movimento. Ele é o filho de Iemanjá e Oxalá, e é considerado um orixá guerreiro. Ele é o dono da espada e do escudo, e é o protetor dos jovens e dos soldados. Oxaguian é o orixá que abre os caminhos, e é o responsável por proteger as pessoas que estão começando uma nova fase em suas vidas."
  ),
  new OrixasClass(
    3,
    "Nanã",
    "Orixá da lama, da morte e da sabedoria.",
    "Abebé",
    Nana,
    "Nanã é o orixá da lama, da morte e da sabedoria. Ela é a mãe de todos os orixás, e é considerada a mais velha e a mais sábia de todos. Ela é o dona do abebé, e é a protetora dos doentes e dos idosos. Nanã é o orixá que traz a sabedoria e a tranquilidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    4,
    "Yemanja",
    "Orixá do mar, da fertilidade e da maternidade.",
    "Espelho",
    Yemanja,
    "Yemanjá é o orixá do mar, da fertilidade e da maternidade. Ela é a mãe de todos os orixás, e é considerada a protetora das mulheres e das crianças. Ela é a dona do espelho, e é a protetora dos pescadores e dos marinheiros. Yemanjá é o orixá que traz a fertilidade e a prosperidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
];

export function findOrixaById(id) {
  return orixas.find((orixa) => orixa.id === parseInt(id));
}

function OrixasList() {
  return (
    <>
      <h1 class="d-flex flex-column align-items-center">Orixás</h1>
      <div class="row">
        {orixas.map((orixa) => (
          <div class="d-flex justify-content-around col-md-4 mb-4">
            <div key={orixa.id} className="card" style={{ width: '18rem' }}>
              <h5 className="card-title">{orixa.name}</h5>
              <img src={orixa.image} alt={orixa.name} className="card-img-top"></img>
              <div className="card-body">
                <p className="card-text">{orixa.getFullDescription()}</p>
                <p>{orixa.history}</p>
                <Link to={`/orixas/${orixa.id}`} className="btn btn-primary">Ver mais</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrixasList;