const authorCardsGrid = document.querySelector("#author-cards-grid");
const workshopCardsGrid = document.querySelector("#workshop-cards-grid");
const familyCardsGrid = document.querySelector("#family-cards-grid");

const authorSwiperElement = document.querySelector("#author-swiper");
const workshopSwiperElement = document.querySelector("#workshop-swiper");
const familySwiperElement = document.querySelector("#family-swiper");

const minsterCardOne = document.querySelector("#minster-card-one");
const minsterCardTwo = document.querySelector("#minster-card-two");

const libraryCardOne = document.querySelector("#library-card-one");
const libraryCardTwo = document.querySelector("#library-card-two");


async function loadAuthorEvents() {
  try {
    const response = await fetch("./data/authorEvents.json");

    if (!response.ok) {
      throw new Error("Could not load author events");
    }

    const events = await response.json();

    renderEvents(events, "bg-purple/30", "purple", authorCardsGrid, "authors");
  } catch (error) {
    console.error("Error loading author events:", error);
  }
}

async function loadWorkshopEvents() {
  try {
    const response = await fetch("./data/activities.json");

    if (!response.ok) {
      throw new Error("Could not load workshop events");
    }

    const events = await response.json();

    renderEvents(events, "bg-extralight-green", "green", workshopCardsGrid, "workshops");
  } catch (error) {
    console.error("Error loading workshop events:", error);
  }
}

async function loadFamilyEvents() {
  try {
    const response = await fetch("./data/familyActivities.json");

    if (!response.ok) {
      throw new Error("Could not load Family events");
    }

    const events = await response.json();

    renderEvents(events, "bg-orange/20", "orange", familyCardsGrid, "family");
  } catch (error) {
    console.error("Error loading Family events:", error);
  }
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

function renderCard(event, cardBackground, primaryColour, isSwiper) {
  const card = document.createElement("div");
  card.className = `card ${cardBackground} ${isSwiper ? "swiper-slide h-auto! flex" : ""}`;

  const colourClasses = {
    purple: "bg-purple border-purple",
    yellow: "bg-yellow border-yellow",
    orange: "bg-orange border-orange",
    navy: "bg-navy border-navy",
    green: "bg-green border-green",
  };

  const buttonClasses = colourClasses[primaryColour];

  const noTix = event.cta === "Drop In";

  card.innerHTML = `
      <!-- Details -->
      <div class="event-details bg-${primaryColour} text-white">

        <button
          type="button"
          class="close-event-details group text-${primaryColour} absolute top-6 right-6 aspect-square size-8 rounded-full bg-white p-1 transition-all duration-100"
        >
          <svg
            class="text-${primaryColour} size-full transition-all duration-100 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div class="flex flex-col">
          <p class="title">${event.title}</p>
          <p class="body-copy mb-8 text-xl font-semibold">
            ${event.date}
          </p>
          <p class="body-copy mb-8">
            ${event.content}
          </p>
          <p class="body-copy flex items-center text-white mb-3">
            <span class="font-semibold pr-4">Location:</span>${event.location}
          </p>
          <p class="body-copy flex items-center text-white mb-3">
            <span class="font-semibold pr-4">Price:</span>${event.price}
          </p>
          <p class="body-copy flex items-center text-white mb-3">
            <span class="font-semibold pr-4">Audience:</span>${event.audience}
          </p>
        </div>

        <a
          href="${event.ticketLink || "#"}"
          class="button text-${primaryColour} mt-6 flex w-full items-center justify-center bg-white text-center text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${event.cta}
        </a>

      </div>

      <!-- Main Card -->
      <div class="size-full flex flex-col">

        ${
          event.image
            ? `
          <div class="w-full h-fit">
              <img
              src="${event.image}"
              alt="${event.alt || event.title}"
              class="block h-auto w-full object-cover object-center"
              />
          </div>
          `
            : ""
        }

        <div class="flex w-full grow justify-between min-w-0 flex-col p-8">
          <div class="w-full">
              <h3 class="title text-${primaryColour}">
              ${event.title}
              </h3>

              <p class="body-copy mb-4 md:mb-8 font-semibold">
              ${event.date}
              </p>
              ${
                event.content
                  ? `
                  <p class="body-copy mb-4 md:mb-8 line-clamp-2">
                  ${event.content}
                  </p>
              `
                  : ""
              }

              <p class="body-copy flex items-center">
                  <span class="text-${primaryColour} flex h-full w-8 items-center justify-center pr-4"
                      ><svg
                          class="size-full"
                          viewBox="0 0 60 93"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                          d="M57.6418 18.8081C56.1307 15.1407 53.9678 11.8475 51.2132 9.01982C48.4586 6.19216 45.2504 3.97191 41.6779 2.42077C37.9782 0.814468 34.0492 0 30 0C25.9508 0 22.0218 0.814468 18.3221 2.42077C14.7496 3.97191 11.5414 6.19216 8.7868 9.01982C6.03218 11.8475 3.8693 15.1407 2.35823 18.8081C0.793426 22.6058 0 26.639 0 30.7956C0 37.7594 4.8437 50.0274 14.3965 67.2587C21.4373 79.9588 28.5738 90.8317 28.645 90.94L30 93L31.355 90.94C31.4262 90.8317 38.5627 79.9588 45.6035 67.2587C55.1563 50.0274 60 37.7594 60 30.7956C60 26.639 59.2066 22.6058 57.6418 18.8081ZM45.7894 29.9637C45.7894 38.9009 38.7063 46.1718 30 46.1718C21.2937 46.1718 14.2106 38.9009 14.2106 29.9637C14.2106 21.0265 21.2937 13.7556 30 13.7556C38.7063 13.7556 45.7894 21.0265 45.7894 29.9637Z"
                          fill="currentColor"
                          /></svg></span>
              ${event.location}
              </p>
          </div>

          <div class="md:mt-6 mt-4 flex w-full min-w-0 flex-wrap items-center gap-3">
          ${
            event.content
              ? `
              <button
                  type="button"
                  class="open-event-details w-fit button border-${primaryColour} text-${primaryColour} flex items-center border text-lg xl:text-xl whitespace-nowrap"
              >
                  Find out more

                  <span class="text-${primaryColour} h-4 w-fit pl-3">
                  <svg
                      class="size-full"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                      d="M0 6.8606L14.0665 6.8606"
                      stroke="currentColor"
                      stroke-width="2"
                      />
                      <path
                      d="M10.0676 1.37793C10.0676 1.37793 13.3904 6.69441 15.2734 6.86055C13.3904 7.02669 10.0676 12.3432 10.0676 12.3432"
                      stroke="currentColor"
                      stroke-width="2"
                      />
                  </svg>
                  </span>
              </button>
              `
              : ""
          }

            <a
              href="${event.ticketLink || "#"}"
              class="button ${buttonClasses} border text-lg xl:text-xl text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${event.cta}
            </a>

          </div>

        </div>
      </div>
    `;

  return card;
}

function renderEvents(events, cardBackground, primaryColour, grid, filler) {
  const emptySpaces = 3 - (events.length % 3);
  const chunkedEvents = chunkArrayInGroups(events, 5);

  // MOBILE SWIPERS

  const swiperDiv =
    filler === "authors"
      ? authorSwiperElement
      : filler === "workshops"
        ? workshopSwiperElement
        : familySwiperElement;
  const swiperWrapper = swiperDiv.querySelector(".swiper-wrapper");
  events.forEach((event) => {
    const isSwiper = true;
    const card = renderCard(event, cardBackground, primaryColour, isSwiper);
    swiperWrapper.append(card);
  });

  // DESKTOP SLIDES
  chunkedEvents[0].reverse().forEach((event) => {
    const card = renderCard(event, cardBackground, primaryColour);
    grid.prepend(card);
  });
  chunkedEvents.slice(1).forEach((array) => {
    array.forEach((event) => {
      const card = renderCard(event, cardBackground, primaryColour);
      grid.append(card);
    });
  });

  let fillerDivs = [];

  if (filler === "authors" && emptySpaces < 3) {
    emptySpaces === 2 ? fillerDivs.push(minsterCardTwo) : fillerDivs(minsterCardOne);
  }

  if (filler === "workshops") {
    emptySpaces - 1 === 2 ? fillerDivs.push(libraryCardTwo) : fillerDivs.push(libraryCardOne);
  }

  fillerDivs.forEach((div) => {
    div.classList.add("lg:grid");
  });
}

async function init() {
  await Promise.all([loadAuthorEvents(), loadWorkshopEvents(), loadFamilyEvents()]);
  initialiseEventCards();
  ScrollTrigger.refresh();
}

init();
