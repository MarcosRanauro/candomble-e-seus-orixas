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
    "Oxala | Osáàlá",
    "Orixá da paz, da harmonia e da criação.",
    "Cajado",
    "Ofun, Aláfia",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // Aqui é o array com os nomes dos Itans que eu criei para o orixá Oxala. Array com 3 posições.
    ["", "", ""],
    // Aqui é o array com os Itans para o orixá Oxala. Array com 3 posições.
    ["",
      "",
      ""],
    OxalaIMG,
    // Aqui eu criei um array com toda a história e origem para o orixá Oxala. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    2,
    "Oxaguian | Osáàlá Oguian",
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
    ["Oxaguian teria nascido em Ifé, bem antes de seu pai tornar-se o rei de Ifan. Valente guerreiro, desejou, por sua vez, conquistar um reino. Partiu, acompanhado de seu amigo Awoledjê. Oxaguiã não tinha ainda este nome. Chegou num lugar chamado Ejigbô e aí tornou-se Elejigbô (Rei de Ejigbô). Ele tinha uma grande paixão por inhame pilado, comida que os iorubás chamam iyan. Elejigbô comia deste iyan a todo momento; comia de manhã, ao meio-dia e depois da sesta; comia no jantar e até mesmo durante a noite, se sentisse vazio seu estômago! Ele recusava qualquer outra comida, era sempre iyan que devia ser-lhe servido. Chegou ao ponto de inventar o pilão para que fosse preparado seu prato predileto! Impressionados pela sua mania, os outros orixás deram-lhe um cognome: Oxaguiã, que significa Orixá-comedor-de-inhame-pilado, e assim passou a ser chamado. Awoledjê, seu companheiro, era babalawo, um grande adivinho, que o aconselhava no que devia ou não fazer. Certa ocasião, Awoledjê aconselhou a Oxaguiã oferecer: dois ratos de tamanho médio; dois peixes, que nadassem majestosamente; duas galinhas, cujo fígado fosse bem grande; duas cabras, cujo leite fosse abundante; duas cestas de caramujos e muitos panos brancos. Disse-lhe, ainda, que se ele seguisse seus conselhos, Ejigbô, que era então um pequeno vilarejo dentro da floresta, tornar-se-ia, muito em breve, uma cidade grande e poderosa e povoada de muitos habitantes. Depois disso Awoledjê partiu em viagem a outros lugares. Ejigbô tornou-se uma grande cidade, como previra Awoledjê. Ela era arrodeada de muralhas com fossos profundos, as portas fortificadas e guardas armados vigiavam suas entradas e saídas. Havia um grande mercado, em frente ao palácio, que atraía, de muito longe, compradores e vendedores de mercadorias e escravos. Elejigbô vivia com pompa entre suas mulheres e servidores. Músicos cantavam seus louvores. Quando falava-se dele, não se usava seu nome jamais, pois seria falta de respeito. Era a expressão Kabiyesi, isto é, Sua Majestade, que deveria ser empregada. Ao cabo de alguns anos, Awoledjê voltou. Ele desconhecia, ainda, o novo esplendor de seu amigo. Chegando diante dos guardas, na entrada do palácio, Awoledjê pediu, familiarmente, notícias do Comedor-de-inhame-pilado. Chocados pela insolência do forasteiro, os guardas gritaram: Que ultraje falar desta maneira de Kabiyesi! Que impertinência! Que falta de respeito! E caíram sobre ele dando-lhe pauladas e cruelmente jogaram-no na cadeia. Awoledjê, mortificado pelos maus tratos, decidiu vingar-se, utilizando sua magia. Durante sete anos a chuva não caiu sobre Ejigbô, as mulheres não tiveram mais filhos e os cavalos do rei não tinham pasto. Elejigbô, desesperado, consultou um babalaô para remediar esta triste situação. Kabiyesi, toda esta infelicidade é consequência da injusta prisão de um dos meus confrades! É preciso soltá-lo, Kabiyesi! É preciso obter o seu perdão! Awoledjê foi solto e, cheio de ressentimento, foi-se esconder no fundo da mata. Elejigbô, apesar de rei tão importante, teve que ir suplicar-lhe que esquecesse os maus tratos sofridos e o perdoasse. Muito bem! - respondeu-lhe. Eu permito que a chuva caia de novo, Oxaguiã, mas tem uma condição: Cada ano, por ocasião de sua festa, será necessário que você envie muita gente à floresta, cortar trezentos feixes de varetas. Os habitantes de Ejigbô, divididos em dois campos, deverão golpear-se, uns aos outros, até que estas varetas estejam gastas ou quebrem-se. Desde então, todos os anos, no fim da seca, os habitantes de dois bairros de Ejigbô, aqueles de Ixalê Oxolô e aqueles de Okê Mapô, batem-se todo um dia, em sinal de contrição e na esperança de verem, novamente, a chuva cair.",
      "Nasceu dentro de uma concha de caramujo. Não tinha mãe. E quando nasceu, não tinha cabeça, por isso perambulava pelo mundo, sem sentido nem rumo. Um dia encontrou Ori numa estrada e este lhe deu uma cabeça feita de inhame pilado. Apesar de feliz com sua nova cabeça branca, ela esquentava muito e quando esquentava Oxaguian criava mais conflitos. E sofria muito. Um dia encontrou a morte (Iku), que lhe ofereceu uma cabeça fria. Apesar do medo que sentia, o calor era insuportavel e ele acabou aceitando a cabeça preta que a morte lhe deu. Mas essa cabeça era dolorida e fria demais. Oxaguian ficou triste, porque a morte com sua frieza estava o tempo todo com o Orixá. Então Ogum apareceu e deu sua espada para Oxaguian, que espantou Iku. Ogum também tentou arrancar a cabeça preta de cima da branca, mas tanto apertou que as duas se fundiram e Oxaguian ficou com a cabeça azul, agora equilibrada e sem problemas. A partir deste dia ele e Ogum andam juntos transformando o mundo. Oxaguian depositando o conflito de ideias e valores que mudam o mundo e Ogum fornecendo os meios para a transformação, seja a tecnologia ou a guerra. Epá Babá!",
      "Oxaguiã, jovem filho guerreiro de Oxalá, acompanhava Ogun pela terra em suas guerras. Aproveitava de toda ocasião em que a guerra criava destruição para reconstruir no lugar algo maior e mais próspero. Assim espalhou pelo mundo prosperidade, sem descanso, obrigando todos a trabalhar e progredir. Onde via preguiça, inspirava movimento e crescimento. Um dia, entre uma batalha e outra, Oxaguiã foi à cidade de Ogun para buscar provisões e encontrou um castelo que acabava de ser construído pelo povo do lugar em oferecimento a Ogun. Oxaguiã perguntou ao povo: Que vão fazer agora que terminaram de construir o castelo do seu rei? Descansar, eles responderam. Oxaguiã retrucou: O seu rei ainda demora a voltar; vocês devem aproveitar deste tempo de maneira melhor. Construam um castelo ainda melhor e encham de alegria o seu rei. Sacou da espada e com um toque empurrou a parede do castelo, que ruiu todo. Oxaguiã voltou para a guerra, e o povo pôs-se a construir um castelo ainda melhor. O tempo passou e Oxaguiã voltou à cidade de Ogun em busca de mais provisões. Encontrou lá um castelo ainda maior e melhor do que o que tinha derrubado. Semelhante diálogo se travou. Oxaguiã perguntou ao povo: Que vão fazer agora que terminaram o castelo do seu rei? -Vamos descansar, eles responderam. Oxaguiã interrogou: como tinha feito antes, sacou da espada e com um toque derrubou o castelo. E partiu para guerra, voltando sempre em busca de novas provisões. Tantas vezes isto aconteceu que o povo do lugar se transformou em um povo de grandes construtores, desenvolvendo engenharia e arquitetura soberba, reconhecida mundialmente. Oxaguiã promove o progresso. Não gosta de ver ninguém parado."],
    OxaguianIMG,
    // Aqui eu criei um array com todas a história e origem para o orixá Oxaguian. Array com 5 posições.
    ["OXALÁ é o detentor do poder genitor masculino. Todas suas representações incluem o branco. E um elemento fundamental dos primórdios, massa de ar e massa de água, a protoforma e a formação de todo tipo de criaturas no AIYE e no ORUN. Ao incorporar-se, assume duas formas: OXAGUIÃ jovem guerreiro, e OXALUFÃ, velho apoiado num bastão de prata (APAXORÓ). OXALÁ é alheio a toda violência, disputas, brigas, gosta de ordem, da limpeza, da pureza. Sua cor é o branco e o seu dia é a sexta-feira. Seus filhos devem vestir branco neste dia. Pertencem a OXALÁ os metais e outras substâncias brancas.",
      "Na África, todos os Orixás relacionados a criação são designados pelo nome genérico de Orixá Fun Fun. O mais importante entre todos eles chama-se Orixalá (Òrìsanlà), ou seja, o grande Orixá, que nas terras de Igbó e Ifé é cultuado cmo Obatalá, rei do pano branco. Eram cerca de 154 Orixás Fun Fun, mas no Brasil a quantidade se reduz significativamete, sendo que dois, Orixá Olùfón, rei de Ifón (Oxalufã), Orixá Ógìyán, o comedor de inhame e rei de Egigbó(Oxaguiã), tornaram-se suas expressões mais conhecidas. A designação de Orixá Fun Fun se deve ao fato de a cor branca configurar-se como a cor da criação, guardando a essência de todas as demais. O brando representa todas as possibilidades, a base de qualquer criação. O nome Orisanlá foi contraído e deu orígem a palavra Oxalá, e com esse nome o grande Deus-pai passoua ser conhecido no Brasil. Todos os Orixás Fun Fun foram reunidos em Oxalá e divididos em várias qualidades de suas duas configurações principais: Òsálufón, Osagiyan, sendo este último, jovem e grerreiro, filho do primeiro mais velho e paciencioso. Todas as histórias que relatam a criação do mundo passam necessariamente por Oxalá, que foi o primeiro Orixá concebido por Olodumaré e encarregado de criar não só o universo, como todos os seres, todas as coisas que existiríam no mundo. A maior interdição de Oxalá é de fato o azeite-de-dendê, que jamais deve macular suas roupas, seus objetos sagrados, e muito menos o seu Alá. A ú nica coisa vermelha que Oxalá permite, é a pena de Ikodidè, prova de sua submissão ao poder genitor feminino.",
      "Epó kété ó, Alà telè ó",
      "Evite o dendê, evite pisar no Alá.",
      "O Alá representa a própria criação, está intimamente relacionado a concepção de cada ser; é a síntese do poder criador masculino. Sua função primeira já remete ao seu significado profundo. A ação de cobrir não evoca somente proteção, zelo, denota a atividade masculina no ato sexual. No Xirê Oxalá é homenageado por último porque é o grande símbolo da síntese de todas as orígens. Ele representa a totalidade, o único Orixá que, como Exú, reside em todos os seres humanos. Todos são seus filhos, todos são irmãos, já que a humanidade vive sob o meso teto, o grande Alá que nos cobre e protege, o céu."],
  ),
  new OrixasClass(
    3,
    "Nanã | Nàná Burukù",
    "Orixá da lama, da morte e da sabedoria.",
    "Abebé",
    "EJI-OLOGBON",
    "Segunda-feira e Sábado",
    "Anil, Branco e Roxo",
    "Aberém, Munguzá",
    "Dahomé",
    "Multidões, Metais",
    "Salubá",
    "Os filhos de Nana são pessoas extremamente calmas, tão lentas no cumprimento das suas tarefas que chegam a irritar. Agem com benevolência, dignidade e gentileza. As pessoas de Nana parecem ter a eternidade à sua frente para acabar os seus afazeres; gostam de crianças e educam-nas com excesso de doçura e mansidão, assim como as avós. São pessoas que no modo de agir e até fisicamente aparentam mais idade. Podem apresentar precocemente problemas de idade, como tendência a viver no passado, de recordações, apresentar infecções reumáticas e problemas nas articulações em geral. As pessoas de Nana podem ser teimosas e “ranzinzas”, daquelas que guardam por longo tempo um rancor ou adiam uma decisão. Porém agem com segurança e majestade. As suas reacções bem equilibradas e a pertinência das suas decisões mantêm-nas sempre no caminho da sabedoria e da justiça. Embora se atribua a Nana um carácter implacável, os seus filhos têm grande capacidade de perdoar, principalmente as pessoas que amam. São pessoas bondosas, decididas, simpáticas, mas principalmente respeitáveis, um comportamento digno da Grande Deusa do Daomé.",
    // Aqui é o array com os nomes dos Itans que eu criei para o orixá Nanã. Array com 3 posições.
    ["Nanã e a origem do homem na terra!", "Nanã e seu filho Obaluaiê!", "Nanã, Ogum e o pântano!"],
    // Aqui é o array com os Itans para o orixá Nanã. Array com 3 posições.
    ["Nanã é um importante orixá feminino relacionado com a origem do homem na Terra. O seu domínio se relaciona com as águas paradas, os pântanos e a terra úmida. Do ponto de vista divino, sua relação com o barro, mistura de água e terra, coloca essa divindade nos domínios existentes entre a vida e a morte. Isso porque a água é o elemento que se liga à vida e a terra, à morte. É daí que compreendemos o seu trânsito entre essas duas poderosas realidades. O mito de Nanã apareceu quando Olorum encarregou Oxalá da missão de fazer o modelo que daria forma ao homem. Entre tantas alternativas, o orixá encarregado tentou fazer uso do vento, da madeira, da pedra, do fogo, do azeite e até do vinho. Contudo, apesar de tanto esforço, ele percebia que nenhum material era maleável o suficiente para que ele executasse a tarefa. Foi quando Nanã retirou uma porção de barro do fundo do lago em que morava. Utilizando aquele material, Oxalá conseguiu finalmente dar forma ao homem. Logo em seguida, Olorum pegou o modelo e com um sopro lhe concedeu força vital para realizar tarefas. Depois disso, os outros orixás se encarregaram de ajudar o homem a povoar as terras do mundo. Sendo feito de um elemento que pertence à Nanã, os homens têm que morrer. Afinal de contas, ela cobra de volta aquilo que um dia ofereceu para que o homem viesse a existir. Ligada ao princípio e ao fim da existência, Nanã é costumeiramente reverenciada com cânticos que rogam pela extensão da vida e o adiamento da morte. Em alguns rituais, Nanã é evocada pelas mulheres que apresentam dificuldade para engravidar. Quando tem o seu pedido atendido, essas mães costumam acrescentar o nome da deusa no nome de seus filhos. Esse seria um gesto de gratidão que também reforça o poder de vida ligado a esse importante Orixá. Os cultos de adoração à Nanã estão cercados de todo um cuidado. Os envolvidos devem estar livres de qualquer tipo de prática que seja vista como impura. Não raro, os participantes ficam um tempo sem praticar sexo ou consumir drogas.   Em seu culto observamos que o ibiri (espécie de vassoura produzida a partir das folhas da palmeira) é o objeto que solenemente indica a sua presença. De forma comparativa, podemos ver que Nanã ocupa um espaço simbólico semelhante ao que a lendária Grande-Mãe ocupa em outras religiões existentes.  ",
      "Nanã, querendo demais ter um filho de Oxalá, concebeu o primogênito Obaluaiê, o qual possuia feia aparência e foi por ela desprezado. Então consultou Ifá (o Orixá da adivinhação) e este lhe disse que em uma segunda tentativa ela teria um filho lindíssimo, tão formoso quanto o arco-íris, mas este não ficaria a seu lado, porque ela estava indo contra as leis da natureza: Oxalá era de Iemanjá, Orumilá havia traçado isto no céu. Aliás, o próprio Oxalá tentou, inutilmente, dissuadi-la desta relação. Conforme previsto por Ifá, nasceu Oxumarê, maravilhoso. Durante seis meses, assumia a forma de um arco-íris, levando água para o castelo de seu pai, que morava em Orum (céu). Nos outros seis meses, voltava à Terra sob a forma de uma cobra, aquela que mordia a própria cauda, dando a volta em torno da Terra. Ela teria gerado o movimento de rotação do planeta, bem como o trânsito dos corpos celestes no espaço. É a serpente da bíblia, da magia, e representa polaridades opostas: masculino/feminino, inverno/verão, noite/dia, bem/mal, sendo que, por ser extremamente generoso, Oxumarê coloca no coração e na consciência do homem a certeza de que só o Bem é a luz, o amor. Sendo assim, o Bem é tudo de que os bons precisam para se tornarem fortes; na verdade, o mal só existe porque os bons são tímidos. A lenda continua dizendo que Oxumarê deu um reino a seu irmão e que lhe fez uma roupa muito bonita para esconder sua aparência. Carinhoso, amoroso, não deixa que seus filhos passem privações, e se os mesmos estão sujeitos ao carma ou a “Lei”, ele procura consolá-los, ajudando-os a suportar as provas.",
      "No inicio dos tempos os pântanos cobriam quase toda a terra. Faziam parte do reino de Nanã Buruquê e ela tomava conta de tudo como boa soberana que era. Quando todos os reinos foram divididos por Olorun e entregues aos orixás uns passaram a adentrar nos domínios dos outros e muitas discórdias passaram a ocorrer. E foi dessa época que surgiu esta lenda. Ogum precisava chegar ao outro lado de um grande pântano, lá havia uma séria confusão ocorrendo e sua presença era solicitada com urgência. Resolveu então atravessar o lodaçal para não perder tempo. Ao começar a travessia que seria longa e penosa ouviu atrás de si uma voz autoritária: - Volte já para o seu caminho rapaz! - Era Nanã com sua majestosa figura matriarcal que não admitia contrariedades - Para passar por aqui tem que pedir licença! - Como pedir licença? Sou um guerreiro, preciso chegar ao outro lado urgente. Há um povo inteiro que precisa de mim. -Não me interessa o que você é e sua urgência não me diz respeito. Ou pede licença ou não passa. Aprenda a ter consciência do que é respeito ao alheio. Ogum riu com escárnio: - O que uma velha pode fazer contra alguém jovem e forte como eu? Irei passar e nada me impedirá! Nanã imediatamente deu ordem para que a lama tragasse Ogum para impedir seu avanço. O barro agitou-se e de repente começou a se transformar em grande redemoinho de água e lama. Ogum teve muita dificuldade para se livrar da força imensa que o sugava. Todos seus músculos retesavam-se com a violência do embate. Foram longos minutos de uma luta sufocante. Conseguiu sair, no entanto, não conseguiu avançar e sim voltar para a margem. De lá gritou: -Velha feiticeira, você é forte não nego, porém também tenho poderes. Encherei esse barro que chamas de reino com metais pontiagudos e nem você conseguirá atravessa-lo sem que suas carnes sejam totalmente dilaceradas. E assim fez. O enorme pântano transformou-se em uma floresta de facas e espadas que não permitiriam a passagem de mais ninguém. Desse dia em diante Nanã aboliu de suas terras o uso de metais de qualquer espécie. Ficou furiosa por perder parte de seu domínio, mas intimamente orgulhava-se de seu trunfo: - Ogum não passou!"],
    Nana,
    // Aqui eu criei um array com todas a história e origem para o orixá Nanã. Array com 5 posições.
    ["Nanã, a deusa dos mistérios, é uma divindade de origem simultânea à criação do mundo, pois quando Odudua separou a água parada, que já existia, e liberou do “saco da criação” a terra, no ponto de contato desses dois elementos formou-se a lama dos pântanos, local onde se encontram os maiores fundamentos de Nana. Senhora de muitos búzios, Nana sintetiza em si morte, fecundidade e riqueza. Seu nome designa pessoas idosas e respeitáveis e, para os povos jeje, da região do antigo Daomé, significa “mãe”. Nessa região, onde hoje se encontra a República do Benin, Nana é muitas vezes considerada a dinvidade suprema e talvez por essa razão seja freqüentemente descrita como um orixá masculino. Sendo a mais antiga das divindades das águas, ela representa a memória ancestral de nosso povo: é a mãe antiga (Iyá Agbà) por excelência. É mãe dos orixás Iroko, Obaluaiê e Oxumaré, mas por ser a deusa mais velha do candomblé é respeitada como mãe por todos os outros orixás. A vida está cercada de mistérios que ao longo da História atormentam o ser humano. Porém, quando ainda na Pré-História, o homem se viu diante do mistério da morte, em seu âmago irrompeu um sentimento ambíguo. Os mitos aliviavam essa dor e a razão apontava para aquilo que era certo em seu destino. A morte faz surgir no homem os primeiros sentimentos religiosos, e nesse momento Nana se faz compreender, pois nos primórdios da História os mortos eram enterrados em posição fetal, remetendo a uma idéia de nascimento ou renascimento. O homem primitivo entendeu que a morte e a vida caminham juntas, entendeu os mistérios de Nana.",
      "Nana é o princípio, o meio e o fim; o nascimento, a vida e a morte. Ela é a origem e o poder. Entender Nana e entender o destino, a vida e a trajetória do homem sobre a terra, pois Nana é a História. Nana é água parada, água da vida e da morte. Nana é o começo porque Nanã é o barro e o barro é a vida. Nana é a dona do axé por ser o orixá que dá a vida e a sobrevivência, a senhora dos ibás (que deveriam ser de barro) que permite o nascimento dos deuses (no barro dos ibás) e dos homens.",
      "Nana pode ser a lembrança angustiante da morte na vida do ser humano, mas apenas para aqueles que encaram esse final como algo negativo, como um fardo extremamente pesado que todo ser carrega desde o seu nascimento. Na verdade, apenas as pessoas que têm o coração repleto de maldade e dedicam a vida a prejudicar o próximo preocupam-se com isso. Aqueles que praticam boas ações vivem preocupados com o seu próprio bem, com sua elevação espiritual, e desejam ao próximo o mesmo que pra si, só esperam da vida dias cada vez melhores e têm a morte como algo natural e inevitável. A sua certeza é a imortalidade de sua essência. Nana, a mãe maior, é a luz que nos guia, nosso cotidiano. Conhecer a própria vida e o próprio destino é conhecer Nana, pois os fundamentos dos orixás e do Candomblé estão ligados à vida. A nossa vida é o nosso orixá.",
      "Nana Buruku foi a primeira esposa de Oxalá, mas perdeu o seu grande amor para Iemanjá. Muito sábia Nana era considerada por todos a guardiã da justiça. Era de fato juíza, as pessoas, especialmente as mulheres, costumavam queixar-se a ela, que fazia os julgamentos e aplicava os castigos. A coruja, animal que representa a sabedoria, pertence a Nana. O que surpreendia nas sentenças de Nana é que ela só castigava os homens. Havia um jardim criado por ela especialmente para abrigar os eguns —era o país da morte. Os maridos faltosos eram amarrados em uma das árvores. Nana convocava os eguns para assustá-los e, quando o pavor era insuportável, eles eram soltos.",
      "Nana não vira na cabeça de homem, aliás, Nana abomina a figura masculina, pois o homem, através do esperma, líquido que é símbolo de Oxalá, semeia o óvulo e gera uma nova vida. Nana é a morte que reside no âmago da vida, que possibilita o renascimento. A vida e tudo que a representa —o esperma (homem) e o sangue —são considerados tabus para Nanã. É na morte, condição para o renascimento e para a fecundidade, que se encontram os mistérios de Nana. Respeitada e temida, Nana, deusa das chuvas, da lama, da terra, juíza que castiga os homens faltosos, é a morte na essência da vida."],
  ),
  new OrixasClass(
    4,
    "Iemanjá | Ýemojà",
    "Orixá do mar, da fertilidade e da maternidade.",
    "Abêbé",
    "Irosun, Ossá, Owonrin",
    "Sábado",
    "Branco, Cristal, Azul, Rosa",
    "Ebô, camarão seco, manjar , acaçá, peixe de água salgada, bolo",
    "Egbà e Abeokunta",
    "Mariscos, peixe de pele, melância",
    "Erù-Iyá, Odó-Iyá",
    "São imponentes, majestosos e belos, calmos, sensuais, fecundos, cheios de dignidade e dotados de irresistível fascínio (o canto da sereia). São voluntariosos, fortes, rigorosos, protectores, altivos e, algumas vezes, impetuosos e arrogantes; têm o sentido da hierarquia, fazem-se respeitar e são justos mas formais; põem à prova as amizades que lhes são devotadas, custam muito a perdoar uma ofensa e, se a perdoam, não a esquecem jamais. Preocupam-se com os outros, são maternais e sérios. Sem possuírem a vaidade de Oxum, gostam do luxo, das fazendas azuis e vistosas, das jóias caras. Eles têm tendência à vida sumptuosa, mesmo se as possibilidades do quotidiano não lhes permitem um tal fausto. As filhas de Yemonjá são boas donas de casa, educadoras pródigas e generosas, criando até os filhos de outros (Omulu). Não perdoam facilmente, quando ofendidas. São possessivas e muito ciumentas. São pessoas muito voluntariosas e que tomam os problemas dos outros como se fossem seus. São pessoas fortes, rigorosas e decididas. Gostam de viver em ambientes confortáveis com certo luxo e requinte. Põe à prova as suas amizades, que tratam com um carinho maternal, mas são incapazes de guardar um segredo, por isso não merecem total confiança. Elas costumam exagerar nas suas verdades (para não dizer que mentem) e fazem uso de chantagens emocionais e afectivas. São pessoas que dão grande importância aos seus filhos, mantêm com eles os conceitos de respeito e hierarquia sempre muito claros.",
    // Aqui é o array com os nomes dos Itans que eu criei para o orixá Nanã. Array com 3 posições. 
    ["", "", ""],
    // Aqui é o array com os Itans para o orixá Nanã. Array com 3 posições.
    ["",
      "",
      ""],
    Yemanja,
    // Aqui eu criei um array com todas a história e origem para o orixá Yemanja. Array com 5 posições.
    ["No Brasil, é muito venerada, e seu culto tornou-se quase independente do CANDOMBLÉ. É representada como uma sereia de longos cabelos pretos. Rege a maternidade, é mãe dos peixes que representam fecundidade. Seu dia é sábado. Nas grandes “obrigações”, são oferecidos cabra branca, pata ou galinha branca. Gosta muito de flores e é costume oferecer-lhe de quatro a sete rosas brancas abertas, que são jogadas ao mar para agradecimento. Sua cor é o branco com azul. Usa um ADÉ com franjas de miçangas que esconde o rosto. Leva na mão o BÉBÊ — leque ritual de metal prateado de forma circular, com uma sereia recortada no centro. YEMANJÁ, por presidir a formação da individualidade, que como sabemos está na cabeça, está presente em todos os rituais, especialmente o BORI.",
      "È a rainha de todas as águas do mundo, seja dos rios, seja as do mar. Seu nome deriva da expressão YéYé Omó Ejá, que significa, mãe cujo filhos são peixes. Na África era cultuada pelos egbá, nação Iorubá da região de Ifé e Ibadan onde se encontra o rio Yemojá. Esse povo se tranferiu para a região de Abeokutá, levando consigo os objetos sagrados da deusa, e foram depositados no rio Ogum, o qual, diga-se de passagem, não tem nada a ver com o Orixá Ogum, apesar de no Brasil Yemojá ser cultuada nas águas salgadas, sua orígem é de um rio que corre para o mar. Inclusive, todas as suas saudações, orikís e cantigas remetem a essa orígem, Odó Iyà por exemplo, significa mãe do rio, já a saudação Erù Iyà faz alusão às espumas formadas do encontro das águas do rio com as águas do mar, sendo esse um dos locais de culto a Yemonjá.",
      "Yemonjá é a mãe de todos os filhos, mãe de todo mundo; É ela quem sustenta a humanidade e, por isso, os órgão que a relacionam à maternidde, ou seja, sua vulva e seus seios chorosos, são sagrados.",
      "Yemonjá é o espelho do mundo, que reflete todas as diferenças, pois a mãe é sempre um espelho para o filho, um exemplo de conduta. Ela é a mãe que orienta, que mostra os caminhos, que educa, e sabe, sobre tudo, explorar as potencialidades que estão dentro de cada um, como fez com os guerreiros de Olofin, mostrando o quanto eram bons em seus ofícios, mas dizendo, ao mesmo tempo, que a guerra maior é a que travamos contra nós mesmos. Yemonjá foi violentada por seu próprio filho, Orugan; Dessa relação incestuosa nasceram diversos Orixás e deus seios rasgados jorraram todos os rios do mundo. Yemonjá acabou se desmanchando em suas próprias lágrimase trasformando-se num rio que correu em direção ao oceano. Por tanto não é por acaso que as lágrimas e o mar tem o mesmo sabor.",
      "Dissimulada, e aridlosa, Yemonjá faz uso da chantagem afetiva para manter os filhos sempre perto de sí.vÉ conciderada a mãe da maioría dos Orixás de Orígem Iorubá. É o tipo de mãe que quer os filhos sempre por perto, que tem uma palavra de carinho, um conselho, um alívio psicológico. Quando os perde é capaz de desequilibrar-se completamente. Yemonjá é a mãe que não faz distinção dos seus filhos, sejam como forem, tenham ou não saído de seu ventre. Quando humildemente criou, com todo amor e carinho, aquele menino cheio de chagas, fez irromper um grande guerreiro. Yemonjá criou Omulu, o filho de senhor, o rei da terra, o próprio SOL."],
  ),
  new OrixasClass(
    5,
    "Logun Edé",
    "Orixá da caça, da pesca e da riqueza.",
    "Arco e flecha",
    "IRETE-MEJI, OGBÉ-OGUNDÁ",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // Aqui é o array com os nomes dos Itans que eu criei para o orixá LogunEde. Array com 3 posições.
    ["", "", ""],
    // Aqui é o array com os Itans para o orixá LogunEde. Array com 3 posições.
    ["",
      "",
      ""],
    LogunEde,
    // Aqui eu criei um array com todas a história e origem para o orixá LogunEde. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    6,
    "Oxum",
    "Orixá do amor, da beleza e da riqueza.",
    "Abêbé",
    "Oxê",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Oxum,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    7,
    "Ewa",
    "Orixá da beleza, da fertilidade e da prosperidade.",
    "Espelho",
    "Iká, OGBÉ-OGUNDÁ",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Ewa,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    8,
    "Obá",
    "Orixá da água doce, da guerra e da coragem.",
    "Espada",
    "Ejioko",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Oba,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    9,
    "Oyá",
    "Orixá do vento, da tempestade e da transformação.",
    "Espada",
    "Ossá, Owonrin",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Oya,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    10,
    "Xango",
    "Orixá do trovão, da justiça e da coragem.",
    "Machado",
    "Obará, Ejilaxebará",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Xango,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    11,
    "Oxumare",
    "Orixá do arco-íris, da renovação e da transformação.",
    "Cobra",
    "Iká",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Oxumare,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    12,
    "Omolu",
    "Orixá da saúde, da cura e da proteção.",
    "Cajado",
    "Odi",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Omolu,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    13,
    "Ossain",
    "Orixá das folhas, das ervas e da cura.",
    "Ervas",
    "Iká",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Ossain,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    14,
    "Ode",
    "Orixá da caça, da floresta e da liberdade.",
    "Arco e flecha",
    "Obará",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Ode,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    15,
    "Ogum",
    "Orixá da guerra, da coragem e da proteção.",
    "Espada",
    "Eta Ogundá",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Ogum,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
      "",
      "",
      "",
      ""],
  ),
  new OrixasClass(
    16,
    "Exu",
    "Orixá da comunicação, da transformação e da proteção.",
    "Cajado",
    "Obará, Odi, Owonrin",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ["", "", ""],
    ["",
      "",
      ""],
    Exu,
    // Aqui eu criei um array com todas as histórias que eu criei para o orixá Oxaguian. Array com 5 posições.
    ["",
    "",
    "",
    "",
    ""],
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