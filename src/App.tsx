import './App.css';

import PeopleLoader from './components/PeopleLoader';
import { Typography } from '@mui/material';
import { ReactQueryClient } from './components/ReactQueryClient';

function App() {
  return (
    <div className='App'>
      <body>
        <ReactQueryClient>
          <Typography variant='h1'>Starwars Characters</Typography>
          <PeopleLoader />
        </ReactQueryClient>
      </body>
    </div>
  );
}

export default App;
