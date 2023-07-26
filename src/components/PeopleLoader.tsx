import { useQuery } from 'react-query';
import { fetchPeople } from '../api/people';
import { People } from '../models/People';
import { PeopleList } from './PeopleList';
import { CircularProgress, Paper } from '@mui/material';
import _ from 'lodash';
import { HUMAN } from '../constants';

export default function PeopleLoader() {
  const { isLoading, error, data, isFetching } = useQuery<People[]>(
    'people',
    fetchPeople('https://swapi.dev/api/people'),
    {
      cacheTime: 10000,
    }
  );
  if (isLoading || isFetching) {
    return <CircularProgress />;
  }
  if (error) {
    return <>Something went wrong. Please try again later</>;
  }

  const speciesList = _.uniq(data?.flatMap((person) => person.species) ?? []);
  speciesList.push(HUMAN);
  const speciesColorLookup = new Map<string, string>();
  speciesList.forEach((species) =>
    speciesColorLookup.set(species, createColor())
  );
  return (
    <Paper sx={{ margin: '24px', padding: '8px' }} elevation={5}>
      <PeopleList people={data ?? []} speciesColors={speciesColorLookup} />
    </Paper>
  );
}

function colorChannel() {
  return Math.floor(Math.random() * 255)
    .toString(16)
    .padStart(2, '0');
}
function createColor() {
  return `#${colorChannel()}${colorChannel()}${colorChannel()}`;
}
