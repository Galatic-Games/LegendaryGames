const suggestions = [
  { name: "Crazy Cars", image: "path/to/crazy-cars.jpg", url: "Crazy-Cars.html" },
  { name: "Drive Mad", image: "path/to/drive-mad.jpg", url: "drive-mad.html" },
  { name: "Animal Arena", image: "path/to/animal-arena.jpg", url: "animal-arena.html" },
  { name: "Poor Buny", image: "path/to/poor-buny.jpg", url: "poor-buny.html" },
  { name: "MOTO X3M", image: "path/to/moto-x3m.jpg", url: "moto-x3m.html" },
  { name: "Idle", image: "path/to/fancade.jpg", url: "Idle.html" },
  { name: "Bumper", image: "path/to/fancade.jpg", url: "bumper.html" },
  { name: "Soccer Legends", image: "path/to/fancade.jpg", url: "soccer.html" },
  { name: "Soccer Legends", image: "path/to/fancade.jpg", url: "soccer.html" },
  { name: "Eugene", image: "path/to/eugene.jpg", url: "eugene.html" }
];

function showSuggestions(value) {
  const suggestionBox = document.querySelector('.suggestions');
  suggestionBox.innerHTML = '';

  if (value.length === 0) {
    suggestionBox.style.display = 'none';
    return;
  }

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.name.toLowerCase().includes(value.toLowerCase())
  );

  if (filteredSuggestions.length === 0) {
    suggestionBox.style.display = 'none';
    return;
  }

  filteredSuggestions.forEach(suggestion => {
    const div = document.createElement('div');
    div.className = 'suggestion-item';
    
    const img = document.createElement('img');
    img.src = suggestion.image;
    img.alt = suggestion.name;
    
    const span = document.createElement('span');
    span.textContent = suggestion.name;
    
    const button = document.createElement('button');
    button.textContent = 'Jogar';
    button.onclick = () => navigateTo(suggestion.url); // Utiliza a função navigateTo para redirecionar

    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(button);
    
    suggestionBox.appendChild(div);
  });

  suggestionBox.style.display = 'block';
}

// Função para navegar para outra página
function navigateTo(page) {
  window.location.href = page;
}
