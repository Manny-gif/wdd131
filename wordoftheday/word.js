const words = [
  {
    name: 'Cellfish',
    image: 'images/cellfish.jpeg',
    description: "'Cellfish' describes a person who keeps talking on their phone when it's clearly inconsiderate."
  },
  {
    name: 'Expectations',
    image: 'images/expectations.jpeg',
    description: 'A strong belief that something will happen or be the case in the future. It can lead to disappointment when reality doesn’t match up.'
  },
  {
    name: 'Microwave',
    image: 'images/microwave.jpeg',
    description: 'A kitchen appliance that heats food by using electromagnetic radiation.'
  },
  {
    name: 'Mom',
    image: 'images/mom.jpeg',
    description: 'The person who does the most for you and expects the least in return—your forever friend.'
  },
  {
    name: 'Napstipation',
    image: 'images/napstipation.jpeg',
    description: "The inability to nap, often due to stress or an overactive mind. It's the feeling when you've fluffed your pillow, gotten comfortable, and really want to doze off, but your brain just won't cooperate and let you sleep."
  },
  {
    name: 'Problems',
    image: 'images/problems.jpeg',
    description: "Difficulties that require solutions, stimulating critical thinking and growth. It's the stuff that keeps you up at night."
  },
  {
    name: 'Sibling',
    image: 'images/sibling.jpeg',
    description: 'A brother or sister—source of support, friendship and (sometimes) rivalry. They know all your secrets and still love you.'
  },
  {
    name: 'Smonday',
    image: 'images/smonday.jpeg',
    description: "The Sunday evening feeling when Monday's tasks start creeping in. It's that mix of relaxation and looming responsibility."
  },
  {
    name: 'Snaccident',
    image: 'images/snaccident.jpeg',
    description: "Accidentally eating a whole snack (or three) while distracted. It's the unplanned, yet delicious, consumption of snacks."
  },
  {
    name: 'Pregret',
    image: 'images/pregret.jpeg',
    description: "Regret or anxiety over something that hasn't even happened yet. It's the feeling of 'what if' before the event occurs."
  }
];


function wordTemplate(word) {
  return `
    <section class="word-card">
      <div class="img-word-card">
        <img src="${word.image}" alt="${word.name}" loading="lazy" />
      </div>
      <div class="word-info">
        <h2><strong>${word.name}</strong></h2>
        <p>${word.description}</p>
      </div>
    </section>
  `;
}


if (document.querySelector('.search-bar input') && document.querySelector('.word-card-container')) {
  const searchInput = document.querySelector('.search-bar input');
  const searchIcon = document.querySelector('.search-icon');
  const wordCardContainer = document.querySelector('.word-card-container');

  function render(contentHtml) {
    wordCardContainer.innerHTML = contentHtml;
  }

  function getWordOfTheDay() {
    const index = new Date().getDate() % words.length;
    return words[index];
  }

  function renderWordOfTheDay() {
    const today = new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });

    render(
      `<h3 class="daily-title" style="text-align:center;margin-bottom:1rem;">
         Today's Word - ${today}
       </h3>` +
      wordTemplate(getWordOfTheDay())
    );
  }

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const matchedWord = words.find(w => w.name.toLowerCase() === query);
    if (!matchedWord) {
      render('<p style="text-align:center;">No match found.</p>');
      return;
    }

    // Save to localStorage
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!history.includes(query)) {
      history.push(query);
      localStorage.setItem('searchHistory', JSON.stringify(history));
    }

    render(wordTemplate(matchedWord));
  }

  function initHome() {
    renderWordOfTheDay();
    searchIcon.addEventListener('click', handleSearch);
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSearch();
    });
  }

  window.addEventListener('DOMContentLoaded', initHome);
}


if (document.querySelector('.history-card-container')) {
  const historyContainer = document.querySelector('.history-card-container');
  const searchInput = document.querySelector('.search-bar input');
  const searchIcon = document.querySelector('.search-icon');

  function loadHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const filteredWords = words.filter(w => history.includes(w.name.toLowerCase()));
    historyContainer.innerHTML = filteredWords.length
      ? filteredWords.map(wordTemplate).join('')
      : '<p class="no-history">No search history yet.</p>';

  }

  function clearHistory() {
    localStorage.removeItem('searchHistory');
    loadHistory();
  }

  function handleArchiveSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!history.includes(query)) {
      history.push(query);
      localStorage.setItem('searchHistory', JSON.stringify(history));
    }

    loadHistory();
  }

  searchIcon.addEventListener('click', handleArchiveSearch);
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleArchiveSearch();
  });

  window.clearHistory = clearHistory; 
  window.addEventListener('DOMContentLoaded', loadHistory);
}
