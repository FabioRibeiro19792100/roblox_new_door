import { useEffect, useMemo, useState } from "react";
import AnimatedLogo from "../index.jsx";

const promoVideo = new URL("../Plugin Caxoro laramja-low.mp4", import.meta.url).href;
const expeditionLogo = new URL("../logo-expedicao-colorido (1).png", import.meta.url).href;

const JAM_END = new Date("2026-04-24T23:59:59-03:00");
const CIDADES_EVENTO = ["sp", "rj", "recife", "poa", "manaus", "brasilia"];

const JORNADAS = {
  jam: {
    color: "#F5B731",
    colorD: "#D4992A",
    colorL: "#FEF3D7",
    url: "expedicaoroblox.com.br/jam",
    label: "Game Jam",
    navTag: "🏆 Game Jam",
    pnSub: "Game Jam",
    pnDate: "Encerra 24 / 04",
    pnCtaTxt: "Entrar na Jam →",
    showCountdown: false,
    heroEy: "Expedição Roblox · Game Jam",
    heroH1: ["Destrave seu talento,", "crie experiências incríveis"],
    heroH1ac: "e concorra a prêmios.",
    heroDesc:
      "A Game Jam é o momento de transformar sua ideia em game. <strong>Você pode começar do zero e tirar sua ideia do papel.</strong>",
    heroCtaTxt: "Entre na comunidade para participar",
    heroTarget: "community",
    whyTitle: "Participar é simples",
    why: [
      {
        title: "Criação visual desde o começo",
        sub: "Roblox Studio é visual. Arrasta, encaixa, testa. Como Lego. Sua ideia vira um game real.",
      },
      {
        title: "Começa do zero hoje",
        sub: "Baixa o Studio grátis, entra no Discord e já tem mentores prontos.",
      },
      {
        title: "Você cria com companhia",
        sub: "Outros criadores no mesmo momento. Dúvida? Alguém responde.",
      },
      {
        title: "10.000 Robux de prêmio",
        sub: "Real. Mas o mais valioso é seu game publicado no Roblox, feito por você.",
      },
    ],
    nextTitle: "Próximo passo",
    nextCards: [
      {
        primary: true,
        title: "Baixar Roblox Studio",
        sub: "Grátis. PC ou Mac. Em minutos criando.",
        btn: "⬇ Baixar agora",
        action: "studio",
        helpBtn: "Saiba mais",
        helpAction: "studio-help",
      },
      {
        primary: false,
        title: "Prefere continuar no celular?",
        sub: "Eu te mando o link do app de criação mobile para abrir no seu celular e continuar por lá.",
        btn: "Enviar link para o celular",
        action: "app",
        helpBtn: "Saiba mais",
        helpAction: "app-help",
      },
    ],
    mobileNextCards: [
      {
        primary: true,
        title: "App de criação mobile",
        sub: "Cria pelo celular. Salva e ativa no Studio depois.",
        btn: "→ Abrir app",
        action: "app",
        helpBtn: "Saiba mais",
        helpAction: "app-help",
      },
      {
        primary: false,
        title: "Receber link do Studio",
        sub: "Te mandamos o link quando estiver no PC.",
        btn: "Receber por email",
        action: "email",
        hasEmail: true,
        helpBtn: "Saiba mais",
        helpAction: "email-help",
      },
    ],
    bctaTitle: "Pronto pra criar?",
    bctaAc: "Entra na Jam.",
    bctaSub: "",
    bctaBtn: "Entre na comunidade para participar",
    bctaTarget: "community",
    fabColor: "#F5B731",
    questions: [
      {
        text: "Você sabe o que é uma Game Jam?",
        opts: ["Sim, sei bem", "Mais ou menos", "Não sei"],
      },
      {
        text: "Já criou algo no Roblox antes?",
        opts: ["Sim, já criei", "Nunca criei nada", "Tentei mas travei"],
      },
      {
        text: "Em qual cidade você mora?",
        opts: [
          "São Paulo",
          "Rio de Janeiro",
          "Recife",
          "Porto Alegre",
          "Manaus",
          "Brasília",
          "Outra cidade",
        ],
        cidade: true,
      },
    ],
    explain: {
      title: "O que acontece quando você entra no Discord:",
      items: [
        "Você entra na comunidade da Expedição Roblox",
        "Apresenta sua ideia de game",
        "Recebe orientação para baixar o Studio e começar",
        "Acompanha outros criadores e tira dúvidas",
        "Submete seu game até 24/04 e concorre a 10.000 Robux",
      ],
      btn: "Entre na comunidade para participar →",
      target: "redirect-community",
    },
    explainStudio: {
      title: "O que acontece se você começar pelo Studio:",
      items: [
        "Você baixa o Roblox Studio no PC ou Mac",
        "Começa a criar com mais recursos e mais controle",
        "Testa sua ideia com mais liberdade desde o começo",
        "Quando estiver confortável, entra na comunidade da Jam",
        "Publica seu game e segue para a submissao",
      ],
      btn: "Baixar Studio agora →",
      target: "redirect-studio",
    },
    explainApp: {
      title: "O que acontece se você começar pelo app:",
      items: [
        "Você abre o app de criacao mobile direto no celular",
        "Testa sua ideia e aprende a logica de criacao sem esperar um PC",
        "Salva o progresso para continuar depois",
        "Quando tiver acesso a um computador, ativa no Studio",
        "Depois segue para a comunidade da Jam para evoluir e submeter",
      ],
      btn: "Abrir app agora →",
      target: "redirect-app",
    },
  },
  expo: {
    color: "#5BB8E8",
    colorD: "#3A9ACC",
    colorL: "#E8F6FD",
    url: "expedicaoroblox.com.br/evento",
    label: "Expedição",
    navTag: "🗺️ Expedição Presencial",
    pnSub: "Expedição",
    pnDate: "SP · RJ · REC · POA · MAN · BSB",
    pnCtaTxt: "Garantir vaga →",
    showCountdown: false,
    heroEy: "Expedição Roblox · Evento Presencial",
    heroH1: ["Aprenda a criar", "experiências digitais."],
    heroH1ac: "Na prática. Com especialistas.",
    heroDesc:
      "Um evento presencial nas capitais brasileiras. Você aprende a criar games com Roblox Studio guiado por profissionais de educação, tecnologia e games. <strong>E conecta essa habilidade com o mercado.</strong>",
    heroCtaTxt: "Garantir minha vaga",
    whyTitle: "O que acontece no evento",
    why: [
      {
        title: "Criação guiada por profissionais",
        sub: "Educadores, desenvolvedores e profissionais de games te guiam do zero ao game publicado.",
      },
      {
        title: "Habilidade + mercado",
        sub: "Mais do que criar: você entende como essa habilidade se conecta com oportunidades reais.",
      },
      {
        title: "Uso ético e seguro",
        sub: "Você aprende sobre criação responsável, privacidade e segurança no ambiente digital.",
      },
      {
        title: "Comunidade real",
        sub: "Você vai com pessoas da sua cidade e sai com uma rede de criadores.",
      },
    ],
    nextTitle: "Como participar",
    nextCards: [
      {
        primary: true,
        title: "Quero me inscrever",
        sub: "Abra a inscrição e escolha a cidade com vaga disponível.",
        btn: "→ Abrir inscrição",
        action: "evento",
      },
      {
        primary: false,
        title: "Ficou com dúvida?",
        sub: "Abra o chat e fale com o guia para entender inscrição, autorização e vaga.",
        btn: "Abrir chat",
        action: "chat",
      },
    ],
    mobileNextCards: [
      {
        primary: true,
        title: "Quero me inscrever",
        sub: "Abra a inscrição e veja a cidade com vaga disponível.",
        btn: "→ Abrir inscrição",
        action: "evento",
      },
      {
        primary: false,
        title: "Ficou com dúvida?",
        sub: "Abra o chat e fale com o guia para entender inscrição e vaga.",
        btn: "Abrir chat",
        action: "chat",
      },
    ],
    bctaTitle: "Pronto pra se inscrever?",
    bctaAc: "Vagas limitadas.",
    bctaSub: "Evento presencial nas capitais brasileiras",
    bctaBtn: "Garantir minha vaga",
    bctaTarget: "evento",
    fabColor: "#5BB8E8",
    questions: [
      {
        text: "Em qual cidade você mora?",
        opts: [
          "São Paulo",
          "Rio de Janeiro",
          "Recife",
          "Porto Alegre",
          "Manaus",
          "Brasília",
          "Outra cidade",
        ],
        cidade: true,
      },
      {
        text: "Você já cria algo no Roblox ou está começando do zero?",
        opts: ["Já crio", "Estou começando", "Nunca tentei"],
      },
      {
        text: "O que mais te interessa no evento?",
        opts: [
          "Aprender a criar games",
          "Conectar com o mercado",
          "Conhecer outros criadores",
          "Entender uso ético e seguro",
        ],
      },
    ],
    explain: {
      title: "O que acontece para garantir sua vaga:",
      items: [
        "Escolha sua capital e a data disponível",
        "Preencha o formulário de inscrição",
        "Envie a autorização assinada pelo seu responsável",
        "Confirme sua vaga por email",
        "Apareça no dia com vontade de criar",
      ],
      btn: "Garantir minha vaga →",
      target: "redirect-evento",
    },
  },
  aprender: {
    color: "#E63946",
    colorD: "#C02530",
    colorL: "#FDEAEB",
    url: "expedicaoroblox.com.br/criar",
    label: "Aprender",
    navTag: "🎮 Aprender a Criar",
    pnSub: "Aprender",
    pnDate: "Grátis · PC e Mobile",
    pnCtaTxt: "Começar agora →",
    showCountdown: false,
    heroEy: "Expedição Roblox · Criação",
    heroH1: ["Crie seu primeiro", "game no Roblox."],
    heroH1ac: "Do zero. No seu ritmo.",
    heroDesc:
      "Baixe o Roblox Studio, instale nosso plugin com tutoriais e comece a criar. No celular, use nosso emulador mobile. <strong>Você aprende criando em cada etapa.</strong>",
    heroCtaTxt: "Começar a criar",
    whyTitle: "Como funciona",
    why: [
      {
        title: "Perfeito para começar",
        sub: "O Studio é visual e intuitivo. Nosso plugin guia cada passo com tutoriais interativos.",
      },
      {
        title: "PC ou celular",
        sub: "No PC: Roblox Studio + plugin. No celular: emulador mobile que salva e ativa no Studio depois.",
      },
      {
        title: "Você aprende criando",
        sub: "Sem teoria antes de praticar. Cada tutorial termina com algo real publicado no Roblox.",
      },
      {
        title: "No seu ritmo",
        sub: "Sem prazo, sem pressão. Você avança conforme aprende e quando estiver pronto, pode entrar na Jam.",
      },
    ],
    nextTitle: "Por onde começar",
    nextCards: [
      {
        primary: true,
        title: "Quero criar no PC",
        sub: "Baixe o Roblox Studio com o plugin de tutoriais e comece pelo caminho mais completo.",
        btn: "⬇ Baixar Studio + Plugin",
        action: "studio",
        helpBtn: "Saiba mais",
        helpAction: "studio-help",
      },
      {
        primary: false,
        title: "Prefere continuar no celular?",
        sub: "Eu te mando o link do emulador mobile para abrir no seu celular e continuar por lá.",
        btn: "Enviar link para o celular",
        action: "app",
        helpBtn: "Saiba mais",
        helpAction: "app-help",
      },
    ],
    mobileNextCards: [
      {
        primary: true,
        title: "Quero começar no celular",
        sub: "Crie agora no mobile e continue no Studio depois, quando tiver um PC.",
        btn: "→ Abrir emulador mobile",
        action: "app",
        helpBtn: "Saiba mais",
        helpAction: "app-help",
      },
      {
        primary: false,
        title: "Quero criar no PC",
        sub: "Baixe o Studio com o plugin de tutoriais para seguir pelo caminho completo.",
        btn: "⬇ Baixar Studio + Plugin",
        action: "studio",
        helpBtn: "Saiba mais",
        helpAction: "studio-help",
      },
    ],
    bctaTitle: "Comece a criar hoje.",
    bctaAc: "É grátis.",
    bctaSub: "Studio + Plugin · Emulador mobile · No seu ritmo",
    bctaBtn: "Escolher por onde começar",
    fabColor: "#E63946",
    questions: [
      {
        text: "Você vai acessar pelo celular ou pelo PC?",
        opts: ["Pelo celular", "Pelo PC ou Mac", "Tenho os dois"],
      },
      {
        text: "Você já jogou Roblox antes?",
        opts: ["Jogo até hoje", "Jogava antes, parei", "Nunca joguei"],
      },
      {
        text: "Já tentou criar algo no Roblox?",
        opts: ["Sim, já criei", "Nunca tentei", "Tentei mas travei"],
      },
    ],
    explain: {
      title: "O que acontece quando você começa:",
      items: [
        "Você baixa o Roblox Studio grátis (PC) ou abre o emulador mobile",
        "Instala nosso plugin com tutoriais interativos dentro do Studio",
        "Cada tutorial termina com algo real publicado no Roblox",
        "Você avança no seu ritmo, sem prazo nem pressão",
        "Quando estiver pronto, pode entrar na Game Jam e concorrer a 10.000 Robux",
      ],
      btn: "Começar a criar agora →",
    },
    explainStudio: {
      title: "O que acontece no Studio:",
      items: [
        "Você baixa o Roblox Studio no PC ou Mac",
        "Instala o plugin com tutoriais interativos",
        "Começa a criar com o caminho mais completo",
        "Publica algo real enquanto aprende",
        "Quando quiser, pode entrar na Game Jam",
      ],
      btn: "Baixar Studio + Plugin →",
      target: "redirect-studio",
    },
    explainApp: {
      title: "O que acontece no emulador mobile:",
      items: [
        "Você começa a criar direto pelo celular",
        "Testa ideias e aprende a lógica de criação",
        "Salva seu progresso para continuar depois",
        "Quando tiver acesso a um PC, ativa no Studio",
        "Depois pode seguir para a Game Jam",
      ],
      btn: "Abrir emulador mobile →",
      target: "redirect-app",
    },
  },
};

const cityMap = {
  "São Paulo": "sp",
  "Rio de Janeiro": "rj",
  Recife: "recife",
  "Porto Alegre": "poa",
  Manaus: "manaus",
  Brasília: "brasilia",
  Brasilia: "brasilia",
};

const initialChat = () => ({
  msgs: [],
  open: false,
  answered: [],
  cidade: null,
  explanation: null,
  flow: "general",
  collectEmailFor: null,
  introSeen: false,
});

function App() {
  const [currentJ, setCurrentJ] = useState("jam");
  const [autoDevice, setAutoDevice] = useState("d");
  const [previewDevice, setPreviewDevice] = useState(null);
  const [fontMode, setFontMode] = useState("default");
  const [chatState, setChatState] = useState({ D: initialChat(), M: initialChat() });
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(getCountdown());
  const [hasStarted, setHasStarted] = useState(false);
  const [mockDestination, setMockDestination] = useState(null);
  const [pendingRedirect, setPendingRedirect] = useState(null);
  const [deviceIntro, setDeviceIntro] = useState(null);
  const [sitePromptDismissed, setSitePromptDismissed] = useState({ D: false, M: false });

  const jornada = useMemo(() => JORNADAS[currentJ], [currentJ]);
  const currentDevice = previewDevice || autoDevice;
  const isPreviewingMobileOnDesktop = autoDevice === "d" && currentDevice === "m";

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const syncDevice = () => {
      setAutoDevice(window.innerWidth <= 768 ? "m" : "d");
    };

    syncDevice();
    window.addEventListener("resize", syncDevice);
    return () => window.removeEventListener("resize", syncDevice);
  }, []);

  useEffect(() => {
    setChatState({
      D: startAnamnese({ ...initialChat(), open: true }, currentJ),
      M: startAnamnese({ ...initialChat(), open: true }, currentJ),
    });
    setEmail("");
    setSitePromptDismissed({ D: false, M: false });
    window.scrollTo(0, 0);
  }, [currentJ]);

  useEffect(() => {
    if (!deviceIntro) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      if (deviceIntro.mode === "start") {
        setCurrentJ(deviceIntro.journeyKey);
        setPreviewDevice(deviceIntro.deviceMode);
        setHasStarted(true);
      } else {
        setPreviewDevice(deviceIntro.deviceMode);
      }
      setDeviceIntro(null);
    }, 1900);

    return () => window.clearTimeout(timer);
  }, [deviceIntro]);

  function toggleChat(id) {
    setChatState((prev) => {
      const wasOpen = prev[id].open;
      const next = { ...prev };
      const state = prev[id];
      const isOnlyIntro =
        state.flow === "general" &&
        state.msgs.length === 1 &&
        state.msgs[0]?.target === "general-intro";

      if (wasOpen) {
        next[id] = {
          ...(isOnlyIntro ? { ...initialChat(), introSeen: true } : state),
          open: false,
        };
      } else {
        const shouldResumeGeneral = state.flow === "general" && state.msgs.length > 0;

        if (shouldResumeGeneral) {
          next[id] = {
            ...state,
            open: true,
          };
        } else {
          next[id] = startAnamnese(
            {
              ...initialChat(),
              open: true,
              introSeen: state.introSeen,
            },
            currentJ,
            !state.introSeen
          );
        }
      }

      return next;
    });
  }

  function answerQ(id, idx, opt, isCidade) {
    const jd = JORNADAS[currentJ];
    setChatState((prev) => {
      const state = prev[id];
      const answered = [...state.answered, { idx, opt }];
      const msgs = [
        ...state.msgs,
        {
          type: "user",
          text: opt,
        },
      ];
      const nextState = {
        ...state,
        answered,
        cidade: isCidade ? cityMap[opt] || "outra" : state.cidade,
        msgs,
      };

      const nextIdx = idx + 1;

      if (nextIdx < jd.questions.length) {
        if (
          currentJ === "jam" &&
          idx === 0 &&
          (opt === "Mais ou menos" || opt === "Não sei")
        ) {
          nextState.msgs = [
            ...nextState.msgs,
            {
              type: "ai",
              text: "Uma Game Jam é uma competição onde você cria um game do zero em um prazo. A nossa tem 10.000 Robux em prêmios e termina em 24/04.",
            },
            questionMessage(jd.questions[nextIdx], nextIdx),
          ];
        } else {
          nextState.msgs = [...nextState.msgs, questionMessage(jd.questions[nextIdx], nextIdx)];
        }
      } else {
        nextState.msgs = [...nextState.msgs, resultMessage(currentJ, answered, nextState.cidade)];
      }

      nextState.explanation = null;
      return {
        ...prev,
        [id]: nextState,
      };
    });
  }

  function handleChoice(id, target, explain) {
    if (target === "continue-general") {
      setChatState((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          flow: "general",
          introSeen: true,
          msgs: [
            {
              type: "highlight",
              text: "Em 4 ou 5 perguntas eu entendo seu momento e te indico a melhor opção disponível para você agora.",
            },
            questionMessage(JORNADAS[currentJ].questions[0], 0),
          ],
        },
      }));
      return;
    }

    if (target === "browse-journey") {
      setChatState((prev) => ({
        ...prev,
        [id]: {
          ...initialChat(),
          open: false,
          flow: "general",
          introSeen: true,
        },
      }));
      return;
    }

    if (target === "goto-jam") {
      setCurrentJ("jam");
      return;
    }

    if (target === "goto-expo") {
      setCurrentJ("expo");
      return;
    }

    if (target === "goto-aprender") {
      setCurrentJ("aprender");
      return;
    }

    setChatState((prev) => {
      const state = prev[id];

      const contextualResult = contextualChoiceMessage(currentJ, target);
      if (contextualResult) {
        return {
          ...prev,
          [id]: {
            ...state,
            msgs: [...state.msgs, contextualResult],
            explanation: null,
          },
        };
      }

      if (target === "explain-studio" && JORNADAS[currentJ].explainStudio) {
        return {
          ...prev,
          [id]: {
            ...state,
            explanation: JORNADAS[currentJ].explainStudio,
          },
        };
      }

      if (target === "explain-app" && JORNADAS[currentJ].explainApp) {
        return {
          ...prev,
          [id]: {
            ...state,
            explanation: JORNADAS[currentJ].explainApp,
          },
        };
      }

      if (target === "explain-evento" && JORNADAS[currentJ].explain) {
        return {
          ...prev,
          [id]: {
            ...state,
            explanation: JORNADAS[currentJ].explain,
          },
        };
      }

      if (target === "redirect-community") {
        setPendingRedirect("community");
        return prev;
      }

      if (target === "redirect-studio") {
        if (id === "M") {
          return {
            ...prev,
            [id]: {
              ...state,
              explanation: null,
              collectEmailFor: "studio",
              msgs: [
                ...state.msgs,
                {
                  type: "ai",
                  text: "Como você está no celular, eu posso te mandar o link do Studio + Plugin por email para você abrir depois no PC ou Mac.",
                },
              ],
            },
          };
        }
        setPendingRedirect("studio");
        return prev;
      }

      if (target === "redirect-app") {
        if (id === "D") {
          return {
            ...prev,
            [id]: {
              ...state,
              explanation: null,
              collectEmailFor: "app",
              msgs: [
                ...state.msgs,
                {
                  type: "ai",
                  text: "Como você está no desktop, eu posso te mandar o link do app de criação mobile por email para você abrir depois no seu celular.",
                },
              ],
            },
          };
        }
        setPendingRedirect("app");
        return prev;
      }

      if (target === "redirect-evento") {
        setPendingRedirect("evento");
        return prev;
      }

      if (target === "explain-jam" && JORNADAS[currentJ].explain) {
        return {
          ...prev,
          [id]: {
            ...state,
            explanation: JORNADAS[currentJ].explain,
          },
        };
      }

      const followUps = {
        "fechar-duvida-email":
          "Perfeito. Quando quiser, é só preencher o campo e eu te mando o link.",
        treinar:
          "Para treinar, baixe o Roblox Studio grátis (PC) ou abra o emulador mobile. Nosso plugin tem tutoriais interativos. Quando estiver pronto, a Jam te espera.",
        espera:
          "Vamos te colocar na lista de espera e avisar quando tiver vagas na sua região. <span style=\"opacity:.4;font-size:11px\">(link real aqui)</span>",
        jam:
          "Mandando você para a Game Jam! Entra no Discord e começa a criar. <span style=\"opacity:.4;font-size:11px\">(link real aqui)</span>",
      };

      return {
        ...prev,
        [id]: {
          ...state,
          msgs: [
            ...state.msgs,
            {
              type: "ai",
              text: followUps[target] || "Redirecionando...",
              html: true,
            },
          ],
          explanation: null,
        },
      };
    });
  }

  function restartChat(id) {
    setChatState((prev) => ({
      ...prev,
      [id]: startAnamnese(initialChat(), currentJ),
    }));
  }

  function closeExplanation(id) {
    setChatState((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        explanation: null,
      },
    }));
  }

  function saveEmail(chatId = currentDevice === "d" ? "D" : "M") {
    if (!email.trim()) {
      return;
    }
    const target = chatState[chatId].collectEmailFor;
    const message =
      target === "app"
        ? `Anotado! O link do app chega em <strong>${email.trim()}</strong> para você abrir no celular.`
        : `Anotado! O link do Studio chega em <strong>${email.trim()}</strong> quando você estiver no PC.`;
    setChatState((prev) => ({
      ...prev,
      [chatId]: {
        ...prev[chatId],
        collectEmailFor: null,
        msgs: [...prev[chatId].msgs, { type: "ai", text: message, html: true }],
      },
    }));
    setEmail("");
  }

  function handleCardAction(action, isMobile) {
    const id = isMobile ? "M" : "D";
    const focusedMessage = cardFocusMessage(currentJ, action);

    if (isMobile && action === "studio") {
      setChatState((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          open: true,
          answered: [],
          cidade: null,
          explanation: null,
          flow: action,
          collectEmailFor: "studio",
          msgs: [
            {
              type: "ai",
              text: "Como você está no celular, eu posso te mandar o link do Studio + Plugin por email para você abrir depois no PC ou Mac.",
            },
          ],
        },
      }));
      return;
    }

    if (action === "community" || action === "studio" || action === "app") {
      setPendingRedirect(action);
      return;
    }

    if (focusedMessage) {
      setChatState((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          open: true,
          answered: [],
          cidade: null,
          explanation: null,
          flow: action,
          msgs: [focusedMessage],
        },
      }));
      return;
    }

    if (action === "chat") {
      toggleChat(id);
      return;
    }

    if (action === "email") {
      setChatState((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          open: true,
          answered: [],
          cidade: null,
          explanation: null,
          flow: action,
          msgs: [
            {
              type: "options",
              text: "Se você está no celular agora, este card guarda o link do Studio para você abrir depois no PC ou Mac. Você pode preencher o email no próprio campo do card ou tirar uma dúvida rápida aqui.",
              choices: [
                { action: "Entendi, vou deixar meu email", target: "fechar-duvida-email" },
                { action: "Ver caminho mobile", target: "duvida-app" },
              ],
            },
          ],
        },
      }));
    }
  }

  function handleStart(journeyKey, deviceMode) {
    setDeviceIntro({ mode: "start", journeyKey, deviceMode });
  }

  function handleDevicePreviewChange(deviceMode) {
    if (deviceMode === currentDevice) {
      return;
    }

    setDeviceIntro({ mode: "switch", deviceMode });
  }

  if (deviceIntro) {
    return <DeviceIntroScreen deviceMode={deviceIntro.deviceMode} />;
  }

  if (!hasStarted) {
    return <JourneyEntry onSelect={handleStart} autoDevice={autoDevice} />;
  }

  if (pendingRedirect) {
    return (
      <RedirectConfirmScreen
        destination={pendingRedirect}
        onConfirm={() => {
          setMockDestination(pendingRedirect);
          setPendingRedirect(null);
        }}
        onCancel={() => setPendingRedirect(null)}
      />
    );
  }

  if (mockDestination) {
    return <MockDestinationScreen destination={mockDestination} onBack={() => setMockDestination(null)} />;
  }

  return (
    <div className={fontMode === "inter" ? "font-mode-inter" : ""}>
      <div className="shell-nav">
        <div className="nav-row nav-topline">
          {Object.entries(JORNADAS).map(([key, value]) => (
            <button
              key={key}
              className={`jbtn ${currentJ === key ? "on" : ""}`}
              data-j={key}
              onClick={() => setCurrentJ(key)}
            >
              <span className="nav-btn-inner">
                <TopJourneyIcon journeyKey={key} />
                <span>{value.label}</span>
              </span>
            </button>
          ))}
          <div className="nav-device-box">
            <button
              className={`stbtn ${currentDevice === "d" ? "on" : ""}`}
              onClick={() => handleDevicePreviewChange("d")}
            >
              <span className="nav-btn-inner">
                <TopDeviceIcon device="desktop" />
                <span>Desktop</span>
              </span>
            </button>
            <button
              className={`stbtn ${currentDevice === "m" ? "on" : ""}`}
              onClick={() => handleDevicePreviewChange("m")}
            >
              <span className="nav-btn-inner">
                <TopDeviceIcon device="mobile" />
                <span>Mobile</span>
              </span>
            </button>
          </div>
          <div className="nav-font-box">
            <button
              className={`stbtn ${fontMode === "default" ? "on" : ""}`}
              onClick={() => setFontMode("default")}
            >
              Atual
            </button>
            <button
              className={`stbtn ${fontMode === "inter" ? "on" : ""}`}
              onClick={() => setFontMode("inter")}
            >
              Inter
            </button>
          </div>
          <Mascot className="nav-mascot" color={jornada.color} />
        </div>
      </div>

      <div className={`view ${currentDevice === "d" ? "on" : ""}`}>
        <div className="frames">
          <div className="frame-wrap on">
            <div className="browser">
              <div className="browser-bar">
                <div className="bdots">
                  <div className="bdot r" />
                  <div className="bdot y" />
                  <div className="bdot g" />
                </div>
                <div className="burl">{jornada.url}</div>
              </div>
              <div className="browser-body">
                <PageContent
                  jornada={jornada}
                  countdown={countdown}
                  isMobile={false}
                  email={email}
                  setEmail={setEmail}
                  saveEmail={saveEmail}
                  onCardAction={handleCardAction}
                  onPrimaryAction={setPendingRedirect}
                  showSitePrompt={!sitePromptDismissed.D}
                  onDismissSitePrompt={() =>
                    setSitePromptDismissed((prev) => ({ ...prev, D: true }))
                  }
                />
              </div>
              <ChatWidget
                id="D"
                jornada={jornada}
                state={chatState.D}
                email={email}
                setEmail={setEmail}
                saveEmail={saveEmail}
                toggleChat={toggleChat}
                answerQ={answerQ}
                handleChoice={handleChoice}
                restartChat={restartChat}
                closeExplanation={closeExplanation}
              />
              <div className={`frame-blur ${chatState.D.open ? "on" : ""}`} />
            </div>
          </div>
        </div>
      </div>

      <div className={`view ${currentDevice === "m" ? "on" : ""}`}>
        <div className="phone-wrap">
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-body">
              <div className="phone-scroll">
                <PageContent
                  jornada={jornada}
                  countdown={countdown}
                  isMobile
                  email={email}
                  setEmail={setEmail}
                  saveEmail={saveEmail}
                  onCardAction={handleCardAction}
                  onPrimaryAction={setPendingRedirect}
                  showSitePrompt={!sitePromptDismissed.M}
                  onDismissSitePrompt={() =>
                    setSitePromptDismissed((prev) => ({ ...prev, M: true }))
                  }
                />
              </div>
              <ChatWidget
                id="M"
                jornada={jornada}
                state={chatState.M}
                email={email}
                setEmail={setEmail}
                saveEmail={saveEmail}
                toggleChat={toggleChat}
                answerQ={answerQ}
                handleChoice={handleChoice}
                restartChat={restartChat}
                closeExplanation={closeExplanation}
                mobile
              />
              <div className={`frame-blur ${chatState.M.open ? "on" : ""}`} />
            </div>
            <div className="phone-hbar">
              <div className="phone-hb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeviceIntroScreen({ deviceMode }) {
  return (
    <div className="device-intro-screen">
      <div className="device-intro-shell">
        <div className="device-intro-clock" aria-hidden="true">
          <div className="device-intro-clock-core" />
        </div>
        <div className="device-intro-kicker">Detectando dispositivo...</div>
        <div className="device-intro-title">
          Detectado: {deviceMode === "m" ? "Mobile" : "Desktop"}
        </div>
      </div>
    </div>
  );
}

function JourneyEntry({ onSelect, autoDevice }) {
  const [selectedDevice, setSelectedDevice] = useState(autoDevice);

  return (
    <div className="entry-screen">
      <div className="entry-shell">
        <img src={expeditionLogo} alt="Expedição Roblox" className="entry-logo" />
        <div className="entry-kicker">Modo de teste</div>
        <h1 className="entry-title">Escolha a jornada para simular.</h1>
        <p className="entry-sub">
          Esta tela nao existe no fluxo real. Ela serve apenas para abrir manualmente a jornada
          que viria do anuncio clicado.
        </p>
        <div className="entry-device">
          <span className="entry-device-label">Visualizar como</span>
          <div className="entry-device-toggle">
            <button
              className={`entry-device-btn ${selectedDevice === "d" ? "on" : ""}`}
              onClick={() => setSelectedDevice("d")}
            >
              Desktop
            </button>
            <button
              className={`entry-device-btn ${selectedDevice === "m" ? "on" : ""}`}
              onClick={() => setSelectedDevice("m")}
            >
              Mobile
            </button>
          </div>
        </div>
        <div className="entry-grid">
          <button className="entry-card jam" onClick={() => onSelect("jam", selectedDevice)}>
            <span className="entry-card-ey">Game Jam</span>
            <strong>Simular anuncio da Game Jam</strong>
            <span>Abrir a jornada de competicao.</span>
          </button>
          <button className="entry-card expo" onClick={() => onSelect("expo", selectedDevice)}>
            <span className="entry-card-ey">Expedição</span>
            <strong>Simular anuncio do evento</strong>
            <span>Abrir a jornada do presencial.</span>
          </button>
          <button className="entry-card aprender" onClick={() => onSelect("aprender", selectedDevice)}>
            <span className="entry-card-ey">Aprender</span>
            <strong>Simular anuncio de aprendizagem</strong>
            <span>Abrir a jornada para comecar a criar.</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function MockDestinationScreen({ destination, onBack }) {
  const screens = {
    community: {
      label: "Comunidade",
      title: "Voce foi para a comunidade no Discord.",
      body: "Esta e uma tela simulada do mock para representar a saida da jornada para a comunidade.",
      button: "Voltar para a jornada",
    },
    studio: {
      label: "Studio",
      title: "Voce foi para o Roblox Studio + Plugin.",
      body: "Esta e uma tela simulada do mock para representar a saida da jornada para o download e inicio no Studio.",
      button: "Voltar para a jornada",
    },
    app: {
      label: "Mobile",
      title: "Voce foi para o emulador mobile.",
      body: "Esta e uma tela simulada do mock para representar a saida da jornada para o caminho mobile.",
      button: "Voltar para a jornada",
    },
    evento: {
      label: "Inscricao",
      title: "Voce foi para a inscricao do evento.",
      body: "Esta e uma tela simulada do mock para representar a saida da jornada para a inscricao do evento presencial.",
      button: "Voltar para a jornada",
    },
    site: {
      label: "Site completo",
      title: "Voce foi para o site completo da Expedicao.",
      body: "Esta e uma tela simulada do mock para representar a saida da jornada guiada para o site completo.",
      button: "Voltar para a jornada",
    },
  };

  const screen = screens[destination];

  return (
    <div className="mock-destination">
      <div className="mock-destination-card">
        <div className="mock-destination-ey">{screen.label}</div>
        <h1 className="mock-destination-title">{screen.title}</h1>
        <p className="mock-destination-body">{screen.body}</p>
        <button className="mock-destination-btn" onClick={onBack}>
          {screen.button}
        </button>
      </div>
    </div>
  );
}

function RedirectConfirmScreen({ destination, onConfirm, onCancel }) {
  const copy = {
    community: {
      label: "Comunidade",
      title: "Posso te redirecionar para a comunidade agora?",
      body: "Voce vai sair desta jornada guiada e entrar na tela simulada da comunidade no Discord.",
      confirm: "Ir para a comunidade",
    },
    studio: {
      label: "Studio",
      title: "Posso te redirecionar para o Studio agora?",
      body: "Voce vai sair desta jornada guiada e entrar na tela simulada do Roblox Studio + Plugin.",
      confirm: "Ir para o Studio",
    },
    app: {
      label: "Mobile",
      title: "Posso te redirecionar para o emulador mobile agora?",
      body: "Voce vai sair desta jornada guiada e entrar na tela simulada do caminho mobile.",
      confirm: "Ir para o mobile",
    },
    evento: {
      label: "Inscricao",
      title: "Posso te redirecionar para a inscricao agora?",
      body: "Voce vai sair desta jornada guiada e entrar na tela simulada da inscricao do evento presencial.",
      confirm: "Ir para a inscricao",
    },
    site: {
      label: "Site completo",
      title: "Posso te redirecionar para o site completo agora?",
      body: "Voce vai sair desta jornada guiada e entrar na tela simulada do site completo da Expedicao.",
      confirm: "Ir para o site completo",
    },
  };

  const screen = copy[destination];

  return (
    <div className="mock-destination">
      <div className="mock-destination-card">
        <div className="mock-destination-ey">{screen.label}</div>
        <h1 className="mock-destination-title">{screen.title}</h1>
        <p className="mock-destination-body">{screen.body}</p>
        <div className="mock-destination-actions">
          <button className="mock-destination-btn" onClick={onConfirm}>
            {screen.confirm}
          </button>
          <button className="mock-destination-secondary" onClick={onCancel}>
            Continuar na jornada
          </button>
        </div>
      </div>
    </div>
  );
}

function PageContent({
  jornada,
  countdown,
  isMobile,
  email,
  setEmail,
  saveEmail,
  onCardAction,
  onPrimaryAction,
  showSitePrompt,
  onDismissSitePrompt,
}) {
  const cards = isMobile ? jornada.mobileNextCards : jornada.nextCards;
  const viewKey = isMobile ? "mobile" : "desktop";
  const explainSectionId = `why-${jornada.pnSub.toLowerCase()}-${viewKey}`;
  const nextSectionId = `next-${jornada.pnSub.toLowerCase()}-${viewKey}`;

  function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className={isMobile ? "mobile" : "desktop"} style={{ "--ac-color": jornada.color }}>
      {showSitePrompt ? (
        <div
          className="site-prompt-top"
          style={{
            background: jornada.color,
            "--site-prompt-text": jornada.label === "Aprender" ? "#FFFFFF" : "#0A0A0A",
            "--site-prompt-text-soft":
              jornada.label === "Aprender" ? "rgba(255,255,255,.82)" : "rgba(10,10,10,.72)",
          }}
        >
          <button className="site-prompt-main" type="button" onClick={() => onPrimaryAction("site")} aria-label="Ver site completo da Expedição">
            <span className="site-prompt-actions">
              <TopSiteIcon />
            </span>
            <span className="site-prompt-copy">Clique para ver o site completo da Expedição</span>
          </button>
          <button className="site-prompt-close" type="button" onClick={onDismissSitePrompt} aria-label="Fechar aviso">
            <CloseIcon />
          </button>
        </div>
      ) : null}
      {jornada.showCountdown ? (
        <div className="cd-bar" style={{ borderBottomColor: jornada.color }}>
          <div className="cd-pre">Encerra em</div>
          <div className="cd-timer">
            <CountdownUnit value={countdown.days} label="dias" />
            <div className="cd-sep" style={{ color: jornada.color }}>
              :
            </div>
            <CountdownUnit value={countdown.hours} label="horas" />
            <div className="cd-sep" style={{ color: jornada.color }}>
              :
            </div>
            <CountdownUnit value={countdown.mins} label="min" />
            <div className="cd-sep" style={{ color: jornada.color }}>
              :
            </div>
            <CountdownUnit value={countdown.secs} label="seg" />
          </div>
          <button
            className="cd-btn"
            style={{ background: jornada.color, color: "#0A0A0A" }}
            onClick={() =>
              jornada.heroTarget ? onPrimaryAction(jornada.heroTarget) : scrollToId(nextSectionId)
            }
          >
            Participar agora →
          </button>
        </div>
      ) : null}

      <div className="hero">
        <div className="hero-mascot-wrap">
          <Mascot className="hero-mascot" color={jornada.color} />
        </div>
        <div className="hero-ey">
          <div className="hero-ey-line" style={{ background: jornada.color }} />
          <div className="hero-ey-txt">
            {isMobile && jornada.label === "Expedição" ? (
              <>
                Expedição Roblox
                <br />
                Evento Presencial
              </>
            ) : (
              jornada.heroEy
            )}
          </div>
        </div>
        <h1 className="hero-h1">
          {jornada.heroH1.map((line) => (
            <span className="ac" key={line}>
              {line}
            </span>
          ))}
          <span className="ac" style={{ color: jornada.color }}>
            {isMobile && jornada.label === "Expedição" ? (
              <>
                Na prática.
                <br />
                Com especialistas.
              </>
            ) : isMobile && jornada.label === "Aprender" ? (
              <>
                Do zero.
                <br />
                No seu ritmo.
              </>
            ) : (
              jornada.heroH1ac
            )}
          </span>
        </h1>
        <div className="hero-bot">
          <p
            className="hero-desc"
            dangerouslySetInnerHTML={{ __html: jornada.heroDesc }}
          />
          <div className="hero-acts">
            <button
              className="btn-main"
              style={{ background: jornada.color, color: "#0A0A0A" }}
              onClick={() =>
                jornada.label === "Aprender"
                  ? scrollToId(nextSectionId)
                  : jornada.heroTarget
                    ? onPrimaryAction(jornada.heroTarget)
                    : scrollToId(nextSectionId)
              }
            >
              <ChatIcon />
              {jornada.heroCtaTxt}
            </button>
            {jornada.label === "Game Jam" ? (
              <div className="hero-mini-countdown">
                <span className="hero-mini-kicker">Encerra em</span>
                <span className="hero-mini-value">
                  {countdown.days}d : {countdown.hours}h : {countdown.mins}m : {countdown.secs}s
                </span>
              </div>
            ) : null}
            <button className="btn-sec" onClick={() => scrollToId(explainSectionId)}>
              Como funciona ↓
            </button>
          </div>
        </div>
      </div>

      <div className="vblock">
        <div className="vph">
          <video
            className="vmedia"
            src={promoVideo}
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>

      <div className="why" id={explainSectionId}>
        <div className="sec-lbl">{jornada.whyTitle}</div>
        <div className="why-grid">
          {jornada.why.map((item, index) => (
            <div className="why-item" key={item.title}>
              <div className="why-ic" style={{ color: jornada.color }}>
                <FeatureIcon index={index} />
              </div>
              <div className="why-title">{item.title}</div>
              <div className="why-sub">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="next" id={nextSectionId}>
        <div className="next-lbl">{jornada.nextTitle}</div>
        <div className="next-grid">
          {cards.map((card) => (
            <div
              className={`ns ${card.primary ? "primary" : ""}`}
              key={card.title}
              style={card.primary ? { background: jornada.color } : undefined}
              onClick={() => onCardAction(card.action, isMobile)}
            >
              <div className="ns-ic" style={{ color: card.primary ? "#0A0A0A" : jornada.color }}>
                {card.primary ? <DesktopIcon /> : <PhoneIcon />}
              </div>
              <div className="ns-title">{card.title}</div>
              <div className="ns-sub">{card.sub}</div>
              {card.hasEmail && isMobile ? (
                <div className="email-row" onClick={(event) => event.stopPropagation()}>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <button onClick={saveEmail}>Enviar</button>
                </div>
              ) : null}
              <button
                className="ns-btn"
                style={card.primary ? { background: "#0A0A0A", color: "#fff" } : undefined}
                onClick={(event) => {
                  event.stopPropagation();
                  if (card.hasEmail && isMobile) {
                    saveEmail();
                    return;
                  }
                  onCardAction(card.action, isMobile);
                }}
              >
                {card.btn}
              </button>
              {card.helpBtn ? (
                <button
                  className="ns-help"
                  onClick={(event) => {
                    event.stopPropagation();
                    onCardAction(card.helpAction || "chat", isMobile);
                  }}
                >
                  <span className="ns-help-inner">
                    <span>{card.helpBtn}</span>
                    <HelpLinkIcon />
                  </span>
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="bcta" style={{ borderTop: `2px solid ${jornada.color}` }}>
        <div>
          <div className="bc-title">
            {jornada.bctaTitle}
            <br />
            <span style={{ color: jornada.color }}>{jornada.bctaAc}</span>
          </div>
          <div className="bc-sub">{jornada.bctaSub}</div>
        </div>
        <div className="bc-actions">
          <button
            className="bc-btn"
            style={{ background: jornada.color, color: "#0A0A0A" }}
            onClick={() => {
              if (jornada.label === "Aprender") {
                scrollToId(nextSectionId);
                return;
              }

              if (jornada.bctaTarget) {
                onPrimaryAction(jornada.bctaTarget);
              }
            }}
          >
            <ChatIcon />
            {jornada.bctaBtn}
          </button>
          <div className="bc-note">Grátis · sem experiência prévia</div>
        </div>
      </div>
    </div>
  );
}

function ChatWidget({
  id,
  jornada,
  state,
  email,
  setEmail,
  saveEmail,
  toggleChat,
  answerQ,
  handleChoice,
  restartChat,
  closeExplanation,
  mobile = false,
}) {
  const accentTextColor = jornada.label === "Aprender" ? "#FFFFFF" : "#0A0A0A";

  return (
    <div className={mobile ? "mobile-chat-wrap" : "fab-wrap"} id={`fab${id}`}>
      <div className={`chat-widget ${state.open ? "open" : ""}`} id={`cw${id}`}>
        <div className="cw-head">
          <div className="cw-av" style={{ background: jornada.color, color: accentTextColor }}>
            EX
          </div>
          <div>
            <div className="cw-name">Guia da Expedição</div>
            <div className="cw-st">
              <div className="cw-dot" />
              Online agora
            </div>
          </div>
          <button className="cw-close" onClick={() => toggleChat(id)}>
            ✕
          </button>
        </div>
        <div className="cw-msgs" id={`msgs${id}`}>
          {state.msgs.map((msg, index) => {
            if (msg.type === "question") {
              const disabled = state.answered.some((answer) => answer.idx === msg.idx);
              return (
                <div key={`${msg.text}-${index}`}>
                  <Bubble type="ai" jornada={jornada} text={msg.text} />
                  <div className="cw-opts">
                    {msg.opts.map((opt) => (
                      <button
                        key={opt}
                        className="cw-opt"
                        disabled={disabled}
                        onClick={() => answerQ(id, msg.idx, opt, msg.cidade)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            if (msg.type === "options") {
              return (
                <div key={`${msg.text}-${index}`}>
                  <Bubble type="ai" jornada={jornada} text={msg.text} html={msg.html} />
                  <div className="cw-results">
                    {msg.choices.map((choice, choiceIndex) => (
                      <button
                        key={`${choice.action}-${choiceIndex}`}
                        className="cw-rbtn"
                        style={{
                          background: choiceIndex === 0 ? jornada.color : "#F0F0F0",
                          color: choiceIndex === 0 ? accentTextColor : "#0A0A0A",
                        }}
                        onClick={() => handleChoice(id, choice.target, choice.explain)}
                      >
                        {choice.action}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            if (msg.type === "highlight") {
              return (
                <div key={`${msg.text}-${index}`} className="cw-highlight">
                  {msg.text}
                </div>
              );
            }

            return (
              <Bubble
                key={`${msg.text}-${index}`}
                type={msg.type}
                jornada={jornada}
                text={msg.text}
                html={msg.html}
              />
            );
          })}

          {state.msgs.length > 0 && state.msgs[state.msgs.length - 1]?.type === "result" ? (
            <div className="cw-results">
              {state.msgs[state.msgs.length - 1].choices.map((choice, index) => (
                <button
                  key={choice.action}
                  className="cw-rbtn"
                  style={{
                    background: index === 0 ? jornada.color : "#F0F0F0",
                    color: index === 0 ? accentTextColor : "#0A0A0A",
                  }}
                  onClick={() => handleChoice(id, choice.target, choice.explain)}
                >
                  {choice.action}
                </button>
              ))}
              <button className="cw-restart" onClick={() => restartChat(id)}>
                ↺ Recomeçar
              </button>
            </div>
          ) : null}

          {state.explanation ? (
            <div className="cw-explain">
              <div className="cw-ex-title">{state.explanation.title}</div>
              <div className="cw-ex-list">
                {state.explanation.items.map((item, index) => (
                  <div className="cw-ex-item" key={item}>
                    <div
                      className="cw-ex-num"
                      style={{ background: jornada.color, color: accentTextColor }}
                    >
                      {index + 1}
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                className="cw-go-btn"
                style={{ background: jornada.color, color: accentTextColor }}
                onClick={() => handleChoice(id, state.explanation.target, false)}
              >
                {state.explanation.btn}
              </button>
              <button className="cw-back" onClick={() => closeExplanation(id)}>
                ← Voltar e escolher outro caminho
              </button>
            </div>
          ) : null}

          {state.collectEmailFor ? (
            <div className="cw-explain">
              <div className="cw-ex-title">
                {state.collectEmailFor === "app" ? "Receber link do app" : "Receber link do Studio"}
              </div>
              <div className="cw-ex-list">
                <div className="cw-ex-item">
                  <div
                    className="cw-ex-num"
                    style={{ background: jornada.color, color: accentTextColor }}
                  >
                    1
                  </div>
                  <span>
                    {state.collectEmailFor === "app"
                      ? "Deixe seu email para abrir o app de criação mobile depois no seu celular."
                      : "Deixe seu email para abrir o Studio + Plugin depois no desktop."}
                  </span>
                </div>
              </div>
              <div className="email-row chat-email-row">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button onClick={() => saveEmail(id)}>Enviar</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <button
        className="fab-btn fab-btn-combo"
        id={`fabBtn${id}`}
        style={{ background: jornada.color, color: accentTextColor, "--fab-glow": jornada.color }}
        onClick={() => toggleChat(id)}
      >
        <div className="fab-main-icon">
          <ChatIcon />
        </div>
        {!state.open ? <div className="fab-badge" id={`badge${id}`}>1</div> : null}
      </button>
    </div>
  );
}

function Bubble({ type, jornada, text, html = false }) {
  const isUser = type === "user";
  const accentTextColor = jornada.label === "Aprender" ? "#FFFFFF" : "#0A0A0A";
  return (
    <div className={`cmsg ${isUser ? "u" : "ai"}`}>
      <div
        className="cmav"
        style={
          isUser
            ? { background: jornada.color, color: accentTextColor }
            : { background: jornada.color, color: accentTextColor }
        }
      >
        {isUser ? "VC" : "EX"}
      </div>
      <div
        className="cmbub"
        style={isUser ? { background: jornada.color, color: accentTextColor } : undefined}
        {...(html ? { dangerouslySetInnerHTML: { __html: text } } : {})}
      >
        {!html ? text : null}
      </div>
    </div>
  );
}

function CountdownUnit({ value, label }) {
  return (
    <div className="cd-unit">
      <span className="cd-num">{value}</span>
      <div className="cd-lbl">{label}</div>
    </div>
  );
}

function Mascot({ className = "", color }) {
  return (
    <div className={className}>
      <AnimatedLogo color={color} />
    </div>
  );
}

function questionMessage(question, idx) {
  return {
    type: "question",
    text: question.text,
    opts: question.opts,
    idx,
    cidade: question.cidade,
  };
}

function cardFocusMessage(currentJ, action) {
  if (currentJ === "jam" && action === "studio") {
    return {
      type: "options",
      text: "Se você quer entrar na Jam pelo caminho mais completo, o Studio no PC ou Mac é a melhor porta de entrada. Quer que eu te mostre rapidamente como isso funciona ou prefere ir direto?",
      choices: [
        { action: "Ver como funciona", target: "explain-studio" },
        { action: "Baixar Studio agora", target: "redirect-studio" },
        { action: "Ainda tenho dúvida", target: "duvida-studio" },
      ],
    };
  }

  if (currentJ === "jam" && action === "studio-help") {
    return {
      type: "options",
      text: "O Studio é o caminho ideal se você quer criar para a Jam com mais controle no PC ou Mac. O plugin te guia e depois você pode entrar na comunidade para publicar sua ideia. O que você quer fazer agora?",
      choices: [
        { action: "Ver como funciona", target: "explain-studio" },
        { action: "Baixar Studio agora", target: "redirect-studio" },
        { action: "Ver caminho mobile", target: "duvida-app" },
      ],
    };
  }

  if (currentJ === "jam" && action === "app") {
    return {
      type: "options",
      text: "Se você está no celular agora, dá para começar pelo app e continuar no Studio depois. Quer ver esse caminho rapidinho ou prefere abrir direto?",
      choices: [
        { action: "Ver como funciona", target: "explain-app" },
        { action: "Abrir app agora", target: "redirect-app" },
        { action: "Ainda tenho dúvida", target: "duvida-app" },
      ],
    };
  }

  if (currentJ === "jam" && action === "app-help") {
    return {
      type: "options",
      text: "No mobile você começa mais leve: testa ideia, aprende a lógica e depois continua no Studio se quiser levar isso para a Jam. Quer ver o fluxo ou abrir direto?",
      choices: [
        { action: "Ver como funciona", target: "explain-app" },
        { action: "Abrir app agora", target: "redirect-app" },
        { action: "Ver caminho no PC", target: "duvida-studio" },
      ],
    };
  }

  if (currentJ === "jam" && action === "email-help") {
    return {
      type: "options",
      text: "Esse caminho existe para quando você está no celular agora, mas quer continuar depois no Studio no PC ou Mac. Se quiser, você deixa seu email aqui e recebe o link para abrir quando estiver no desktop.",
      choices: [
        { action: "Receber link do Studio", target: "duvida-email-studio" },
        { action: "Ver caminho mobile", target: "duvida-app" },
      ],
    };
  }

  if (currentJ === "expo" && action === "evento") {
    return {
      type: "options",
      text: "Se você quer ir para o evento presencial, eu posso te mostrar o passo a passo da vaga ou te levar direto para a inscrição simulada.",
      choices: [
        { action: "Ver como funciona", target: "explain-evento" },
        { action: "Garantir minha vaga", target: "explain-evento" },
        { action: "Tirar dúvida sobre inscrição", target: "duvida-evento" },
      ],
    };
  }

  if (currentJ === "expo" && action === "chat") {
    return {
      type: "options",
      text: "Se a sua dúvida é sobre o evento presencial, eu consigo te orientar pela inscrição, pela autorização ou pela confirmação da vaga. Por onde você quer começar?",
      choices: [
        { action: "Entender a inscrição", target: "duvida-evento" },
        { action: "Ver o passo a passo", target: "explain-evento" },
        { action: "Garantir minha vaga", target: "explain-evento" },
      ],
    };
  }

  if (currentJ === "aprender" && action === "studio") {
    return {
      type: "options",
      text: "Perfeito. Como você escolheu começar pelo PC, o próximo passo é o Studio com o plugin de tutoriais. Quer ver o passo a passo ou prefere seguir direto?",
      choices: [
        { action: "Ver como funciona", target: "explain-studio" },
        { action: "Baixar Studio + Plugin", target: "redirect-studio" },
        { action: "Comparar com o celular", target: "duvida-app" },
      ],
    };
  }

  if (currentJ === "aprender" && action === "studio-help") {
    return {
      type: "options",
      text: "Como você já abriu o caminho do PC, eu vou te mostrar só o que importa: no Studio você cria com mais recursos, usa o plugin com tutoriais e consegue seguir pelo fluxo mais completo. O que você quer fazer agora?",
      choices: [
        { action: "Ver como funciona", target: "explain-studio" },
        { action: "Baixar Studio + Plugin", target: "redirect-studio" },
        { action: "Comparar com o celular", target: "duvida-app" },
      ],
    };
  }

  if (currentJ === "aprender" && action === "app") {
    return {
      type: "options",
      text: "Perfeito. Como você escolheu começar pelo celular, o próximo passo é abrir o emulador mobile e depois continuar no Studio quando tiver um PC. Quer ver esse fluxo ou prefere abrir direto?",
      choices: [
        { action: "Ver como funciona", target: "explain-app" },
        { action: "Abrir emulador mobile", target: "redirect-app" },
        { action: "Comparar com o PC", target: "duvida-studio" },
      ],
    };
  }

  if (currentJ === "aprender" && action === "app-help") {
    return {
      type: "options",
      text: "Como você já abriu o caminho do celular, eu vou direto ao ponto: no app de criação mobile você começa agora, testa suas ideias e salva para continuar depois no Studio. O que você quer fazer agora?",
      choices: [
        { action: "Ver como funciona", target: "explain-app" },
        { action: "Abrir emulador mobile", target: "redirect-app" },
        { action: "Ver caminho no PC", target: "duvida-studio" },
      ],
    };
  }

  if (currentJ === "aprender" && action === "chat") {
    return {
      type: "options",
      text: "Posso te ajudar a decidir o melhor caminho para começar a criar. O que você quer resolver agora?",
      choices: [
        { action: "Quero criar no PC", target: "duvida-studio" },
        { action: "Quero começar no celular", target: "duvida-app" },
        { action: "Quero comparar os dois", target: "duvida-criar" },
      ],
    };
  }

  return null;
}

function contextualChoiceMessage(currentJ, target) {
  if (target === "treinar") {
    return {
      type: "options",
      text: "Se você quer treinar antes, eu posso te levar direto para o caminho de PC ou para o caminho mobile, dependendo de onde você quer começar.",
      choices: [
        { action: "Treinar no PC com Studio", target: "redirect-studio" },
        { action: "Começar no celular", target: "redirect-app" },
      ],
    };
  }

  if (currentJ === "jam" && target === "duvida-email-studio") {
    return {
      type: "options",
      text: "Perfeito. Você pode deixar seu email no campo desse card e eu te envio o link do Studio para abrir depois no PC ou Mac.",
      choices: [
        { action: "Entendi", target: "fechar-duvida-email" },
        { action: "Ver caminho mobile", target: "duvida-app" },
      ],
    };
  }

  if (currentJ === "aprender" && target === "duvida-studio") {
    return {
      type: "options",
      text: "Se a sua dúvida é sobre o caminho do PC, a resposta curta é: vale a pena quando você já tem acesso a PC ou Mac e quer criar com mais recursos desde o começo. Quer ver o passo a passo ou seguir direto?",
      choices: [
        { action: "Ver como funciona", target: "explain-studio" },
        { action: "Baixar Studio + Plugin", target: "redirect-studio" },
        { action: "Comparar com o celular", target: "duvida-app" },
      ],
    };
  }

  if (currentJ === "aprender" && target === "duvida-app") {
    return {
      type: "options",
      text: "Se a sua dúvida é sobre o caminho do celular, a resposta curta é: ele vale mais a pena quando você quer começar agora no mobile e continuar no Studio depois. Quer ver esse fluxo ou abrir direto?",
      choices: [
        { action: "Ver como funciona", target: "explain-app" },
        { action: "Abrir emulador mobile", target: "redirect-app" },
        { action: "Comparar com o PC", target: "duvida-studio" },
      ],
    };
  }

  if (currentJ === "aprender" && target === "duvida-criar") {
    return {
      type: "options",
      text: "Se você tem PC agora, vá de Studio. Se você só está com o celular, comece no emulador e continue depois no Studio. Qual caminho combina com o seu momento agora?",
      choices: [
        { action: "Quero criar no PC", target: "duvida-studio" },
        { action: "Quero começar no celular", target: "duvida-app" },
      ],
    };
  }

  if (currentJ === "expo" && target === "duvida-evento") {
    return {
      type: "options",
      text: "No evento presencial, o fluxo é simples: inscrição, autorização do responsável e confirmação da vaga por email. Quer ver esse passo a passo ou ir para a vaga?",
      choices: [
        { action: "Ver passo a passo", target: "explain-evento" },
        { action: "Garantir minha vaga", target: "explain-evento" },
      ],
    };
  }

  if (currentJ === "jam" && target === "duvida-studio") {
    return {
      type: "options",
      text: "Se você vai criar pelo PC ou Mac, o Studio é o melhor caminho para entrar na Jam com mais recursos. Quer ver como ele funciona ou já quer seguir?",
      choices: [
        { action: "Ver como funciona", target: "explain-studio" },
        { action: "Baixar Studio agora", target: "redirect-studio" },
        { action: "Ver caminho mobile", target: "duvida-app" },
      ],
    };
  }

  if (currentJ === "jam" && target === "duvida-app") {
    return {
      type: "options",
      text: "Se você está no celular agora, pode começar no app e depois continuar no Studio para avançar rumo à Jam. Quer ver esse caminho ou abrir direto?",
      choices: [
        { action: "Ver como funciona", target: "explain-app" },
        { action: "Abrir app agora", target: "redirect-app" },
        { action: "Ver caminho no PC", target: "duvida-studio" },
      ],
    };
  }

  return null;
}

function resultMessage(currentJ, answered, cidade) {
  const temEvento = CIDADES_EVENTO.includes(cidade);

  if (currentJ === "jam") {
    const criou = answered.find((answer) => answer.idx === 1 || answer.idx === 0)?.opt;
    let text = "A Jam foi feita para quem está começando. Você pode entrar e criar desde o início.";
    if (criou && criou.includes("criei")) {
      text = "Você já tem experiência. Hora de usar isso na Jam.";
    } else if (criou && criou.includes("travei")) {
      text = "Travar faz parte. Na Jam você tem suporte pra desbloquear.";
    }
    const choices = [
      { action: "Entrar na Jam agora", target: "explain-jam" },
      { action: "Treinar antes de entrar", target: "treinar" },
    ];
    if (temEvento) {
      choices.push({ action: "Ver o evento presencial", target: "goto-expo" });
    }
    return { type: "result", text, choices };
  }

  if (currentJ === "expo") {
    const experiencia = answered.find((answer) => answer.idx === 1)?.opt || "";
    const interesse = answered.find((answer) => answer.idx === 2)?.opt || "";

    if (!temEvento) {
      const recomendaJam = experiencia.includes("Já crio");
      const text = recomendaJam
        ? "No momento, a Game Jam é o melhor próximo passo para você continuar criando."
        : "No momento, o melhor próximo passo é começar pela jornada Aprender a Criar e depois seguir para a Game Jam.";
      return {
        type: "result",
        text,
        choices: recomendaJam
          ? [
              { action: "Ir para a Game Jam", target: "goto-jam" },
              { action: "Aprender a criar antes", target: "goto-aprender" },
            ]
          : [
              { action: "Ir para Aprender a Criar", target: "goto-aprender" },
              { action: "Ver a Game Jam", target: "goto-jam" },
            ],
      };
    }

    const text = `Perfeito${temEvento ? ". Tem evento na sua cidade" : ""}. ${
      interesse ? "Boa escolha de foco." : "Vamos garantir sua vaga."
    }`;
    const choices = [
      { action: "Garantir minha vaga", target: "explain-evento" },
      { action: "Aprender antes de ir", target: "treinar" },
    ];
    return { type: "result", text, choices };
  }

  const device = answered.find((answer) => answer.idx === 0)?.opt || "";
  const mobile = device.includes("celular");
  return {
    type: "result",
    text: mobile
      ? "No celular você começa pelo emulador. Fácil de usar e já conecta com o Studio depois."
      : "No PC você tem o caminho completo: Studio + nosso plugin com tutoriais interativos.",
    choices: mobile
      ? [
          { action: "Abrir emulador mobile", target: "explain-app" },
          { action: "Quero ajuda para escolher", target: "duvida-criar" },
        ]
      : [
          { action: "Baixar Studio + Plugin", target: "explain-studio" },
          { action: "Quero ajuda para escolher", target: "duvida-criar" },
        ],
  };
}

function startAnamnese(state, journeyKey, showIntro = true) {
  return startGeneralFlow(state, journeyKey, showIntro);
}

function startGeneralFlow(state, journeyKey, showIntro = true) {
  return {
    ...state,
    flow: "general",
    introSeen: state.introSeen || !showIntro,
    msgs: [showIntro ? generalIntroMessage(journeyKey) : questionMessage(JORNADAS[journeyKey].questions[0], 0)],
  };
}

function generalIntroMessage(journeyKey) {
  const browseLabel = {
    jam: "Vou navegar para entender a Jam",
    expo: "Vou navegar para entender a Expedição",
    aprender: "Vou navegar para entender como criar",
  };

  return {
    type: "options",
    target: "general-intro",
    text: "Posso te guiar por aqui, ou você pode fechar esta janela e explorar sozinho. Se quiser voltar depois, estarei por aqui.",
    choices: [
      { action: "Quero continuar por aqui", target: "continue-general" },
      { action: browseLabel[journeyKey], target: "browse-journey" },
    ],
  };
}

function getCountdown() {
  const diff = JAM_END - new Date();
  if (diff < 0) {
    return { days: "--", hours: "--", mins: "--", secs: "--" };
  }

  const pad = (value) => String(Math.max(0, value)).padStart(2, "0");
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  return {
    days: pad(days),
    hours: pad(hours),
    mins: pad(mins),
    secs: pad(secs),
  };
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function TopJourneyIcon({ journeyKey }) {
  if (journeyKey === "jam") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M8 7h8" />
        <path d="M9 7V5h6v2" />
        <path d="M7 11h10l-1 8H8l-1-8Z" />
      </svg>
    );
  }

  if (journeyKey === "expo") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 20s5-5.4 5-9a5 5 0 1 0-10 0c0 3.6 5 9 5 9Z" />
        <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M8 6.5h8" />
      <path d="M8 10h8" />
      <path d="M9 17h6" />
      <rect x="6.5" y="4.5" width="11" height="15" rx="2.5" />
    </svg>
  );
}

function TopDeviceIcon({ device }) {
  if (device === "desktop") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <rect x="4" y="5" width="16" height="10" rx="1.8" />
        <path d="M10 19h4" />
        <path d="M12 15v4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x="8" y="3.5" width="8" height="17" rx="2.2" />
      <path d="M11 6.5h2" />
      <path d="M11 17.5h2" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

function DesktopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="2" y="3" width="20" height="14" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="5" y="2" width="14" height="20" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function HelpLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M8 12h8" />
      <path d="M13 7l5 5-5 5" />
    </svg>
  );
}

function TopSiteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M8 7H6.8C5.806 7 5 7.806 5 8.8V17.2C5 18.194 5.806 19 6.8 19H15.2C16.194 19 17 18.194 17 17.2V16" />
      <path d="M11 13L19 5" />
      <path d="M14 5H19V10" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function FeatureIcon({ index }) {
  const icons = [
    <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="2" y="3" width="20" height="14" />
      <path d="M8 21h8M12 17v4" />
    </svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
  ];
  return icons[index];
}

export default App;
