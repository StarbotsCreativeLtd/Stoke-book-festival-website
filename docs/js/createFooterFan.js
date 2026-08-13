const fanContainer = document.querySelector(".footer-fan-container");

for (let i = 0; i < 50; i++) {
  const leaf = document.createElement("div");
  leaf.className = `ray-line`;
  leaf.style.setProperty("--i", i);
  fanContainer.appendChild(leaf);
}
