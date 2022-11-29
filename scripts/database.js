const database = {
  shows: [
    {
      id: 1,
      actorId: 1,
      genreId: 1,
      name: "1899",
    },
    {
      id: 2,
      actorId: 1,
      genreId: 1,
      name: "Westworld",
    },
    {
      id: 3,
      actorId: 3,
      genreId: 2,
      name: "Parks and Recreation",
    },
    {
      id: 4,
      actorId: 4,
      genreId: 2,
      name: "Brooklyn 99",
    },
    {
      id: 5,
      actorId: 5,
      genreId: 3,
      name: "Peaky Blinders",
    },
    {
      id: 6,
      actorId: 6,
      genreId: 3,
      name: "Band of Brothers",
    },
    {
      id: 7,
      actorId: 7,
      genreId: 6,
      name: "House of the Dragon",
    },
    {
      id: 8,
      actorId: 2,
      genreId: 4,
      name: "The Witcher",
    },
    {
      id: 9,
      actorId: 3,
      genreId: 5,
      name: "Gangs of London",
    },
    {
      id: 10,
      actorId: 4,
      genreId: 5,
      name: "Lost",
    },
  ],
  actors: [
    {
      id: 1,
      name: "Bigfoot Bjornsen"
    },
    {
      id: 2,
      name: "Genghis Cohen"
    },
    {
      id: 3,
      name: "Mucho Maas"
    },
    {
      id: 4,
      name: "Oedipa Maas"
    },
    {
      id: 5,
      name: "Benny Profane"
    },
    {
      id: 6,
      name: "Tyrone Slothrop"
    },
    {
      id: 7,
      name: "Chevrolette McAdoo"
    },
  ]

}

export const getActors = () => {
  return database.actors.map(actor => ({ ...actor }));
}

export const getShows = () => {
  return database.shows.map(show => ({ ...shows }));
};
