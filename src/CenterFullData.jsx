export const CenterFullData = ({filter}) => (
  <div className="center">
    <h2>Ganzer Datensatz</h2>
    <p>
      <b>Themen:</b>{" "}
      {filter.topics.length > 0 ? filter.topics.join(", ") : "keine ausgewählt"}
    </p>
        <p>
      <b>Zonen (IDs):</b>{" "}
      {filter.zones.length > 0 ? filter.zones.join(", ") : "keine ausgewählt"}
    </p>
  </div>
)