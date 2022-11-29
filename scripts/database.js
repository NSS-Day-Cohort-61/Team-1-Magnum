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
  ],
  actors: [{
    id: 1,
    name: "Bigfoot Bjornsen"
  }, {
    id: 2,
    name: "Genghis Cohen"
  }, {
    id: 3,
    name: "Mucho Maas"
  }, {
    id: 4,
    name: "Oedipa Maas"
  }, {
    id: 5,
    name: "Benny Profane"
  }, {
    id: 6,
    name: "Tyrone Slothrop"
  }, {
    id: 7,
    name: "Chevrolette McAdoo"
  },
  ]
}

export const getActors = () => {
  return database.actors.map(actor => ({ ...actor }));
}

export const getShows = () => {
  return null
}

// Returns copy of array filled with genre objects
export const getGenres = () => {
  return database.genres.map(genre => ({ ...genre }));
}