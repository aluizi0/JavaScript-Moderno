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

// Função para desabilitar uma região do tabuleiro marcada
function disableRegion(element){
    element.style.cursor = 'default';
    element.removeEventListener('click', handleBoardClick);

}

// Função para lidar com o clique no tabuleiro
function handleBoardClick(ev) {
    const span = ev.currentTarget
    const region = ev.currentTarget.dataset.region // N.N.N.N
    const rowColumnPair = region.split('.') // [ 'N', 'N', 'N', 'N' ]
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]

    // Verifica de quem é a vez e marca o tabuleiro com 'X' ou 'O'
    if (turnPlayer === 'player1'){
        span.innerText = 'X'
        vBoard[row][column] = 'X'
    } else {
        span.innerText = 'O'
        vBoard[row][column] = 'O'
    }

    // Limpa o console e exibe o estado atual do tabuleiro
    console.clear()
    console.table(vBoard)

    // Chamando função de desbilitar regiao ja marcada no tabuleiro
    disableRegion(span)
}

// Adiciona o evento de clique ao botão de iniciar o jogo
document.getElementById('start').addEventListener('click', initializeGame);

// Seleciona todas as regiões do tabuleiro
const boardRegions = document.querySelectorAll('#gameBoard span');