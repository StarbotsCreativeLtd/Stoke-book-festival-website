const fanContainer = document.querySelector(".footer-fan-container");

for (let i = 0; i < 72; i++) {
  const leaf = document.createElement("div");
  leaf.className = `ray-line`;
  leaf.style.setProperty("--i", i);
  fanContainer.appendChild(leaf);
}

const heroFanContainer = document.querySelector(".hero-main-fan-container");

for (let i = 0; i < 60; i++) {
  const leaf = document.createElement("div");
  leaf.className = `hero-ray-line`;
  leaf.style.setProperty("--i", i);
  heroFanContainer.appendChild(leaf);
}

const heroFanContainerMobile = document.querySelector(".hero-main-fan-container-mobile");

for (let i = 0; i < 60; i++) {
  const leaf = document.createElement("div");
  leaf.className = `hero-ray-line-mobile`;
  leaf.style.setProperty("--i", i);
  heroFanContainerMobile.appendChild(leaf);
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

const minsterCardContainer = document.querySelector(".minster-fan-container");

for (let i = 0; i < 72; i++) {
  const leaf = document.createElement("div");
  leaf.className = `minster-ray-line`;
  leaf.style.setProperty("--i", i);
  minsterCardContainer.appendChild(leaf);
}

const centralLibraryCardContainer = document.querySelector(".central-library-fan-container");

for (let i = 0; i < 72; i++) {
  const leaf = document.createElement("div");
  leaf.className = `central-ray-line`;
  leaf.style.setProperty("--i", i);
  centralLibraryCardContainer.appendChild(leaf);
}

const libraryCardContainer = document.querySelector(".library-fan-container");

for (let i = 0; i < 72; i++) {
  const leaf = document.createElement("div");
  leaf.className = `library-ray-line`;
  leaf.style.setProperty("--i", i);
  libraryCardContainer.appendChild(leaf);
}

const heroLeftCardContainer = document.querySelector(".hero-left-fan-container");

for (let i = 0; i < 180; i++) {
  const leaf = document.createElement("div");
  leaf.className = `hero-left-ray-line`;
  leaf.style.setProperty("--i", i);
  heroLeftCardContainer.appendChild(leaf);
}

const heroRightCardContainer = document.querySelector(".hero-right-fan-container");

for (let i = 0; i < 72; i++) {
  const leaf = document.createElement("div");
  leaf.className = `hero-right-ray-line`;
  leaf.style.setProperty("--i", i);
  heroRightCardContainer.appendChild(leaf);
}
