import { getActors, getShows } from "./database.js";

const actors = getActors();
const shows = getShows();

export const Shows = () => {
  let html = "<ul>";
  // go through each show
  for (const show of shows) {
    // need to take the foreign key of the show actorId
    //  and match to the actor id primary key
    let starActor = null;
    for (const actor of actors) {
      if (show.actorId === actor.id) {
        starActor = actor;
      }
    }
    // build and add a list item string to the html string
    html += `<li>${show.name} (${show.genre}) starring ${starActor}</li>`;
  }
  html += "</ul>";
  return html;
};
