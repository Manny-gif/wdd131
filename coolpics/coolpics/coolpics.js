function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.image-modal');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', (event) => {
  const img = event.target.closest('img');
  if (!img) return;
  const src = img.getAttribute('src');
  const alt = img.getAttribute('alt');
  const fullSrc = src.split('-')[0] + '-full.jpeg';

  modalImage.setAttribute('src', fullSrc);
  modalImage.setAttribute('alt', alt);
  modal.showModal();
});

closeButton.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});


window.addEventListener("resize", handleResize);
handleResize(); 

const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
