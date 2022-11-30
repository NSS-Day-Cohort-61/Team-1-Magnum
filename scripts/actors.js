import { getActors } from "./database.js";

const actors = getActors();

const Actors = () => {
    let html = "";
    html = "<ul>";

    for(const actor of actors) {
        html += `<li id="actor--${actor.id}>${actor.name}</li>`;
    }

    html += "</ul>";
}