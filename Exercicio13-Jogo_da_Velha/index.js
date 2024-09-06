document.getElementById('startGame').addEventListener('click', function() {
    const player1Name = document.getElementById('player1').value;
    const player2Name = document.getElementById('player2').value;

    if (player1Name === '' || player2Name === '') {
        alert('Por favor, insira os nomes dos dois jogadores.');
        return;
    }

    console.log('Player 1:', player1Name);
    console.log('Player 2:', player2Name);

    // Aqui você pode iniciar o jogo ou fazer outras ações necessárias
});