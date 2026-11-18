import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Map } from "./Map"

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

export const SidebarQuestion = () => {
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

  return (
    <aside className="sidebar">
      <h2>Filter</h2>
      <Box className="filter-box" role="group" aria-label="filter">
        <Typography className="filter-title">Zeitauswahl</Typography>
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

        <Box className="filter-box" role="group" aria-label="filter">
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

        <Box className="filter-box" role="group" aria-label="filter">
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
        <Typography className="filter-title">Zone</Typography>
        <Map />
      </Box>
    </aside>
  );
};
