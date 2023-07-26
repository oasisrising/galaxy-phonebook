import './App.css';
import {
  QueryClient,
  QueryClientProvider,
  QueryFunction,
  useQuery,
} from 'react-query';
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { People, PeopleResponse } from './models/People';
import { fetchPeople } from './api/people';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <body>
        <QueryClientProvider client={queryClient}>
          <PeopleLoader />
        </QueryClientProvider>
      </body>
    </div>
  );
}

export default App;

function PeopleLoader() {
  const { isLoading, error, data, isFetching } = useQuery<People[]>(
    'people',
    fetchPeople('https://swapi.dev/api/people')
  );
  if (isLoading || isFetching) {
    return <>Loading...</>;
  }
  return <PeopleList people={data ?? []} />;
}

const PeopleList: React.FC<{ people: People[] }> = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <p>{person.name}</p>
      ))}
    </>
  );
};
