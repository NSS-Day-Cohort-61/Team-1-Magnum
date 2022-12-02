import { getGenres } from "./database";

const genres = getGenres();

export const Genres = () => {
  let html = "<ul>";

  for (const genre of genres) {
    html += `<li id="genre--${genre.id}">${genre.name}</li>`
  }

  html += `</ul>`;
  return html;
};