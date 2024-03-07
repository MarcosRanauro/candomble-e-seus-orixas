import React from 'react';
import { Link } from 'react-router-dom';
import OrixasClass from '../components/OrixasClass';

// Aqui eu importei todas as imagens que eu criei para cada orixá. Mantendo a organização do código.
import OxaguianIMG from '../img/Oxaguian2.jpg';
import OxalaIMG from '../img/Oxala2.jpg';
import Nana from '../img/Nana2.jpg';
import Yemanja from '../img/Yemanja2.jpg';
import LogunEde from '../img/LogunEde3.jpg';
import Oxum from '../img/Oxum3.jpg';
import Ewa from '../img/Ewa2.jpg';
import Oba from '../img/Oba2.jpg';
import Oya from '../img/Oya4.jpg';
import Xango from '../img/Xango4.jpg';
import Oxumare from '../img/Oxumare3.jpg';
import Omolu from '../img/Omolu3.jpg';
import Ossain from '../img/Ossain4.jpg';
import Ode from '../img/Odé6.jpg';
import Ogum from '../img/Ogum3.jpg';
import Exu from '../img/Exu2.jpg';

// Aqui eu implementei uma array com todos os Orixas que eu criei e vou criar no futuro. Isso se chama instanciar a classe pai que está no arquivo OrixasClass. Mantendo a organização do código.
const orixas = [
  new OrixasClass(
    1,
    "Oxala",
    "Orixá da paz, da harmonia e da criação.",
    "Cajado",
    "Ofun, Aláfia",
    OxalaIMG,
    "Oxalá é o orixá da paz, da harmonia e da criação. Ele é o pai de todos os orixás, e é considerado o criador do mundo. Ele é o dono do cajado, e é o protetor dos doentes e dos idosos. Oxalá é o orixá que traz a paz e a tranquilidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    2,
    "Oxaguian",
    "Orixá da juventude, da renovação e do movimento.",
    "Espada e escudo",
    "Ejioníle",
    OxaguianIMG,
    "Oxaguian é o orixá da juventude, da renovação e do movimento. Ele é o filho de Iemanjá e Oxalá, e é considerado um orixá guerreiro. Ele é o dono da espada e do escudo, e é o protetor dos jovens e dos soldados. Oxaguian é o orixá que abre os caminhos, e é o responsável por proteger as pessoas que estão começando uma nova fase em suas vidas."
  ),
  new OrixasClass(
    3,
    "Nanã",
    "Orixá da lama, da morte e da sabedoria.",
    "Abebé",
    "EJI-OLOGBON",
    Nana,
    "Nanã é o orixá da lama, da morte e da sabedoria. Ela é a mãe de todos os orixás, e é considerada a mais velha e a mais sábia de todos. Ela é o dona do abebé, e é a protetora dos doentes e dos idosos. Nanã é o orixá que traz a sabedoria e a tranquilidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    4,
    "Yemanja",
    "Orixá do mar, da fertilidade e da maternidade.",
    "Abêbé",
    "Irosun, Ossá, Owonrin",
    Yemanja,
    "Yemanjá é o orixá do mar, da fertilidade e da maternidade. Ela é a mãe de todos os orixás, e é considerada a protetora das mulheres e das crianças. Ela é a dona do espelho, e é a protetora dos pescadores e dos marinheiros. Yemanjá é o orixá que traz a fertilidade e a prosperidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    5,
    "Logun Edé",
    "Orixá da caça, da pesca e da riqueza.",
    "Arco e flecha",
    "IRETE-MEJI, OGBÉ-OGUNDÁ",
    LogunEde,
    "Logun Edé é o orixá da caça, da pesca e da riqueza. Ele é o filho de Oxum e Oxossi, e é considerado um orixá guerreiro. Ele é o dono do arco e da flecha, e é o protetor dos caçadores e dos pescadores. Logun Edé é o orixá que traz a riqueza e a prosperidade, e é o responsável por proteger as pessoas que estão começando uma nova fase em suas vidas."
  ),
  new OrixasClass(
    6,
    "Oxum",
    "Orixá do amor, da beleza e da riqueza.",
    "Abêbé",
    "Oxê",
    Oxum,
    "Oxum é o orixá do amor, da beleza e da riqueza. Ela é a mãe de todos os orixás, e é considerada a protetora das mulheres e das crianças. Ela é a dona do abêbé, e é a protetora dos pescadores e dos marinheiros. Oxum é o orixá que traz a fertilidade e a prosperidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    7,
    "Ewa",
    "Orixá da beleza, da fertilidade e da prosperidade.",
    "Espelho",
    "Iká, OGBÉ-OGUNDÁ",
    Ewa,
    "Ewá é a orixá da beleza, da fertilidade e da prosperidade. Ela é a mãe de todos os orixás, e é considerada a protetora das mulheres e das crianças. Ela é a dona do espelho, e é a protetora dos pescadores e dos marinheiros. Ewá é o orixá que traz a fertilidade e a prosperidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    8,
    "Obá",
    "Orixá da água doce, da guerra e da coragem.",
    "Espada",
    "Ejioko",
    Oba,
    "Obá é a orixá da água doce, da guerra e da coragem. Ela é a mãe de todos os orixás, e é considerada a protetora das mulheres e das crianças. Ela é a dona da espada, e é a protetora dos pescadores e dos marinheiros. Obá é o orixá que traz a fertilidade e a prosperidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    9,
    "Oyá",
    "Orixá do vento, da tempestade e da transformação.",
    "Espada",
    "Ossá, Owonrin",
    Oya,
    "Oyá é a orixá do vento, da tempestade e da transformação. Ela é a mãe de todos os orixás, e é considerada a protetora das mulheres e das crianças. Ela é a dona da espada, e é a protetora dos pescadores e dos marinheiros. Oyá é o orixá que traz a fertilidade e a prosperidade, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    10,
    "Xango",
    "Orixá do trovão, da justiça e da coragem.",
    "Machado",
    "Obará, Ejilaxebará",
    Xango,
    "Xangô é o orixá do trovão, da justiça e da coragem. Ele é o pai de todos os orixás, e é considerado o protetor dos guerreiros e dos caçadores. Ele é o dono do machado, e é o protetor dos doentes e dos idosos. Xangô é o orixá que traz a justiça e a coragem, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    11,
    "Oxumare",
    "Orixá do arco-íris, da renovação e da transformação.",
    "Cobra",
    "Iká",
    Oxumare,
    "Oxumarê é o orixá do arco-íris, da renovação e da transformação. Ele é o pai de todos os orixás, e é considerado o protetor dos guerreiros e dos caçadores. Ele é o dono da cobra, e é o protetor dos doentes e dos idosos. Oxumarê é o orixá que traz a justiça e a coragem, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    12,
    "Omolu",
    "Orixá da saúde, da cura e da proteção.",
    "Cajado",
    "Odi",
    Omolu,
    "Omolu é o orixá da saúde, da cura e da proteção. Ele é o pai de todos os orixás, e é considerado o protetor dos guerreiros e dos caçadores. Ele é o dono do cajado, e é o protetor dos doentes e dos idosos. Omolu é o orixá que traz a justiça e a coragem, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    13,
    "Ossain",
    "Orixá das folhas, das ervas e da cura.",
    "Ervas",
    "Iká",
    Ossain,
    "Ossaim é o orixá das folhas, das ervas e da cura. Ele é o pai de todos os orixás, e é considerado o protetor dos guerreiros e dos caçadores. Ele é o dono das ervas, e é o protetor dos doentes e dos idosos. Ossaim é o orixá que traz a justiça e a coragem, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    14,
    "Ode",
    "Orixá da caça, da floresta e da liberdade.",
    "Arco e flecha",
    "Obará",
    Ode,
    "Odé é o orixá da caça, da floresta e da liberdade. Ele é o pai de todos os orixás, e é considerado o protetor dos guerreiros e dos caçadores. Ele é o dono do arco e da flecha, e é o protetor dos doentes e dos idosos. Odé é o orixá que traz a justiça e a coragem, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    15,
    "Ogum",
    "Orixá da guerra, da coragem e da proteção.",
    "Espada",
    "Eta Ogundá",
    Ogum,
    "Ogum é o orixá da guerra, da coragem e da proteção. Ele é o pai de todos os orixás, e é considerado o protetor dos guerreiros e dos caçadores. Ele é o dono da espada, e é o protetor dos doentes e dos idosos. Ogum é o orixá que traz a justiça e a coragem, e é o responsável por manter a harmonia entre os seres humanos."
  ),
  new OrixasClass(
    16,
    "Exu",
    "Orixá da comunicação, da transformação e da proteção.",
    "Cajado",
    "Obará, Odi, Owonrin",
    Exu,
    "Exu é o orixá da comunicação, da transformação e da proteção. Ele é o pai de todos os orixás, e é considerado o protetor dos guerreiros e dos caçadores. Ele é o dono do cajado, e é o protetor dos doentes e dos idosos. Exu é o orixá que traz a justiça e a coragem, e é o responsável por manter a harmonia entre os seres humanos."
  ),
];

// Essa função é responsável por encontrar um orixá pelo id. Vou usar essa função para encontrar um orixá pelo id na página de detalhes do orixá. Assim eu consigo acessar todos os atributos que o orixa possui e renderizar na pagina de detalhes. Mantendo a organização do código.
export function findOrixaById(id) {
  return orixas.find((orixa) => orixa.id === parseInt(id));
}

function OrixasList() {
  // Aqui eu fiz um map para percorrer todos os Orixas que eu criei na constante orixas, e posso renderizar o atributo que eu quiser de cada Orixa. Mantendo a organização do código.
  return (
    <>
      <h1 class="d-flex flex-column align-items-center">Orixás</h1>
      <div class="row">
        {orixas.map((orixa) => (
          <div class="d-flex justify-content-around col-md-3 mb-4" key={orixa.id}>
            <div className="card" style={{ width: '18rem' }}>
              <h5 className="card-title">{orixa.name}</h5>
              <img src={orixa.image} alt={orixa.name} className="card-img-top img-fluid"></img>
              <div className="card-body">
                <p className="card-text">{orixa.getFullDescription()}</p>
                {/* Aqui eu fiz um link para a página de detalhes do orixá, passando o id do orixá como parâmetro. Esse Link foi importado pelo react-router-dom. */}
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