export const CenterQuestion = ({filter}) => (
  <div className="center">
    <h2>Fragestellung</h2>
    <p>
      <b>Jahre:</b>{" "}
      {filter.years.length > 0 ? filter.years.join(", ") : "keine ausgewählt"}
    </p>

    <p>
      <b>Wochentage:</b>{" "}
      {filter.days.length > 0 ? filter.days.join(", ") : "keine ausgewählt"}
    </p>

    <p>
      <b>Zonen (IDs):</b>{" "}
      {filter.zones.length > 0 ? filter.zones.join(", ") : "keine ausgewählt"}
    </p>
  </div>
)