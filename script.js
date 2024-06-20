import ttpdData from "./data/ttpdData.js";

const html = document.querySelector("html");
const manuscriptBt = document.querySelector(".manuscript-button");
const bolterBt = document.querySelector(".bolter-button");
const albatrossBt = document.querySelector(".albatross-button");
const blackDogBt = document.querySelector(".blackdog-button");
const anthologyBt = document.querySelector(".anthology-button");
const buttons = document.querySelectorAll(".column-selector__button");
const tracksViewer = document.querySelector(
  ".column-viewer__description__album-tracks"
);
const versionTitle = document.querySelector(".column-viewer__title");
const versionCover = document.querySelector(
  ".column-viewer__description__album-info__cover"
);
const versionReleaseDate = document.querySelector(
  ".column-viewer__description__album-info__release"
);

// Adding the name of the version to the page
const versionName = ttpdData[0].versionTitle.toString();
versionTitle.innerHTML += " " + versionName;

// Adding the album cover to the page
const albumCoverPath = ttpdData[0].albumCoverPath.toString();
versionCover.setAttribute("src", albumCoverPath);

// Adding the release date to the page
let releaseDate = new Date(ttpdData[0].releaseDate);
const releaseDateOptions = { year: "numeric", month: "long", day: "numeric" };
versionReleaseDate.innerHTML += releaseDate.toLocaleDateString(
  "en-US",
  releaseDateOptions
);

// Adding tracks and bonus tracks to the page
let trackItemsHTML = ttpdData[0].tracks
  .map((track) => `<li>${track}</li>`)
  .join("");

let bonusTracksItemsHTML = ttpdData[0].bonusTracks
  .map((bonus) => `<li class="track-bonus">${bonus}</li>`)
  .join("");

tracksViewer.innerHTML = trackItemsHTML + bonusTracksItemsHTML;

// Actions for the buttons

function changeVersion(version) {
  buttons.forEach((button) => button.classList.remove("active"));
  html.setAttribute("version-contexto", version);
  versionCover.setAttribute("src", `../assets/${version}.png`);
  switch (version) {
    case "the-manuscript":
      setVersionAttributes(0);
      break;
    case "the-bolter":
      setVersionAttributes(1);
      break;
    case "the-albatross":
      setVersionAttributes(2);
      break;
    case "the-black-dog":
      setVersionAttributes(3);
      break;
    case "the-anthology":
      setVersionAttributes(4);
      break;
    default:
      break;
  }
}

function setVersionAttributes(index) {
  versionTitle.innerHTML = "filename: " + ttpdData[index].versionTitle;
  releaseDate = new Date(ttpdData[index].releaseDate);
  versionReleaseDate.innerHTML =
    "Release Date: " +
    releaseDate.toLocaleDateString("en-US", releaseDateOptions);
  trackItemsHTML = ttpdData[1].tracks
    .map((track) => `<li>${track}</li>`)
    .join("");
  bonusTracksItemsHTML = ttpdData[index].bonusTracks
    .map((bonus) => `<li class="track-bonus">${bonus}</li>`)
    .join("");
  tracksViewer.innerHTML = trackItemsHTML + bonusTracksItemsHTML;
}

manuscriptBt.addEventListener("click", () => {
  changeVersion("the-manuscript");
  manuscriptBt.classList.add("active");
});

bolterBt.addEventListener("click", () => {
  changeVersion("the-bolter");
  bolterBt.classList.add("active");
});

albatrossBt.addEventListener("click", () => {
  changeVersion("the-albatross");
  albatrossBt.classList.add("active");
});

blackDogBt.addEventListener("click", () => {
  changeVersion("the-black-dog");
  blackDogBt.classList.add("active");
});

anthologyBt.addEventListener("click", () => {
  changeVersion("the-anthology");
  anthologyBt.classList.add("active");
});
