export interface People {
  name: string;
  height: number;
  mass: number;
  created: string;
  films: string[];
  birth_year: string;
  species: string[];
}

export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[];
}
