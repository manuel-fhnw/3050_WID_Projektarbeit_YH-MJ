import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CenterMap } from "./CenterMap";

const TOPIC = ["A", "B", "C", "D", "E"];

export const SidebarFullData = ({setFilter}) => {
  const [topics, setTopics] = React.useState(
    Object.fromEntries(TOPIC.map((t) => [t, false])),
  );

  const valuesTopics = Object.values(topics);
  const allCheckedTopics = valuesTopics.every(Boolean);
  const someCheckedTopics = valuesTopics.some(Boolean);

  const handleChangeTopics = (event) => {
    const { name, checked } = event.target;
    setTopics((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAllTopics = (event) => {
    setTopics(Object.fromEntries(TOPIC.map((t) => [t, event.target.checked])));
  };

  React.useEffect(() => {
      setFilter((prev) => ({
      ...prev,
      topics: Object.keys(topics).filter((t) => topics[t]),
    }));
    }, [topics, setFilter]);

  return (
    <aside className="sidebar">
      <h2>Filter</h2>

      <Box className="filter-box">
        <Typography className="filter-title">Themas</Typography>

        <Box className="filter-column">
          <FormControlLabel
            label="Alle / Keine"
            control={
              <Checkbox
                size="small"
                checked={allCheckedTopics}
                indeterminate={someCheckedTopics && !allCheckedTopics}
                onChange={handleAllTopics}
              />
            }
          />
          <Box className="filter-children">
            {TOPIC.map((topic) => (
              <FormControlLabel
                key={topic}
                label={topic}
                control={
                  <Checkbox
                    size="small"
                    name={topic}
                    checked={topics[topic]}
                    onChange={handleChangeTopics}
                  />
                }
              />
            ))}
          </Box>
        </Box>
      </Box>
      <br/>
      <Typography className="filter-title">Zoneauswahl</Typography>
      <CenterMap setFilter={setFilter}/>
    </aside>
  );
};
