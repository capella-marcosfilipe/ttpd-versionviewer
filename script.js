import ttpdData from "./data/ttpdData.js";
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
const releaseDate = new Date(ttpdData[0].releaseDate);
const releaseDateOptions = { year: "numeric", month: "long", day: "numeric" };
versionReleaseDate.innerHTML += releaseDate.toLocaleDateString(
  "en-US",
  releaseDateOptions
);

// Adding tracks and bonus tracks to the page
const trackItemsHTML = ttpdData[0].tracks
  .map((track) => `<li>${track}</li>`)
  .join("");

const bonusTracksItemsHTML = ttpdData[0].bonusTracks
  .map((bonus) => `<li class="track-bonus">${bonus}</li>`)
  .join("");

tracksViewer.innerHTML = trackItemsHTML + bonusTracksItemsHTML;
