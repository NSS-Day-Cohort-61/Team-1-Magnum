import { getGenres } from "./database";

const genres = getGenres();

/* 
  Iterate through genres array
  display
*/
export const genresHTML = () => {
  let html = "<ul>";

  for (const genre of genres) {
    html += `<li>${genre.name}</li>`
  }

  return html += `</ul>`;
};
