// Função para atualizar o título com o nome do jogador atual
function uptadeTitle() {
    const player1Name = document.getElementById('player1').value;
    const player2Name = document.getElementById('player2').value;
    const turnPlayerName = turnPlayer === 'player1' ? player1Name : player2Name;
    document.getElementById('turnPlayer').innerText = turnPlayerName;
}

// Função para inicializar o jogo
function initializeGame() {
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']];
    turnPlayer = 'player1';
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>';
    uptadeTitle(); // Atualiza o título com o nome do jogador atual
    boardRegions.forEach(function (element) {
        element.classList.remove('win');
        element.innerText = '';
        element.addEventListener('click', handleBoardClick);
    });
}

// Função para lidar com o clique no tabuleiro
function handleBoardClick(ev) {
    console.log('clicou');
}

// Adiciona o evento de clique ao botão de iniciar o jogo
document.getElementById('start').addEventListener('click', initializeGame);

// Seleciona todas as regiões do tabuleiro
const boardRegions = document.querySelectorAll('#gameBoard span');