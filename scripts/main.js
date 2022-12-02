import { actorsHTML } from "./actors.js";
import { genresHTML } from "./genres.js";
import { showsHTML } from "./shows.js";

const mainContainer = document.querySelector("#content");

const renderAllHTML = () => {
  mainContainer.innerHTML = `
  <div id="flexcontainer">  
    <div class="upper-box">${Actors()}</div>
    <div class="upper-box">${Genres()}</div>
  </div>
  <div class="lower-box">${Shows()}</div>
  `;
};

renderAllHTML();