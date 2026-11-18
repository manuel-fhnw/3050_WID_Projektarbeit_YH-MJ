import { Button, ButtonGroup} from '@mui/material';

const pages = ["Impressum"];


export const Footer = ({page, setPage}) => (
<footer className="footer">
    <ButtonGroup variant="text" aria-label="Seitennavigation">
      {pages.map((name) => (
        <Button key={name} sx={{ color: page === name ? "var(--accent)" : "var(--disabled)"}} onClick={() => setPage(name)}>
          {name}
        </Button>
      ))}
    </ButtonGroup>
  </footer>
)