function initialiseEventCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const openButton = card.querySelector(".open-event-details");
    const closeButton = card.querySelector(".close-event-details");
    const details = card.querySelector(".event-details");
    openButton.addEventListener("click", () => {
      details.classList.remove("translate-y-full");
      details.classList.add("translate-y-0");
    });

    closeButton.addEventListener("click", () => {
      details.classList.remove("translate-y-0");
      details.classList.add("translate-y-full");
    });
  });
}
