import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Map } from "./Map";

const YEARS = ["2021", "2022", "2023", "2024", "2025"];
const DAYS = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];

export const SidebarQuestion = ({setFilter}) => {
  const [years, setYears] = React.useState(
    Object.fromEntries(YEARS.map((y) => [y, false])),
  );
  const [days, setDays] = React.useState(
    Object.fromEntries(DAYS.map((d) => [d, false])),
  );

  const valuesYears = Object.values(years);
  const allCheckedYears = valuesYears.every(Boolean);
  const someCheckedYears = valuesYears.some(Boolean);
  const valuesDays = Object.values(days);
  const allCheckedDays = valuesDays.every(Boolean);
  const someCheckedDays = valuesDays.some(Boolean);

  const handleChangeYears = (event) => {
    const { name, checked } = event.target;
    setYears((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAllYears = (event) => {
    setYears(Object.fromEntries(YEARS.map((y) => [y, event.target.checked])));
  };

  const handleChangeDays = (event) => {
    const { name, checked } = event.target;
    setDays((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAllDays = (event) => {
    setDays(Object.fromEntries(DAYS.map((d) => [d, event.target.checked])));
  };

  React.useEffect(() => {
    setFilter((prev) => ({
    ...prev,
    years: Object.keys(years).filter((y) => years[y]),
    days: Object.keys(days).filter((d) => days[d]),
  }));
  }, [years, days, setFilter]);

  return (
    <aside className="sidebar">
      <h2>Filter</h2>

      <Box className="filter-box">
        <Typography className="filter-title">Zeitraum</Typography>

        <Box className="filter-columns">
          <Box className="filter-column">
            <Typography className="filter-subtitle">Jahr</Typography>

            <FormControlLabel
              label="Alle / Keine"
              control={
                <Checkbox
                  size="small"
                  checked={allCheckedYears}
                  indeterminate={someCheckedYears && !allCheckedYears}
                  onChange={handleAllYears}
                />
              }
            />
          <Box className="filter-children">
            {YEARS.map((year) => (
              <FormControlLabel
                key={year}
                label={year}
                control={
                  <Checkbox
                    size="small"
                    name={year}
                    checked={years[year]}
                    onChange={handleChangeYears}
                  />
                }
              />
            ))}
          </Box>
          </Box>
          <Box className="filter-column">
            <Typography className="filter-subtitle">Wochentag</Typography>

            <FormControlLabel
              label="Alle / Keine"
              control={
                <Checkbox
                  size="small"
                  checked={allCheckedDays}
                  indeterminate={someCheckedDays && !allCheckedDays}
                  onChange={handleAllDays}
                />
              }
            />
          <Box className="filter-children">
            {DAYS.map((day) => (
              <FormControlLabel
                key={day}
                label={day}
                control={
                  <Checkbox
                    size="small"
                    name={day}
                    checked={days[day]}
                    onChange={handleChangeDays}
                  />
                }
              />
            ))}
          </Box>
          </Box>
        </Box>
      </Box>
      <Typography className="filter-title">Zoneauswahl</Typography>
      <Map setFilter={setFilter}/>
    </aside>
  );
};
