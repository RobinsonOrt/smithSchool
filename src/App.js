import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Postulate from "./pages/Postulate";
import Mision from "./pages/Mision";
import Vision from "./pages/Vision";
import Horarios from "./pages/Horarios";
import AuthDir from "./pages/authDir";
import AuthStudent from "./pages/authStudent";
import Control from "./pages/Control";
import ListEstudiantes from "./pages/ListEstudiantes";
import Director from "./pages/director";
import Estudiante from "./pages/Estudiante";


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/nosotros" component={Nosotros} />
      <Route exact path="/postulate" component={Postulate} />
      <Route exact path="/mision" component={Mision} />
      <Route exact path="/vision" component={Vision} />
      <Route exact path="/horarios" component={Horarios} />
      <Route path="/authdir" exact render ={ props=>(<AuthDir {...props} />)} />
      <Route exact path="/authstudent" component={AuthStudent} />
      <Route exact path="/control" component={Control} />
      <Route exact path="/listestu" component={ListEstudiantes} />
      <Route exact path="/estudiante" component={Estudiante} />
    </BrowserRouter>
  );
}

export default App;
