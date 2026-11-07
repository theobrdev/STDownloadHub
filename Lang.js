/* Seleção de idioma: English / Português (Brasil)
   - O texto em inglês fica no próprio HTML.
   - Para traduzir um elemento, coloque data-i18n="chave" nele e
     adicione a tradução em translations.pt abaixo (aceita HTML).
   - Os links "(about it)" (classe .about) são tratados à parte. */
(function () {
  var STORAGE_KEY = 'stLang';

  var translations = {
    pt: {
      'intro': 'Bem-vindo ao Slendytubbies Download Hub (ST Download Hub)! Aqui, você encontrará o lugar (não) oficial para baixar todos os jogos e fangames de Slendytubbies, com informações tiradas diretamente da wiki. Downloads aqui:',
      'cat-st1': 'Categoria Slendytubbies 1',
      'cat-st2': 'Categoria Slendytubbies 2',
      'cat-2d': 'Categoria Slendytubbies 2D',
      'cat-other': 'Outros Jogos',
      'lost1': 'Infelizmente, V1.0, V1.1 e V2.5 são mídia perdida (lost media)',
      'lost2': 'Infelizmente, V1.6 Legacy Coming Soon, V1.0.1, V1.1 e V1.2 são mídia perdida (lost media)',
      /* ST1Alphas.html */
      'alphas-1': "Esta página detalha as primeiras versões do <em>Slendytubbies</em> original.",
      'alphas-2': "Testes de Multiplayer",
      'alphas-3': "O que é visto quando qualquer uma das duas builds é iniciada.",
      'alphas-4': "Estas primeiras builds do <em>Slendytubbies</em> original servem para testar o multiplayer. Existem duas versões desta build: uma para o modo Competitive e outra para o modo Versus. Ambas as builds têm suas próprias diferenças. A build Competitive é datada de 27 de novembro de 2012, enquanto a build Versus é datada de 2 de dezembro de 2012. Apesar das versões diferentes, os jogadores podem jogar juntos entre elas com pequenos problemas. Por exemplo, é possível entrar como vítima usando a build Versus em uma build Competitive, mas o modelo do jogador ficará estranho. Além disso, o Tinky Winky do Versus não pode ser visto nem interagir com os jogadores da build Competitive. Estas builds são parecidas com as alphas anteriores e compartilham diferenças com elas.",
      'alphas-5': "Jogabilidade",
      'alphas-6': "Embora esta build seja feita para testar o multiplayer, ela pode ser jogada offline. Ela funciona de forma idêntica ao <em>Slendytubbies</em> original, com pequenas diferenças entre as builds. Como o nome indica, os jogadores podem jogar de forma cooperativa conectando-se a um endereço IP ou criando uma partida ao iniciar uma das builds.",
      'alphas-7': "Diferenças em relação ao jogo final",
      'alphas-8': "Em ambas as builds, o título da janela diz “Slendytubbies Project” em vez de “Slendytubbies”.",
      'alphas-9': "Não há tela de título. Em vez disso, um simples sistema de conexão por endereço IP no canto ocupa o lugar dela.",
      'alphas-10': "O chat não está presente.",
      'alphas-11': "O jogo ainda não tem períodos de intermissão.",
      'alphas-12': "Competitive",
      'alphas-13': "O Noo-Noo é branco.",
      'alphas-14': "Os corpos dos Teletubbies estão ausentes.",
      'alphas-15': "Estranhamente, não há skybox.",
      'alphas-16': "Versus",
      'alphas-17': "Alpha v0.5",
      'alphas-18': "Começos humildes.",
      'alphas-19': "Esta versão alpha do <em>Slendytubbies</em> é muito diferente da versão final. Ela vazou em uma data desconhecida e está disponível para download <a href=\"https://archive.org/details/slendytubbies-1-64bit\" target=\"_blank\" rel=\"noopener\">aqui</a>. O protótipo é datado de 15 de novembro de 2012.",
      'alphas-20': "Alguns dos arquivos do Unity na pasta data datam de 3 de novembro de 2011, o que presumivelmente indica quando o desenvolvimento do <em>Slendytubbies</em> começou (embora isso seja improvável, já que o <em>Slender</em> original foi lançado em 26 de junho de 2012).",
      'alphas-21': "Jogabilidade",
      'alphas-22': "A alpha funciona de forma parecida com a versão final, embora com várias mudanças, que vão principalmente do visual ao comportamento do Tinky Winky. Nesta build, o Tinky Winky fica primeiro em um estado de perseguição furtiva, em que parece normal até chegar perto do jogador; então ele começa a gritar e a ferir o jogador se este olhar para ele. Os jogadores precisam ter mais cuidado com o Tinky Winky, pois há uma barra de vida (invisível) que diminui quando o jogador olha para ele em seu estado agressivo. Fora isso, o jogo carece de vários aspectos, como uma tela de título ou outros períodos do dia.",
      'alphas-23': "Diferenças em relação ao jogo final",
      'alphas-24': "Não há tela de título além da configuração padrão do Unity ao iniciar o jogo. Depois da tela do Unity, o jogador é levado à variação Noite do Main Land.",
      'alphas-25': "Há algumas Cenouras espalhadas pelo terreno. Uma fica perto do ponto de início, e as outras podem ser encontradas explorando o mapa.",
      'alphas-26': "Os teletubbies têm o dobro do tamanho do jogador, o que pode levar a pensar que se está jogando como um humano.",
      'alphas-27': "Os gráficos do jogo são muito diferentes em comparação com o final.",
      'alphas-28': "Não há “intermissão” ao entrar no Main Land como no jogo final. Isso seria a base para os próximos jogos.",
      'alphas-29': "O Tinky Winky age de forma diferente na Alpha. Ele se aproxima devagar do jogador em seu estado dormente, parecendo-se com sua versão antes da infecção e, se chegar mais perto do jogador, ele grita e se transforma em seu estado hostil, “movendo-se” de forma errática. Enquanto está no estado dormente, ele é inofensivo e o jogador pode olhar para ele com segurança.",
      'alphas-30': "Não há tela de vitória neste jogo. Depois que o jogador pega todos os custards, ele precisa morrer para encerrar o jogo.",
      'alphas-31': "A lanterna parece mais simples em comparação com a do jogo final.",
      'alphas-32': "Algumas árvores não têm colisão.",
      'alphas-33': "Não há tela de morte. Se o jogador olhar para o Tinky Winky em seu estado hostil por tempo demais, o jogo trava.",
      'alphas-34': "O jogador não consegue correr. Além disso, não pode se agachar, mas pode pular.",
      'alphas-35': "Há paredes invisíveis por todo o Main Land. A versão final as substituiu por montanhas.",
      'alphas-36': "O jogo mostra no topo da tela quantos Teletubby Custards foram coletados.",
      'alphas-37': "A Laa-Laa não consegue se levantar e dar um susto no jogador quando ele se aproxima do corpo dela.",
      'alphas-38': "O Noo-noo está ausente da casa e não é visto em lugar nenhum na Alpha.",
      'alphas-39': "O corpo do Dipsy sangra de forma um pouco diferente e mais perceptível em comparação com o jogo final.",
      'alphas-40': "As camas dos Teletubbies não estão presentes na casa.",
      'alphas-41': "A “caverna” tem uma aparência bem estranha na Alpha.",
      'alphas-42': "Os pop-ups estão presentes e funcionam de forma parecida com a versão final.",
      'alphas-43': "No entanto, um pop-up único, que não existe no jogo final, está presente nesta versão: o pop-up “YOUR Next”. Ele foi adicionado de volta na Anniversary Edition.",
      'alphas-44': "Não há árvores caindo nesta build.",
      'alphas-45': "O Tinky Winky sempre encara o jogador na alpha, um comportamento que nenhum outro personagem da série apresenta. A “animação de ataque” do Tinky Winky Clássico no <em>Slendytubbies 3</em> pode lembrar isso.",
      'alphas-46': "Ao contrário da versão completa, os custards têm colisão e é preciso clicar neles para pegá-los. Quando um custard é pego, toca o som de pop-up.",
      'alphas-47': "Alpha v1",
      'alphas-48': "Uma versão posterior do <em>Slendytubbies</em>. Ela é parecida com a build anterior, mas com mais adições. Esta build é datada de 22 de novembro de 2012.",
      'alphas-49': "Jogabilidade",
      'alphas-50': "A jogabilidade ainda é praticamente a mesma da Alpha v0.5, mas com a adição de uma tela de título e de um modo manhã.",
      'alphas-51': "Diferenças em relação à build final",
      'alphas-52': "A tela de título é diferente da final.",
      'alphas-53': "Curiosidades",
      'alphas-54': "A imagem de cabeçalho da configuração do Unity do jogo final foi tirada de uma das versões anteriores.",
      'alphas-55': "Olhando de perto o canto inferior esquerdo do cabeçalho sem cortes, dá para ver o que parece ser um HUD de vida.",
      'alphas-56': "Curiosamente, a mecânica de vida parece ainda estar presente nas alphas, pois o jogador ainda pode morrer para o Tinky Winky mesmo olhando para ele apenas em momentos isolados.",
      'alphas-57': "Galeria",
      'alphas-58': "O Tinky Winky se aproxima furtivamente do jogador em seu estado dormente. Se ele chegar mais perto, então...",
      'alphas-59': "...ele se transforma em seu estado hostil. Se o jogador olhar para ele por tempo demais nesse estado, o jogo trava.",
      'alphas-60': "O cabeçalho de configuração do jogo final, que notavelmente se parece com o da Alpha.",
      'alphas-61': "O corpo da Laa-Laa. Ela não dá um susto no jogador como no jogo final.",
      'alphas-62': "O corpo do Dipsy na Alpha, animado.",
      'alphas-63': "A Po em sua posição de costume, pendurada em uma árvore.",
      'alphas-64': "Uma trombeta de voz.",
      'alphas-65': "A “caverna”.",
      'alphas-66': "Uma das muitas cenouras espalhadas pelo Main Land.",
      'alphas-67': "Uma demonstração do comportamento do Tinky Winky.",
      'alphas-68': "O pop-up “YOUR Next”, presente apenas nesta build. Ele também pode ser visto na Anniversary Edition.",
      'alphas-69': "Um Noo Noo branco, no “multiplayertest”.",
      'alphas-70': "Áudio",
      'alphas-71': "Alguns efeitos sonoros únicos estão presentes nos arquivos do jogo.",
      'alphas-72': "Um ambiente de vento.",
      'alphas-73': "“Sudden Shock”. Um efeito sonoro de pop-up não utilizado.",
      'alphas-74': "texto por: Slendytubbies Wiki",
      /* ST1.html */
      'st1-1': "<strong>Desenvolvedor:</strong> ZeoWorks",
      'st1-2': "<strong>Engine:</strong> Unity 3.4.2 (Alpha), Unity 3.5.5 (V1), Unity 4.0.0 (V2)",
      'st1-3': "<strong>Plataforma:</strong> PC",
      'st1-4': "<strong>Lançamento:</strong> 12 de dezembro de 2012",
      'st1-5': "<strong>Última versão:</strong> V2.0 BETA — “Fix”",
      'st1-6': "<strong>Gênero:</strong> Survival Horror, Coleta de Itens, Indie.",
      'st1-7': "<strong>Idioma:</strong> Inglês",
      'st1-8': "<strong>Canônico:</strong> Não",
      'st1-9': "<strong>Próximo jogo:</strong> Slendytubbies II",
      'st1-10': "<strong><em>Slendytubbies</em></strong>, também conhecido como <strong><em>Slendytubbies 1</em></strong> (abreviado como <strong><em>S1</em></strong>, <strong><em>S</em></strong>, <strong><em>ST</em></strong> ou <strong><em>ST1</em></strong>), é um jogo de terror online, resultado da combinação do popular jogo de terror <em>Slender: The Eight Pages</em> com o programa de TV infantil <em>Teletubbies</em>. O jogo tem dois modos: <strong>Singleplayer</strong> e Multiplayer. O link do MediaFire da V2 Beta pode ser encontrado <a href=\"https://www.mediafire.com/file/fx9dbx5zsbsozl7/Slendytubbies+V2+Beta+-FIX.rar\" target=\"_blank\" rel=\"noopener\">aqui</a>, e a versão original pode ser encontrada <a href=\"https://www.mediafire.com/file/i5jl35vc34qui7t/Slendytubbies.exe/file\" target=\"_blank\" rel=\"noopener\">aqui</a>. O objetivo do jogo é coletar dez tigelas de Tubby Custard enquanto evita o Tinky Winky, que é a ameaça do mapa.",
      'st1-11': "Até hoje, o <em>Slendytubbies</em> é o jogo mais único da série: tem um ambiente interativo, três períodos do dia (o entardecer só voltaria em uma atualização do <em>Slendytubbies III</em>), comportamento diferente dos inimigos e mais. Os ambientes interativos (como as árvores caindo) foram removidos nos jogos seguintes.",
      'st1-12': "Enredo",
      'st1-13': "Este jogo, na verdade, tinha um enredo graças a um antigo vídeo recuperado do Santikun, intitulado ‘<a href=\"https://www.youtube.com/watch?v=zdFsKjhEWJg\" target=\"_blank\" rel=\"noopener\">Slendytubbies: The Movie</a>’ (Trailer), que foi cancelado. Ele mostrava como o Tinky Winky começou a agir de forma estranha depois de comer um custard e foi matando todos um por um, exceto a Po, que cometeu suicídio. Depois do incidente, dois teletubbies brancos (que são policiais) foram investigar, mas “em vão”, pois presumivelmente foram mortos pelo Tinky Winky fora da tela. Mais dois policiais, chamados de “Slendytubbies Busters”, chegam como os protagonistas da história, encerrando o trailer aqui.",
      'st1-14': "Deve-se notar que este vídeo e enredo possivelmente não são canônicos, já que o Sean não participou da criação.",
      'st1-15': "Jogabilidade",
      'st1-16': "O jogo funciona mais ou menos como o <em>Slender</em> original, mas no universo dos <em>Teletubbies</em> e com dez custards para coletar em vez de oito páginas. Os jogadores podem escolher entre vários períodos do dia antes de começar o jogo: dia, entardecer e noite. Os períodos do dia só mudam o visual do jogo e, por isso, todos funcionam de forma idêntica. A tarefa do jogador é coletar dez custards enquanto evita o Tinky Winky, o único antagonista do jogo. Assim como o Slender Man, os jogadores devem evitar olhar para o Tinky Winky, pois manter contato visual com ele por tempo demais “mata” o jogador, exibindo um pop-up de texto indicando que o jogador “foi pego”. Este jogo tem apenas um mapa.",
      'st1-17': "Quando os jogadores entram em qualquer período do dia, eles passam primeiro por uma sequência de “intermissão”, em que podem começar o jogo apertando E quando quiserem. Durante essa intermissão, os jogadores podem explorar uma seção bem limitada do mapa, sem acesso ao que fica além da área inicial a menos que comecem o jogo.",
      'st1-18': "O jogo também vem com um modo multiplayer, ao contrário da maioria dos jogos de <em>Slender</em> da época; o modo multiplayer é o mais creditado por ter impulsionado o sucesso do <em>Slendytubbies</em>. No entanto, o jogo exigia uma VPN, como o Hamachi, para jogar multiplayer corretamente.",
      'st1-19': "No menu multiplayer, os jogadores podem acessar o modo Competitive, em que os jogadores competem para coletar os custards, cada um com sua própria versão do Tinky Winky perseguindo-os, e o modo Versus, em que o anfitrião da partida joga como o Tinky Winky. Quando um jogador entra na partida, um pop-up de texto aparece no canto superior esquerdo da tela dos jogadores mostrando que “uma vítima indefesa entrou no jogo”.",
      'st1-20': "Os Teletubbies caídos podem ser encontrados em certos locais do mapa: o lago para a Laa-Laa (que se levanta por um momento antes de desabar de cara no chão se o jogador se aproxima dela), a casa para o Dipsy e uma árvore para a Po (que, segundo o Trailer, cometeu suicídio). O Noo-noo também pode ser encontrado na casa ao lado do Dipsy, mas, ao contrário das outras vítimas, ele está com defeito e aspirando em círculos. Várias trombetas de voz também podem ser encontradas pelo mapa, com uma trombeta de easter egg escondida nas montanhas tocando uma <a href=\"https://www.youtube.com/watch?v=ZZ5LpwO-An4\" target=\"_blank\" rel=\"noopener\">música de meme</a>.",
      'st1-21': "Uma opção de personalização está disponível quando o jogador abre o menu do jogo pressionando “<strong>E</strong>”. A personalização fica visível no canto inferior esquerdo do menu. Para personalizar o personagem, clique nele e cole os links das suas skins na parte do corpo desejada. Personalizar o personagem é muito útil ao jogar com mais de duas pessoas, pois permite que os jogadores se distingam uns dos outros.",
      'st1-22': "Alpha",
      'st1-23': "<em>Artigo principal: <a href=\"ST1Alphas.html\">Slendytubbies Alpha</a></em>",
      'st1-24': "Curiosidades",
      'st1-25': "Toda vez que o jogador coleta um Tubby Custard, um áudio é tocado.",
      'st1-26': "A atualização BETA V2 corrigiu o Tinky Winky não conseguir escalar/voar por montanhas ou árvores.",
      'st1-27': "A textura do pelo foi feita com o efeito de esponja do paint.net.",
      'st1-28': "Este é o único jogo da série em que é possível morrer olhando para o inimigo por tempo demais, como no <em>Slender</em> original. Os jogos seguintes e os remakes não permanecem fiéis ao título “Slender”.",
      'st1-29': "De alguma forma, mesmo sendo o primeiro jogo da série, ele é considerado <strong><u>não canônico</u></strong>.",
      'st1-30': "O download do jogo foi removido do site da Zeoworks.",
      'st1-31': "Existiu uma versão com malware, no início de 2013. Infelizmente, ninguém sabe se ela foi arquivada.",
      'st1-32': "Texto por: Slendytubbies Wiki",
      /* ST2.html */
      'st2-1': "<strong>Desenvolvedor:</strong> ZeoWorks",
      'st2-2': "<strong>Engine:</strong> Unity 4 (Unity 5 após as atualizações)",
      'st2-3': "<strong>Plataforma:</strong> Microsoft Windows, OS X",
      'st2-4': "<strong>Lançamento:</strong> 1º de maio de 2014",
      'st2-5': "<strong>Gênero:</strong> Survival Horror, Coleta de Itens",
      'st2-6': "<strong>Idioma:</strong> Inglês, Espanhol",
      'st2-7': "<strong>Canônico:</strong> Parcialmente",
      'st2-8': "<strong>Status:</strong> Login de conta quebrado",
      'st2-9': "<strong>Última versão:</strong> V2.2",
      'st2-10': "<strong>Jogo anterior:</strong> Slendytubbies",
      'st2-11': "<strong>Próximos jogos:</strong> Slendytubbies III (numericamente), Dipsy's Workshop (lançamento)",
      'st2-12': "Ícone",
      'st2-13': "Menu",
      'st2-14': "<em><a href=\"https://zeoworks.com/games/Slendytubbies2.html\" target=\"_blank\" rel=\"noopener\">Slendytubbies II</a></em> (abreviado como <strong><em>S2</em></strong> ou <strong><em>ST2</em></strong>) é a sequência do <em><a href=\"ST1.html\">Slendytubbies</a></em> original. É uma versão muito mais ampla do primeiro jogo, com mecânicas novas e diferentes e vários mapas além do Main Land, que também incluem novas ameaças. O jogo é creditado pela inclusão de novos mapas e inimigos, que se tornariam um elemento fixo da série.",
      'st2-15': "Dizia-se que ele se passava 5 anos depois do jogo original. No entanto, isso foi alterado no <em>Slendytubbies III</em>, tornando este jogo apenas parcialmente canônico.",
      'st2-16': "Jogabilidade",
      'st2-17': "A jogabilidade é parecida com a do <em>Slendytubbies</em> original, mas com uma novidade. Em vez de uma lanterna, os jogadores têm uma câmera de visão noturna combinada com uma lanterna embutida, que pode ser usada com o botão direito do mouse. Versões antigas tinham um limite de tempo para usar a câmera (dez segundos), mas ele foi removido nas versões mais novas.",
      'st2-18': "A novidade do <em>Slendytubbies II</em> é a adição de mapas diferentes, para que as pessoas possam jogar mais do que só o Main Land e seus 3 períodos do dia. Os novos mapas trazem inimigos diferentes, com destaque para os teletubbies individuais além do Tinky Winky.",
      'st2-19': "O comportamento dos inimigos passou por uma grande reformulação; em vez de saberem onde o jogador está logo de cara, eles tentam ativamente proteger os custards dos quais o jogador está mais perto. Quando o inimigo avista o jogador, ele passa a persegui-lo sem parar. Recomenda-se que os jogadores evitem os inimigos a todo custo, pois, se um inimigo avistar o jogador uma vez, ele continuará perseguindo-o até o fim do jogo.",
      'st2-20': "O <em>Slendytubbies II</em> descontinuou a maioria das mecânicas de mapa do <em>Slendytubbies</em> original, como as árvores caindo, as intermissões e outras.",
      'st2-21': "Novidades do <em>Slendytubbies II</em>",
      'st2-22': "O modo Multiplayer usa um novo sistema de Lobby e não exige mais o Hamachi.",
      'st2-23': "Uma câmera de visão noturna com lanterna é usada, em vez de apenas uma lanterna.",
      'st2-24': "Novas animações e texturas para o jogador.",
      'st2-25': "Novos Easter Eggs.",
      'st2-26': "Novos Mapas e Monstros.",
      'st2-27': "Novos Pop-ups.",
      'st2-28': "Novo sistema que permite escolher a quantidade de Custards (de 1 a 25)",
      'st2-29': "<em>Suporte ao Oculus Rift</em>",
      'st2-30': "<em>Suporte ao 3D Anaglyph</em>",
      'st2-31': "Enredo",
      'st2-32': "Este jogo tem um pouco mais de história do que a maioria das pessoas sabe, tendo sido revelada no site da Zeoworks em 2014. Ela pode ser encontrada no <a href=\"https://web.archive.org/web/20140528010617/http://zeoworks.com/misc.php?page=slendytubbiesiienglish\" target=\"_blank\" rel=\"noopener\">WayBackMachine</a>.",
      'st2-33': "A história é narrada assim:",
      'st2-34': "Slendytubbies II continua a história depois do primeiro jogo ‘Slendytubbies’. Cinco longos anos se passaram desde os eventos de teletubby land. Você, o teletubby branco, tem tentado descobrir o que aconteceu. Depois de 5 anos de pesquisa sobre os custards de teletubby que você coletou em teletubby land, você acredita que os custards são geneticamente modificados. Você viaja para teletubby land mais uma vez (que agora está destruída e parecida com um pântano) para coletar mais custards para sua pesquisa, só que desta vez você encontra uma entrada secreta dentro da casa dos teletubbies, que leva a uma passagem desconhecida. Você avança por essa passagem e encontra uma espécie de esconderijo secreto cheio de tecnologia desconhecida. Há mais custards dentro desse esconderijo; você acredita que eles são frescos e guardam a verdade, e tenta coletá-los para a pesquisa. Enquanto faz isso, você encontra indícios de que esse esconderijo cria teletubbies geneticamente e controla teletubby land. Isso explica os alto-falantes desconhecidos que instruem a antiga família de teletubbies sobre o que fazer durante o dia. Você começa a acreditar que o tinkywinky tomou uma dose ruim do custard genético dos teletubbies. Você teme que os teletubbies não nasçam, e sim sejam feitos... e feitos apenas para serem hamsters em uma gaiola. Há apenas uma forma de ter certeza: você precisa coletar todos os custards e descobrir a <strong>verdade</strong>.",
      'st2-35': "Downloads",
      'st2-36': "Todas as versões baixáveis do jogo podem ser encontradas <a href=\"https://archive.org/details/slendytubbies-ii-2014-archive\" target=\"_blank\" rel=\"noopener\">aqui</a>. A página oficial de download do jogo também pode ser encontrada <a href=\"https://zeoworks.com/games/Slendytubbies2.html\" target=\"_blank\" rel=\"noopener\">aqui</a>.",
      'st2-37': "Curiosidades",
      'st2-38': "Na V1.5, havia um bug em que entrar em servidores não funcionava, pois o jogo ficava preso na tela de conexão. Esse bug foi corrigido na V2.0, até os servidores serem desligados antes do lançamento da V2.1.",
      'st2-39': "Na V2.0, havia um bug em que o Tinky Winky ficava completamente parado no TubbyCraft. Isso foi corrigido na versão V2.2.",
      'st2-40': "Desde a V1.5, havia uma exploração que permitia às pessoas gerar monstros pelo Admin Console para incomodar outros jogadores. Essa exploração foi removida na V2.0, mas foi reintegrada usando uma DLL enviada por um YouTuber espanhol. No entanto, isso foi finalmente corrigido na V2.1, junto com a remoção do suporte ao Cheat Engine.",
      'st2-41': "Grande parte dos modelos usados para os inimigos do jogo vieram do <a href=\"https://www.youtube.com/watch?v=5W7S0auCKVc\" target=\"_blank\" rel=\"noopener\">Viral Breakout pack</a>, de <em>bond1</em>, para o <em>FPS Creator</em>.",
      'st2-42': "Por esse pacote ser inspirado em monstros famosos da mídia, esses modelos muitas vezes causaram falsas acusações contra Sean Toman de roubar modelos de outros títulos.",
      'st2-43': "A equipe da ZeoWorks tem acesso ao Admin Console, que permite gerar NPCs, objetos e efeitos. Alguns personagens peculiares também podem ser gerados e estão listados abaixo.",
      'st2-44': "Tinky Tank BIG (uma versão maior do Tinky Tank)",
      'st2-45': "Rick Astley",
      'st2-46': "<a href=\"https://freddy-fazbears-pizza.fandom.com/wiki/Freddy_Fazbear\" target=\"_blank\" rel=\"noopener\">Freddy Fazbear</a>",
      'st2-47': "<a href=\"https://freddy-fazbears-pizza.fandom.com/wiki/Bonnie\" target=\"_blank\" rel=\"noopener\">Bonnie</a>",
      'st2-48': "<a href=\"https://freddy-fazbears-pizza.fandom.com/wiki/Chica\" target=\"_blank\" rel=\"noopener\">Chica</a>",
      'st2-49': "<a href=\"https://freddy-fazbears-pizza.fandom.com/wiki/Foxy\" target=\"_blank\" rel=\"noopener\">Foxy</a>",
      'st2-50': "Texto por: Slendytubbies Wiki"
    }
  };

  var aboutText = { en: '(about it)', pt: '(sobre)' };
  var htmlLang = { en: 'en', pt: 'pt-BR' };
  var languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português (Brasil)' }
  ];

  function getSaved() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return (v === 'en' || v === 'pt') ? v : 'en';
    } catch (e) {
      return 'en';
    }
  }

  function save(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var i18nEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  i18nEls.forEach(function (el) { el.setAttribute('data-en', el.innerHTML); });

  var buttons = [];

  function apply(lang) {
    i18nEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var pt = translations.pt[key];
      el.innerHTML = (lang === 'pt' && pt) ? pt : el.getAttribute('data-en');
    });

    Array.prototype.forEach.call(document.querySelectorAll('.about'), function (el) {
      el.textContent = aboutText[lang];
    });

    document.documentElement.lang = htmlLang[lang];
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function buildSelector() {
    var box = document.createElement('div');
    box.className = 'lang-switch';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', 'Language / Idioma');

    languages.forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = l.label;
      b.setAttribute('data-lang', l.code);
      b.addEventListener('click', function () {
        save(l.code);
        apply(l.code);
      });
      buttons.push(b);
      box.appendChild(b);
    });

    document.body.appendChild(box);
  }

  buildSelector();
  apply(getSaved());
})();