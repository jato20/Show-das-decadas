const perguntas = {
    '5060': [
        { q: "Quem era o Rei do Rock nos anos 50?", options: ["Elvis Presley", "Beatles", "Nirvana", "Pelé"], correct: 0 },
        { q: "Em que ano o homem pisou na Lua?", options: ["1950", "1969", "1975", "1945"], correct: 1 }
    ],
    '7080': [
        { q: "Qual o videogame da 'bolinha amarela'?", options: ["Mario", "Pac-Man", "Sonic", "Tetris"], correct: 1 },
        { q: "Quem é o Rei do Pop?", options: ["Prince", "Michael Jackson", "Bono Vox", "Freddie Mercury"], correct: 1 }
    ],
    '9000': [
        { q: "Qual bicho virtual era febre nos anos 90?", options: ["Tamagotchi", "Furby", "Pikachu", "Dino"], correct: 0 },
        { q: "Qual empresa lançou o iPhone em 2007?", options: ["Nokia", "Samsung", "Apple", "Microsoft"], correct: 2 }
    ]
};

let faseAtual = 0;
let decadaSelecionada = "";

function iniciarJogo(decada) {
    decadaSelecionada = decada;
    faseAtual = 0;
    document.getElementById('tela-selecao').style.display = 'none';
    document.getElementById('tela-pergunta').style.display = 'block';
    mostrarPergunta();
}

function mostrarPergunta() {
    let dados = perguntas[decadaSelecionada][faseAtual];
    document.getElementById('pergunta-texto').innerText = dados.q;
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
        alert("Certa resposta!");
        faseAtual++;
        if(faseAtual < perguntas[decadaSelecionada].length) {
            mostrarPergunta();
        } else {
            alert("Parabéns! Você venceu o Show das Décadas!");
            location.reload();
        }
    } else {
        alert("Errado! Você perdeu tudo.");
        location.reload();
    }
}
