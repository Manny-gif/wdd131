
const searchInput = document.querySelector('.search-container input[type="text"]');
const recipeCardContainer = document.querySelector('.recipe-card-container');
const searchIcon = document.querySelector('.search-icon');


const recipes = [
  {
    name: 'Apple Crisp',
    image: 'images/apple-crisp.jpg',
    rating: 4,
    description: "This apple crisp is a delightful dessert made with fresh apples, cinnamon, and a crumbly topping. It's perfect when served warm with vanilla ice-cream.",
    tags: ['dessert']
  },
  {
    name: 'Chocolate Chip Cookies',
    image: 'images/chocolate-chip-cookies.jpg',
    rating: 5,
    description: "These chocolate-chip cookies are a classic favourite, packed with semi-sweet chips and a hint of vanilla.",
    tags: ['dessert']
  },
  {
    name: 'Sweet Potato Waffle',
    image: 'images/sweet-potato-waffle-md.jpg',
    rating: 4,
    description: 'Light and crisp waffles using mashed sweet-potato for a subtle sweetness. Ideal for weekend brunch.',
    tags: ['breakfast']
  },
  {
    name: 'Black Beans and Rice',
    image: 'images/black-beans-and-rice.jpg',
    rating: 4,
    description: 'Cuban-inspired black beans simmered with spices, served over fluffy rice for a quick meat-free main.',
    tags: ['lunch']
  },
  {
    name: 'Chicken and Rice Curry',
    image: 'images/chicken-curry.webp',
    rating: 4,
    description: 'Tender chicken simmered in fragrant curry sauce, finished with coconut milk and served on basmati rice.',
    tags: ['lunch']
  },
  {
    name: 'Escalopes de Poulet à la Crème',
    image: 'images/escalopes-de-poulet-a-la-creme.webp',
    rating: 4,
    description: 'French-style sautéed chicken escalopes bathed in a silky white-wine cream sauce.',
    tags: ['lunch']
  },
  {
    name: 'German Gooseberry Cake',
    image: 'images/german-gooseberry-cake.jpg',
    rating: 4,
    description: 'Buttery sponge layered with tart gooseberries and streusel topping – a German coffee-time favourite.',
    tags: ['dessert']
  },
  {
    name: 'Roasted Potatoes',
    image: 'images/roasted-potatoes.webp',
    rating: 4,
    description: 'Crisp-on-the-outside, fluffy-inside roasted potatoes seasoned simply with garlic and rosemary.',
    tags: ['side']
  }
];

function tagsTemplate(tags) {
  return tags.map(tag => `<button class="recipe-button" type="button">${tag}</button>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? '<span style="color: gold; font-size: 1.2rem;">&#9733;</span>'
      : '<span style="color: lightgray; font-size: 1.2rem;">&#9733;</span>';
  }
  html += '</span>';
  return html;
}

function recipeTemplate(recipe) {
  return `
    <section class="recipe-card">
      <div class="img-recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" width="400" height="300" loading="lazy" />
      </div>
      <div class="recipe-button-card">
        ${tagsTemplate(recipe.tags)}
        <h2><strong>${recipe.name}</strong></h2>
        <p>${ratingTemplate(recipe.rating)}</p>
        <p>${recipe.description}</p>
      </div>
    </section>
  `;
}

function renderRecipes(recipeList) {
  recipeCardContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}

function filterRecipes(query) {
  query = query.toLowerCase();
  return recipes
    .filter(recipe =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(query))
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  if (e) e.preventDefault();
  const query = searchInput.value.trim();
  renderRecipes(query ? filterRecipes(query) : []);
}

function init() {
  renderRecipes([recipes[0]]); // Show only Apple Crisp initially
  searchIcon.addEventListener('click', searchHandler);
}

init();
