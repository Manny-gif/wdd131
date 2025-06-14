const character = {
  name: "Snortleblat",
  class: "Swamp Beat Diplomat",
  level: 5,
  health: 100,
  image: "swamp.jpg",
  attacked() {
    if (this.health >= 20) {
      this.level -= 1;
      this.health -= 20;
    } else {
      alert("Character Died");
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};

// Target the DOM elements
const image = document.querySelector(".image");
const nameDiv = document.querySelector(".name");
const classSpan = document.getElementById("class");
const levelSpan = document.getElementById("level");
const healthSpan = document.getElementById("health");
const log = document.getElementById("log");

function updateDisplay() {
  image.src = character.image;
  image.alt = character.name;
  nameDiv.textContent = character.name;
  classSpan.textContent = character.class;
  levelSpan.textContent = character.level;
  healthSpan.textContent = character.health;
  log.textContent = "Updated character info.";
}

// Event listeners
document.getElementById("attacked").addEventListener("click", function () {
  character.attacked();
  updateDisplay();
});

document.getElementById("levelup").addEventListener("click", function () {
  character.levelUp();
  updateDisplay();
});

// Initial load
updateDisplay();
