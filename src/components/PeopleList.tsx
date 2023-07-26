import {
  Card,
  Grid,
  List,
  ListItemText,
  Tooltip,
  Typography,
  getContrastRatio,
} from '@mui/material';
import { People } from '../models/People';
import { format } from 'date-fns';
import { HUMAN } from '../constants';

export const PeopleList: React.FC<{
  people: People[];
  speciesColors: Map<string, string>;
}> = ({ people, speciesColors }) => {
  return (
    <Grid container spacing={2}>
      {people.map((person) => (
        <Grid item>
          <CharacterCard person={person} speciesColors={speciesColors} />
        </Grid>
      ))}
    </Grid>
  );
};

const WHITE = '#ffffff';
const BLACK = '#000000';
export const CharacterCard: React.FC<{
  person: People;
  speciesColors: Map<string, string>;
}> = ({ person, speciesColors }) => {
  const backgroundColor =
    speciesColors.get(person.species.length > 0 ? person.species[0] : HUMAN) ??
    BLACK;
  const textColor =
    getContrastRatio(BLACK, backgroundColor) < 4.5 ? WHITE : BLACK;
  return (
    <Tooltip title={<CharacterTooltip person={person} />}>
      <Card
        sx={{
          padding: '0 16px',
          height: '48px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: backgroundColor,
        }}
        elevation={5}
      >
        <Typography color={textColor}>{person.name}</Typography>
      </Card>
    </Tooltip>
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
