export interface People {
  name: string;
}

export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[];
}
