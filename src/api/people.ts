import axios from 'axios';
import { People } from '../models/People';

export function fetchPeople(url: string): () => Promise<People[]> {
  return () =>
    axios.get(url).then((res) => {
      // if (res.data.next) {
      //   return fetchPeople(res.data.next)().then((people) => {
      //     return res.data.results.concat(people);
      //   });
      // }
      return res.data.results;
      //return getPeopleStub();
    });
}
