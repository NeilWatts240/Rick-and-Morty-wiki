export type CharacterType = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
};

export type EpisodeType = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

export type LocationType = {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
};
