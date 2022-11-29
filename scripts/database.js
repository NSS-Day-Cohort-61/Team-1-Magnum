const database = {
  genres: [{
      id: 1,
      name: "Action"
    }, {
      id: 2,
      name: "Drama"
    }, {
      id: 3,
      name: "Comedy"
    }, {
      id: 4,
      name: "Horror"
    }, {
      id: 5,
      name: "Western"
    }
  ]
}

export const getShows = () => {
  return null
}

// Returns copy of array filled with genre objects
export const getGenres = () => {
  return database.genres.map(genre => ({ ...genre }));
}