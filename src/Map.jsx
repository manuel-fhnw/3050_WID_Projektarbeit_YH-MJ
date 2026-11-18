import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import flaechen from "./data/hystreet_locations.json";

const ZUERICH = [47.3725, 8.5392];

const ALLE_IDS = flaechen.features.map((f) => f.properties.hystreet_location_id);

export const Map = () => {
  const [selected, setSelected] = useState(ALLE_IDS);

  const toggle = (hystreet_location_id) =>
    setSelected((prev) =>
      prev.includes(hystreet_location_id) ? prev.filter((x) => x !== hystreet_location_id) : [...prev, hystreet_location_id]
    );

  return (
    <div className="map-box">
      <MapContainer
        center={ZUERICH}
        zoom={15}
        minZoom={10}
        maxZoom={18}
        style={{ height: "100%", width: "100%"}}
      >
        <TileLayer
          url="https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-grau/default/current/3857/{z}/{x}/{y}.jpeg"
          attribution='&copy; <a href="https://www.swisstopo.admin.ch">swisstopo</a>'
          opacity={0.4}
        />
        <GeoJSON
          key={selected.join(",")}
          data={flaechen}
          style={(f) => ({
            color: "#00838f",
            weight: 2,
            fillOpacity: selected.includes(f.properties.hystreet_location_id) ? 0.6 : 0.1,
          })}
          onEachFeature={(f, layer) => {
            const id = f.properties.hystreet_location_id;   
            layer.on("click", () => toggle(id));
            layer.bindTooltip(f.properties.name, {permanent: true, direction: id === 670 ? "left" : "right", className: "zonen-label",});
          }}
        />
      </MapContainer>
    </div>
  );
};