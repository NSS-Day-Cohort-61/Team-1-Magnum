import { Actors } from "./actors.js";
import { Genres } from "./genres.js";
import { Shows } from "./shows.js";

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