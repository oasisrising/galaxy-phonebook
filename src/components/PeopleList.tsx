import {
  Card,
  Grid,
  List,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import { People } from '../models/People';
import { format } from 'date-fns';

export const PeopleList: React.FC<{ people: People[] }> = ({ people }) => {
  return (
    <Grid container spacing={2}>
      {people.map((person) => (
        <Grid item>
          <Tooltip title={<CharacterTooltip person={person} />}>
            <Card
              sx={{
                padding: '0 16px',
                height: '48px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              elevation={5}
            >
              <Typography>{person.name}</Typography>
            </Card>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};

export const CharacterTooltip: React.FC<{ person: People }> = ({ person }) => {
  return (
    <List>
      <ListItemText>{`Name: ${person.name}`}</ListItemText>
      <ListItemText>{`Height: ${person.height / 100} meters`}</ListItemText>
      <ListItemText>{`Mass: ${person.mass} kg`}</ListItemText>
      <ListItemText>
        {`Date added: ${format(new Date(person.created), 'MM-dd-yyyy')}`}
      </ListItemText>
      <ListItemText>
        {`Appeared in ${person.films.length} film
        ${person.films.length > 1 ? 's' : ''}`}
      </ListItemText>
      <ListItemText>{`Born in the year ${person.birth_year}`}</ListItemText>
    </List>
  );
};
