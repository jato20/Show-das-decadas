const perguntas = {
    '5060': [
        { q: "Quem era o Rei do Rock nos anos 50?", options: ["Elvis Presley", "Beatles", "Nirvana", "Pelé"], correct: 0 },
        { q: "Em que ano o homem pisou na Lua?", options: ["1950", "1969", "1975", "1945"], correct: 1 },
        { q: "Qual capital foi inaugurada no Brasil em 1960?", options: ["Rio", "Salvador", "Brasília", "Curitiba"], correct: 2 },
        { q: "Qual seleção venceu a Copa de 1958?", options: ["Brasil", "Suécia", "Alemanha", "França"], correct: 0 },
        { q: "Estilo musical brasileiro que surgiu em 1958:", options: ["Axé", "Bossa Nova", "Funk", "Sertanejo"], correct: 1 }
    ],
    '7080': [
        { q: "Qual desenho era febre no Brasil nos anos 70?", options: ["Pica-Pau", "Naruto", "Ben 10", "Pokemón"], correct: 0 },
        { q: "Quem é o Rei do Pop?", options: ["Prince", "Michael Jackson", "Bono", "Freddie Mercury"], correct: 1 },
        { q: "Qual videogame era uma bolinha comilona?", options: ["Mario", "Pac-Man", "Sonic", "Tetris"], correct: 1 },
        { q: "Banda brasileira de 'Eduardo e Mônica':", options: ["Titãs", "Legião Urbana", "RPM", "Ira!"], correct: 1 },
        { q: "Qual piloto ganhou a F1 em 72 e 74?", options: ["Senna", "Piquet", "Fittipaldi", "Pace"], correct: 2 }
    ],
    '9000': [
        { q: "Qual bicho virtual era febre nos anos 90?", options: ["Tamagotchi", "Furby", "Pikachu", "Dino"], correct: 0 },
        { q: "Quem lançou o iPhone em 2007?", options: ["Samsung", "Apple", "Nokia", "LG"], correct: 1 },
        { q: "Banda de Brasília que teve fim em 1996:", options: ["Skank", "Mamonas Assassinas", "Raimundos", "Titãs"], correct: 1 },
        { q: "Rede social de sucesso em 2004 no Brasil:", options: ["Orkut", "Facebook", "Instagram", "MSN"], correct: 0 },
        { q: "O Brasil foi Tetra em qual ano?", options: ["1990", "1994", "1998", "2002"], correct: 1 }
    ]
};

let faseAtual = 0;
let decadaSelecionada = "";
let premioTotal = 0;

function iniciarJogo(decada) {
    decadaSelecionada = decada;
    faseAtual = 0;
    premioTotal = 0;
    
    // Embaralha as perguntas
    perguntas[decada].sort(() => Math.random() - 0.5);

    document.getElementById('valor-premio').innerText = "0";
    document.getElementById('tela-selecao').style.display = 'none';
    document.getElementById('tela-pergunta').style.display = 'block';
    mostrarPergunta();
}

function mostrarPergunta() {
    let dados = perguntas[decadaSelecionada][faseAtual];
    document.getElementById('pergunta-texto').innerText = dados.q;
    
    let totalPerguntas = perguntas[decadaSelecionada].length;
    document.getElementById('fase-num').innerText = faseAtual + 1;

    let divOpcoes = document.getElementById('alternativas');
    divOpcoes.innerHTML = ""; 

    dados.options.forEach((opt, index) => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => verificarResposta(index);
        divOpcoes.appendChild(btn);
    });
}

function verificarResposta(escolha) {
    let correta = perguntas[decadaSelecionada][faseAtual].correct;
    if(escolha === correta) {
        faseAtual++;
        premioTotal += 50000;
        
        // Atualiza prêmio na tela
        document.getElementById('valor-premio').innerText = premioTotal.toLocaleString('pt-BR');
        
        alert("CERTA RESPOSTA! Você ganhou R$ 50.000");

        if(faseAtual < perguntas[decadaSelecionada].length) {
            mostrarPergunta();
        } else {
            alert("PARABÉNS! VOCÊ COMPLETOU A DÉCADA!");
            location.reload();
        }
    } else {
        alert("QUE PENA! Você errou e perdeu tudo.");
        location.reload();
    }
}
