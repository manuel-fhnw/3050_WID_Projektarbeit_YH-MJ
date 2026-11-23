import { Map } from './Map'

export const CenterHome = ({ setPage }) => (
  <div className="centerhome">
    <div className="hometext">
      <h2>Home</h2>
      <p>
        Diese Projektarbeit stellt den Datensatz «Passantenfrequenzen an der
        Bahnhofstrasse – Stundenwerte» der Stadt Zürich interaktiv dar. Die Webseite
        beantwortet eine spezifische{" "}
        <a href="#" onClick={(e) => { e.preventDefault(); setPage("Fragestellung"); }}>Fragestellung</a>{" "}
        und ermöglicht die Erkundung des{" "}
        <a href="#" onClick={(e) => { e.preventDefault(); setPage("Ganzer Datensatz"); }}>ganzen Datensatzes</a>.
      </p>

      <h3>Datensatz</h3>
      <p>
        Die Daten stammen aus dem Open Data Portal der Stadt Zürich und werden von
        hystreet.com seit Juni 2021 mit Laserscannern erhoben (stündliche Werte).
        Es gibt vier Messgebiete: Bahnhofstrasse (Nord, Mitte, Süd) und die
        Lintheschergasse (seit 13.03.2024). Die Karte rechts zeigt diese
        Messgebiete als Flächen. Die Geometrien stammen aus der Datei
        hystreet_locations.json.
      </p>

      <h4>Zonen</h4>
      <p>
        Jedes Gebiet ist in Zonen unterteilt, die der Strassen- bzw.
        Bürgersteigseite entsprechen. Geodaten dazu gibt es nicht, die Karte zeigt
        nur die Gebiete.
      </p>
      <ul>
        <li><b>Zone 1:</b> Bürgersteig, westlich (Nord, Süd) bzw. östlich (Mitte)</li>
        <li><b>Zone 2:</b> Strassenmitte</li>
        <li><b>Zone 3:</b> gegenüberliegender Bürgersteig</li>
        <li><b>Zone 99:</b> nicht zuordenbare Messwerte</li>
      </ul>

      <h4>Inhalt einer Zeile</h4>
      <ul>
        <li><b>Zeit und Ort:</b> Zeitstempel (UTC), Gebiet (ID und Name)</li>
        <li><b>Passanten:</b> Total, nach Richtung («ltr» / «rtl») und Erwachsenen / Kindern, auch pro Zone</li>
        <li><b>Wetter:</b> Wetterlage (z. B. «clear-day», «rain», «fog») und Temperatur</li>
      </ul>
      <p>
        Die Laufrichtungen «ltr» und «rtl» bedeuten Richtung Bürkliplatz bzw.
        Hauptbahnhof. Welche welche ist, steht pro Gebiet in den Spalten
        «ltr_label» und «rtl_label».
      </p>
    </div>

    <div className="homemap">
      <h2>Die Messgebiete</h2>
      <Map width="100%" height="75vh" selectable={false} />
    </div>
  </div>
)