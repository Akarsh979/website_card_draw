document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flip-card");
  const btn = document.querySelector("#btn");

  // Flip functionality on click
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  const images = [
    "images/1.png", "images/2.png", "images/3.png", "images/4.png",
    "images/5.png", "images/6.png", "images/7.png", "images/8.png",
    "images/9.png", "images/10.png", "images/11.png", "images/12.png",
    "images/13.png", "images/14.png", "images/15.png", "images/16.png",
    "images/17.png", "images/18.png", "images/19.png", "images/20.png",
    "images/21.png", "images/22.png", "images/23.png", "images/24.png",
    "images/25.png", "images/26.png", "images/27.png", "images/28.png",
    "images/29.png", "images/30.png", "images/31.png"
  ];

  const backCards = [
    document.getElementById("one"),
    document.getElementById("two"),
    document.getElementById("three"),
    document.getElementById("four"),
    document.getElementById("five"),
    document.getElementById("six"),
  ];

  btn.addEventListener("click", () => {
    let usedImages = new Set();

    function getRandomImage() {
      let randombg;
      do {
        randombg = images[Math.floor(Math.random() * images.length)];
      } while (usedImages.has(randombg));
      usedImages.add(randombg);
      return randombg;
    }

    // Re-flip all cards to close before shuffling images
    cards.forEach(card => card.classList.remove("flipped"));

    // Assign new images
    backCards.forEach(backCard => {
      backCard.style.backgroundImage = `url('${getRandomImage()}')`;
    });
  });
});
