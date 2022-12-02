import { getActors, getShows } from "./database.js";

const actors = getActors();
const shows = getShows();

export const Shows = () => {
  let html = "<ul>";
  // go through each show
  for (const show of shows) {
    // need to take the foreign key of the show actorId
    //  and match to the actor id primary key
    let starActorObj = {};
    for (const actor of actors) {
      if (show.actorId === actor.id) {
        starActorObj = actor;
      }
    }
    // need to take the foreign key of the genre genreId
    // and match it to the genre id primary key
    let genreObj = {};
    for (const genre of genres) {
      if (show.genreId === genre.id) {
        genreObj = genre;
      }
    }
    // build and add a list item string to the html string
    html += `<li>${show.name} (${genreObj.name}) starring ${starActorObj.name}</li>`;
  }
  html += "</ul>";
  return html;
};