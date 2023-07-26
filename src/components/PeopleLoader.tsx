import { useQuery } from 'react-query';
import { fetchPeople } from '../api/people';
import { People } from '../models/People';
import { PeopleList } from './PeopleList';
import { CircularProgress, Grid, Paper, Skeleton } from '@mui/material';

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

  return (
    <Paper sx={{ margin: '24px', padding: '8px' }} elevation={5}>
      <PeopleList people={data ?? []} />
    </Paper>
  );
}
