const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

/* Botões */
document.querySelector(".next").addEventListener("click", () => {
  showSlide(index + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(index - 1);
});

/* Troca automática */
setInterval(() => {
  showSlide(index + 1);
}, 5000); // 3 segundos
