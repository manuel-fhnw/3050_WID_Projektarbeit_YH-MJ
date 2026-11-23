import { Button, ButtonGroup,} from '@mui/material';

const pages = ["Home", "Fragestellung", "Ganzer Datensatz",];


export const Header = ({page, setPage}) => (
  <header className="header">
    <h1>Passantenfrequenzen an der Bahnhofstrasse, Zürich</h1>

    <ButtonGroup variant="text" color="var(--disabled)" aria-label="Seitennavigation">
      {pages.map((name) => (
        <Button key={name} sx={{ color: page === name ? "var(--accent)" : "var(--disabled)"}} onClick={() => setPage(name)}>
          {name}
        </Button>
      ))}
    </ButtonGroup>
  </header>
);