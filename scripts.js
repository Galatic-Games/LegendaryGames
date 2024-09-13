// Função para abrir a página do jogo
function openGame(gameUrl) {
    window.location.href = gameUrl;
}

// Função para tela cheia
function goFullScreen() {
    const iframe = document.querySelector('iframe');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

// Função para voltar à página inicial
function goBack() {
    window.location.href = 'index.html';
}

// Sistema de pesquisa de jogos
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const games = document.querySelectorAll('.game');
    
    games.forEach(function(game) {
        const title = game.querySelector('.game-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
});
