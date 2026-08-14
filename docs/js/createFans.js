const fanContainer = document.querySelector(".footer-fan-container");

for (let i = 0; i < 72; i++) {
  const leaf = document.createElement("div");
  leaf.className = `ray-line`;
  leaf.style.setProperty("--i", i);
  fanContainer.appendChild(leaf);
}

const leftCardContainer = document.querySelector(".left-card-fan-container");

for (let i = 0; i < 120; i++) {
  const leaf = document.createElement("div");
  leaf.className = `light-purple-ray-line`;
  leaf.style.setProperty("--i", i);
  leftCardContainer.appendChild(leaf);
}

const rightCardContainer = document.querySelector(".right-card-fan-container");

for (let i = 0; i < 36; i++) {
  const leaf = document.createElement("div");
  leaf.className = `purple-ray-line`;
  leaf.style.setProperty("--i", i);
  rightCardContainer.appendChild(leaf);
}
