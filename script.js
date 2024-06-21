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

// Default version is The Manuscript
setVersionAttributes(0);

// Actions for the buttons
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

function changeVersion(version) {
  // Remove active class from all buttons
  buttons.forEach((button) => button.classList.remove("active"));

  // Change the version contexto to the current one
  html.setAttribute("version-contexto", version);

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
  // Name
  versionTitle.innerHTML = "filename: " + ttpdData[index].versionTitle;

  // Set the new album cover
  versionCover.setAttribute("src", ttpdData[index].albumCoverPath.toString());

  // Release Date
  const releaseDate = new Date(ttpdData[index].releaseDate);
  const releaseDateOptions = { year: "numeric", month: "long", day: "numeric" };
  versionReleaseDate.innerHTML =
    "Release Date: " +
    releaseDate.toLocaleDateString("en-US", releaseDateOptions);

  // Tracks
  const trackItemsHTML = ttpdData[index].tracks
    .map((track) => `<li>${track}</li>`)
    .join("");
  const bonusTracksItemsHTML = ttpdData[index].bonusTracks
    .map((bonus) => `<li class="track-bonus">${bonus}</li>`)
    .join("");
  tracksViewer.innerHTML = trackItemsHTML + bonusTracksItemsHTML;
}
