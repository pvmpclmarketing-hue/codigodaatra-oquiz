export interface Option {
  id: string;
  text: string;
}

export interface PageData {
  id: number;
  type: 'intro' | 'hook' | 'question' | 'loading' | 'diagnostic' | 'sales';
  progress?: number;
  title?: string;
  subtitle?: string;
  options?: Option[];
  imageUrl?: string;
}

export const pages: PageData[] = [
  {
    id: 0,
    type: 'intro',
    imageUrl: 'https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 1,
    type: 'hook',
    title: 'Essa pessoa ainda ocupa seus pensamentos, mesmo quando você tenta parar de pensar nela?',
    subtitle: 'Há algo acontecendo entre vocês que vai muito além do que os olhos conseguem ver. Responda com honestidade, pois o que você descobrir aqui pode mudar tudo.',
    options: [
      { id: 'A', text: '🔥 Sim, ela está na minha cabeça o tempo todo, mesmo sem querer' },
      { id: 'B', text: '💭 Às vezes, mas sinto que estou perdendo a conexão com ela' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80'
  },
  {
    id: 2,
    type: 'question',
    progress: 15,
    title: 'Como essa pessoa tem se comportado com você ultimamente?',
    subtitle: 'Preste atenção nos padrões, eles revelam muito mais do que as palavras. Escolha a opção que mais se aproxima do que você está vivendo agora.',
    options: [
      { id: 'A', text: '📵 Sumiu quase que completamente, as mensagens ficaram raras ou pararam' },
      { id: 'B', text: '🧊 Ainda está presente, mas algo esfriou. A energia entre nós mudou' },
      { id: 'C', text: '🔄 Sopra frio e quente, às vezes parece próxima, depois some de novo' },
      { id: 'D', text: '😶 Continua na minha vida, mas parece distante mesmo quando estamos juntos' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=800&q=80'
  },
  {
    id: 3,
    type: 'question',
    progress: 30,
    title: 'Quando você percebe esse distanciamento, o que acontece dentro de você?',
    subtitle: 'Não existe resposta certa ou errada aqui. O que importa é a sua verdade, porque é exatamente nesse ponto que o bloqueio costuma se esconder.',
    options: [
      { id: 'A', text: '😰 Fico ansiosa(o) e começo a analisar cada detalhe, tentando entender o que mudou' },
      { id: 'B', text: '🫥 Me afasto também para me proteger, mas por dentro estou destruída(o)' },
      { id: 'C', text: '🔁 Fico em loop: ora aceito, ora não consigo largar. É uma batalha constante' },
      { id: 'D', text: '🤐 Seguro tudo pra mim mesma(o), sem conseguir falar sobre isso com ninguém' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80'
  },
  {
    id: 4,
    type: 'question',
    progress: 42,
    title: 'Como costuma ser a comunicação entre vocês quando as coisas ficam tensas?',
    subtitle: 'A forma como nos comunicamos, ou deixamos de comunicar, pode criar "fugas de energia" que enfraquecem a conexão sem que nenhum dos dois perceba. Qual dessas situações soa familiar?',
    options: [
      { id: 'A', text: '🗣️ Eu falo demais tentando resolver, e ela parece se fechar ainda mais' },
      { id: 'B', text: '🔕 Os dois ficam em silêncio, ninguém sabe como começar' },
      { id: 'C', text: '🎭 Conversamos sobre tudo, menos sobre o que realmente importa' },
      { id: 'D', text: '📲 A comunicação virou superficial, com respostas curtas e sem profundidade' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80'
  },
  {
    id: 5,
    type: 'question',
    progress: 55,
    title: 'Vou ser direta com você agora.\n\nDe todos os sentimentos que essa situação desperta… qual dói mais fundo?',
    subtitle: 'Esta é a pergunta mais importante do quiz. O que você escolher aqui vai determinar qual bloqueio vibracional está agindo sobre a sua conexão com essa pessoa.',
    options: [
      { id: 'A', text: '💔 A sensação de que, por mais que eu faça, nunca é suficiente para ela ficar' },
      { id: 'B', text: '🫙 O silêncio, não saber o que ela pensa e imaginar o pior' },
      { id: 'C', text: '🪞 A dúvida sobre mim mesma(o). Será que fiz algo errado? Sou eu o problema?' },
      { id: 'D', text: '🌊 A impotência de sentir que perdi o controle sobre algo que importa muito pra mim' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=800&q=80'
  },
  {
    id: 6,
    type: 'question',
    progress: 65,
    title: 'Você já sentiu um muro invisível entre vocês, mesmo quando estavam no mesmo espaço?',
    subtitle: 'Não é imaginação sua. Há um fenômeno real, estudado pela física quântica e pela teoria dos Campos Morfogenéticos, que cria barreiras energéticas entre duas pessoas que já tiveram uma conexão intensa.\n\nQual dessas sensações você já experimentou?',
    options: [
      { id: 'A', text: '🧱 Sim, tentei me aproximar e havia uma resistência que não conseguia explicar' },
      { id: 'B', text: '🌫️ É como se ela estivesse presente fisicamente, mas completamente ausente em energia' },
      { id: 'C', text: '📡 Sinto que nossa "frequência" desalinhou. Antes havia fluidez, agora há ruído' },
      { id: 'D', text: '🤔 Nunca tinha pensado assim, mas agora que você disse… faz muito sentido' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80'
  },
  {
    id: 7,
    type: 'question',
    progress: 72,
    title: 'Desde que esse distanciamento começou… ela aparece nos seus sonhos, nos seus pensamentos do nada, ou você vê coisas que te lembram dela em momentos completamente aleatórios?',
    subtitle: 'Isso tem um nome. A física quântica chama de "entrelaçamento de partículas", onde duas energias que já se tocaram permanecem conectadas independentemente da distância física ou emocional.\n\nO que você experiencia com mais frequência?',
    options: [
      { id: 'A', text: '🌙 Ela aparece nos meus sonhos com uma frequência que não consigo ignorar' },
      { id: 'B', text: '⚡ Penso nela de repente, sem motivo, e logo depois recebo uma mensagem ou notícia dela' },
      { id: 'C', text: '🪄 Vejo números, músicas ou lugares que me lembram dela em momentos aleatórios' },
      { id: 'D', text: '🫀 Sinto fisicamente quando ela está pensando em mim, uma sensação no peito inexplicável' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&q=80'
  },
  {
    id: 8,
    type: 'question',
    progress: 80,
    title: 'Você já tentou agir para reconquistar essa pessoa e sentiu que algo misterioso bloqueava o resultado?',
    subtitle: 'Como se cada tentativa certa produzisse o efeito errado. Isso não é azar. É o Campo Morfogenético entre vocês operando em frequência de bloqueio, e só é possível sentir, nunca ver.\n\nQual das situações abaixo soa mais familiar?',
    options: [
      { id: 'A', text: '🔄 Tentei me aproximar com carinho e ela se afastou mais, como se eu a repelisse' },
      { id: 'B', text: '🤫 Me afastei de propósito esperando que ela viesse, e ela simplesmente não veio' },
      { id: 'C', text: '📝 Mandei a mensagem certa, na hora certa, e mesmo assim não teve o efeito esperado' },
      { id: 'D', text: '😮💨 Fiz tudo que me disseram para fazer e nada funcionou, há algo maior agindo aqui' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
  },
  {
    id: 9,
    type: 'question',
    progress: 88,
    title: 'Uma última pergunta, e ela é a mais importante de todas.',
    subtitle: 'Se existisse uma forma comprovada de desbloquear essa frequência e fazer com que essa pessoa sentisse uma atração magnética e genuína por você novamente… qual seria o seu nível de comprometimento para colocar isso em prática?',
    options: [
      { id: 'A', text: '✨ Estou pronta(o) e farei o que for necessário para reconectar com essa pessoa' },
      { id: 'B', text: '🔥 Estou totalmente determinada(o), esse bloqueio vai ser quebrado, custe o que custar' },
      { id: 'C', text: '💫 Estou aberta(o) e disposta(o), quero tentar mesmo que ainda haja dúvidas' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80'
  },
  {
    id: 10,
    type: 'loading',
    progress: 95,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
  },
  {
    id: 11,
    type: 'diagnostic',
    progress: 100,
    imageUrl: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80'
  },
  {
    id: 12,
    type: 'sales',
    imageUrl: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800&q=80'
  }
];
