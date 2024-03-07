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
    "Oxaguian - Osáàlá Oguian",
    "Orixá da juventude, da renovação e do movimento.",
    "Espada e escudo",
    "Ejionilé",
    "Sexta-feira",
    "Branco, Prata, Azul",
    "Inhame pilado",
    "Ejigbó",
    "Dendê, Sal, Café, Roupa Escura, Sujeira",
    "Epí Epí Babá, Epí Ímolé",
    "O tipo OXAGUIÃ é um jovem guerreiro combativo. É habitualmente alto e robusto, mas não é agressivo nem brutal. Não despreza o sexo e cultiva o amor livre. É alegre, gosta profundamente da vida, é falador e brincalhão. Ao mesmo tempo é idealista, defendendo os injustiçados, os fracos e os oprimidos. Orgulhoso, sedento de feitos gloriosos, às vezes, uma espécie de D. Quixote. Os seus pensamentos originais geralmente antecipam os da sua época. Ele é o nascente.",
    ["O Pilão de Oxaguiãn", "O nascimento de Oxaguian", "Oxaguian e o reino de Ogum"],
    ["Oxaguian teria nascido em Ifé, bem antes de seu pai tornar-se o rei de Ifan. Valente guerreiro, desejou, por sua vez, conquistar um reino. Partiu, acompanhado de seu amigo Awoledjê. Oxaguiã não tinha ainda este nome. Chegou num lugar chamado Ejigbô e aí tornou-se Elejigbô (Rei de Ejigbô). Ele tinha uma grande paixão por inhame pilado, comida que os iorubás chamam iyan. Elejigbô comia deste iyan a todo momento; comia de manhã, ao meio-dia e depois da sesta; comia no jantar e até mesmo durante a noite, se sentisse vazio seu estômago! Ele recusava qualquer outra comida, era sempre iyan que devia ser-lhe servido. Chegou ao ponto de inventar o pilão para que fosse preparado seu prato predileto! Impressionados pela sua mania, os outros orixás deram-lhe um cognome: Oxaguiã, que significa Orixá-comedor-de-inhame-pilado, e assim passou a ser chamado. Awoledjê, seu companheiro, era babalawo, um grande adivinho, que o aconselhava no que devia ou não fazer. Certa ocasião, Awoledjê aconselhou a Oxaguiã oferecer: dois ratos de tamanho médio; dois peixes, que nadassem majestosamente; duas galinhas, cujo fígado fosse bem grande; duas cabras, cujo leite fosse abundante; duas cestas de caramujos e muitos panos brancos. Disse-lhe, ainda, que se ele seguisse seus conselhos, Ejigbô, que era então um pequeno vilarejo dentro da floresta, tornar-se-ia, muito em breve, uma cidade grande e poderosa e povoada de muitos habitantes. Depois disso Awoledjê partiu em viagem a outros lugares. Ejigbô tornou-se uma grande cidade, como previra Awoledjê. Ela era arrodeada de muralhas com fossos profundos, as portas fortificadas e guardas armados vigiavam suas entradas e saídas. Havia um grande mercado, em frente ao palácio, que atraía, de muito longe, compradores e vendedores de mercadorias e escravos. Elejigbô vivia com pompa entre suas mulheres e servidores. Músicos cantavam seus louvores. Quando falava-se dele, não se usava seu nome jamais, pois seria falta de respeito. Era a expressão Kabiyesi, isto é, Sua Majestade, que deveria ser empregada. Ao cabo de alguns anos, Awoledjê voltou. Ele desconhecia, ainda, o novo esplendor de seu amigo. Chegando diante dos guardas, na entrada do palácio, Awoledjê pediu, familiarmente, notícias do Comedor-de-inhame-pilado. Chocados pela insolência do forasteiro, os guardas gritaram: Que ultraje falar desta maneira de Kabiyesi! Que impertinência! Que falta de respeito! E caíram sobre ele dando-lhe pauladas e cruelmente jogaram-no na cadeia. Awoledjê, mortificado pelos maus tratos, decidiu vingar-se, utilizando sua magia. Durante sete anos a chuva não caiu sobre Ejigbô, as mulheres não tiveram mais filhos e os cavalos do rei não tinham pasto. Elejigbô, desesperado, consultou um babalaô para remediar esta triste situação. Kabiyesi, toda esta infelicidade é consequência da injusta prisão de um dos meus confrades! É preciso soltá-lo, Kabiyesi! É preciso obter o seu perdão! Awoledjê foi solto e, cheio de ressentimento, foi-se esconder no fundo da mata. Elejigbô, apesar de rei tão importante, teve que ir suplicar-lhe que esquecesse os maus tratos sofridos e o perdoasse. Muito bem! - respondeu-lhe. Eu permito que a chuva caia de novo, Oxaguiã, mas tem uma condição: Cada ano, por ocasião de sua festa, será necessário que você envie muita gente à floresta, cortar trezentos feixes de varetas. Os habitantes de Ejigbô, divididos em dois campos, deverão golpear-se, uns aos outros, até que estas varetas estejam gastas ou quebrem-se. Desde então, todos os anos, no fim da seca, os habitantes de dois bairros de Ejigbô, aqueles de Ixalê Oxolô e aqueles de Okê Mapô, batem-se todo um dia, em sinal de contrição e na esperança de verem, novamente, a chuva cair.","Nasceu dentro de uma concha de caramujo. Não tinha mãe. E quando nasceu, não tinha cabeça, por isso perambulava pelo mundo, sem sentido nem rumo. Um dia encontrou Ori numa estrada e este lhe deu uma cabeça feita de inhame pilado. Apesar de feliz com sua nova cabeça branca, ela esquentava muito e quando esquentava Oxaguian criava mais conflitos. E sofria muito. Um dia encontrou a morte (Iku), que lhe ofereceu uma cabeça fria. Apesar do medo que sentia, o calor era insuportavel e ele acabou aceitando a cabeça preta que a morte lhe deu. Mas essa cabeça era dolorida e fria demais. Oxaguian ficou triste, porque a morte com sua frieza estava o tempo todo com o Orixá. Então Ogum apareceu e deu sua espada para Oxaguian, que espantou Iku. Ogum também tentou arrancar a cabeça preta de cima da branca, mas tanto apertou que as duas se fundiram e Oxaguian ficou com a cabeça azul, agora equilibrada e sem problemas. A partir deste dia ele e Ogum andam juntos transformando o mundo. Oxaguian depositando o conflito de ideias e valores que mudam o mundo e Ogum fornecendo os meios para a transformação, seja a tecnologia ou a guerra. Epá Babá!", "Oxaguiã, jovem filho guerreiro de Oxalá, acompanhava Ogun pela terra em suas guerras. Aproveitava de toda ocasião em que a guerra criava destruição para reconstruir no lugar algo maior e mais próspero. Assim espalhou pelo mundo prosperidade, sem descanso, obrigando todos a trabalhar e progredir. Onde via preguiça, inspirava movimento e crescimento. Um dia, entre uma batalha e outra, Oxaguiã foi à cidade de Ogun para buscar provisões e encontrou um castelo que acabava de ser construído pelo povo do lugar em oferecimento a Ogun. Oxaguiã perguntou ao povo: Que vão fazer agora que terminaram de construir o castelo do seu rei? Descansar, eles responderam. Oxaguiã retrucou: O seu rei ainda demora a voltar; vocês devem aproveitar deste tempo de maneira melhor. Construam um castelo ainda melhor e encham de alegria o seu rei. Sacou da espada e com um toque empurrou a parede do castelo, que ruiu todo. Oxaguiã voltou para a guerra, e o povo pôs-se a construir um castelo ainda melhor. O tempo passou e Oxaguiã voltou à cidade de Ogun em busca de mais provisões. Encontrou lá um castelo ainda maior e melhor do que o que tinha derrubado. Semelhante diálogo se travou. Oxaguiã perguntou ao povo: Que vão fazer agora que terminaram o castelo do seu rei? -Vamos descansar, eles responderam. Oxaguiã interrogou: como tinha feito antes, sacou da espada e com um toque derrubou o castelo. E partiu para guerra, voltando sempre em busca de novas provisões. Tantas vezes isto aconteceu que o povo do lugar se transformou em um povo de grandes construtores, desenvolvendo engenharia e arquitetura soberba, reconhecida mundialmente. Oxaguiã promove o progresso. Não gosta de ver ninguém parado."],
    OxaguianIMG,
    ["OXALÁ é o detentor do poder genitor masculino. Todas suas representações incluem o branco. E um elemento fundamental dos primórdios, massa de ar e massa de água, a protoforma e a formação de todo tipo de criaturas no AIYE e no ORUN. Ao incorporar-se, assume duas formas: OXAGUIÃ jovem guerreiro, e OXALUFÃ, velho apoiado num bastão de prata (APAXORÓ). OXALÁ é alheio a toda violência, disputas, brigas, gosta de ordem, da limpeza, da pureza. Sua cor é o branco e o seu dia é a sexta-feira. Seus filhos devem vestir branco neste dia. Pertencem a OXALÁ os metais e outras substâncias brancas.", 
    "Na África, todos os Orixás relacionados a criação são designados pelo nome genérico de Orixá Fun Fun. O mais importante entre todos eles chama-se Orixalá (Òrìsanlà), ou seja, o grande Orixá, que nas terras de Igbó e Ifé é cultuado cmo Obatalá, rei do pano branco. Eram cerca de 154 Orixás Fun Fun, mas no Brasil a quantidade se reduz significativamete, sendo que dois, Orixá Olùfón, rei de Ifón (Oxalufã), Orixá Ógìyán, o comedor de inhame e rei de Egigbó(Oxaguiã), tornaram-se suas expressões mais conhecidas. A designação de Orixá Fun Fun se deve ao fato de a cor branca configurar-se como a cor da criação, guardando a essência de todas as demais. O brando representa todas as possibilidades, a base de qualquer criação. O nome Orisanlá foi contraído e deu orígem a palavra Oxalá, e com esse nome o grande Deus-pai passoua ser conhecido no Brasil. Todos os Orixás Fun Fun foram reunidos em Oxalá e divididos em várias qualidades de suas duas configurações principais: Òsálufón, Osagiyan, sendo este último, jovem e grerreiro, filho do primeiro mais velho e paciencioso. Todas as histórias que relatam a criação do mundo passam necessariamente por Oxalá, que foi o primeiro Orixá concebido por Olodumaré e encarregado de criar não só o universo, como todos os seres, todas as coisas que existiríam no mundo. A maior interdição de Oxalá é de fato o azeite-de-dendê, que jamais deve macular suas roupas, seus objetos sagrados, e muito menos o seu Alá. A ú nica coisa vermelha que Oxalá permite, é a pena de Ikodidè, prova de sua submissão ao poder genitor feminino.",
    "Epó kété ó, Alà telè ó",
    "Evite o dendê, evite pisar no Alá.",
    "O Alá representa a própria criação, está intimamente relacionado a concepção de cada ser; é a síntese do poder criador masculino. Sua função primeira já remete ao seu significado profundo. A ação de cobrir não evoca somente proteção, zelo, denota a atividade masculina no ato sexual. No Xirê Oxalá é homenageado por último porque é o grande símbolo da síntese de todas as orígens. Ele representa a totalidade, o único Orixá que, como Exú, reside em todos os seres humanos. Todos são seus filhos, todos são irmãos, já que a humanidade vive sob o meso teto, o grande Alá que nos cobre e protege, o céu."],
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