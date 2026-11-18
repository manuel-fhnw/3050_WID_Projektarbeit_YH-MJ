import { useState, useEffect} from "react";
import './App.css'
import { Header } from "./Header.jsx"
import { CenterHome } from "./CenterHome.jsx";
import { CenterQuestion } from "./CenterQuestion.jsx";
import { CenterFullData } from "./CenterFullData.jsx";
import { SidebarQuestion} from "./SidebarQuestion.jsx";
import { SidebarFullData} from "./SidebarFullData.jsx";
import { Impressum } from "./Impressum.jsx"
import { Footer } from "./Footer.jsx";  


function App() {
//useEffect sorgt dafür, dass beim Refresh der Seite nicht zurück zum Home springt
const [page, setPage] = useState(() => localStorage.getItem("page") || "Home");
useEffect(() => {localStorage.setItem("page", page);}, [page]);

return (
  <div className="app">
    <Header page={page} setPage={setPage} />

    <div className="app__content">
      {page === "Home" && (
        <main>
          <CenterHome />
        </main>
      )}

      {page === "Fragestellung" && (
        <>
          <SidebarQuestion />
          <main>
            <CenterQuestion />
          </main>
        </>
      )}

      {page === "Ganzer Datensatz" && (
        <>
          <SidebarFullData />
          <main>
            <CenterFullData />
          </main>
        </>
      )}

      {page === "Impressum" && (
        <main>
          <Impressum />
        </main>
      )}
    </div>

    <Footer page={page} setPage={setPage} />
  </div>
);
}

export default App
