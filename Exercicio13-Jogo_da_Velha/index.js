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
        element.classList.add('cursor-pointer')
        element.addEventListener('click', handleBoardClick);
    });
}

function getWinRegions(){
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2]){
        winRegions.push('0.0', '0.1', '0.2')
    }
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2]){
        winRegions.push('1.0', '1.1', '1.2')
    }
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2]){
        winRegions.push('2.0', '2.1', '2.2')
    }
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0]){
        winRegions.push('0.0', '1.0', '2.0')
    }
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1]){
        winRegions.push('0.1', '1.1', '2.1')
    }
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2]){
        winRegions.push('0.2', '1.2', '2.2')
    }
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2]){
        winRegions.push('0.0', '1.1', '2.2')
    }
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0]){
        winRegions.push('0.2', '1.1', '2.0')
    }

    return winRegions
}

// Função para desabilitar uma região do tabuleiro marcada
function disableRegion(element){
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick);
}

function handleWin(regions){
    regions.forEach(function(region){
        document.querySelector('[data-region="' + region + '"]').classList.add('win')
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector('h2').innerHTML = playerName + ' Venceu! '
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

    const winRegions = getWinRegions()
    if (winRegions.length > 0){
        handleWin(winRegions)
    } else if (vBoard.flat().includes('')){
        turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
        uptadeTitle()
    } else{
        document.querySelector('h2').innerHTML = 'Empate!'
    }
}

// Adiciona o evento de clique ao botão de iniciar o jogo
document.getElementById('start').addEventListener('click', initializeGame);

// Seleciona todas as regiões do tabuleiro
const boardRegions = document.querySelectorAll('#gameBoard span');