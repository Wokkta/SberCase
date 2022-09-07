import "./styles/App.css";
import {Routes,Route,Link} from "react-router-dom"
import { useState } from "react";
import Welcome from './components/Welcome';
import Education from './components/Education';
import BallsGenerator from './components/Ui/BallsGenerator';
import Reg_pg_1 from "./components/Reg_pg_1";
import Reg_pg_2 from "./components/Reg_pg_2";
import Reg_pg_3 from "./components/Reg_pg_3";
import Enter from "./components/Enter";
function App() {
  const [logged,setLogged] = useState(true);
  return (
    <>
      <div className="App">
      </div>
      {
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/education" element={<Education />} />
          <Route path="/reg1" element={<Reg_pg_1 />} />
          <Route path="/reg2" element={<Reg_pg_2 />} />
          <Route path="/registred" element={<Reg_pg_3 />} />
          <Route path="/enter" element={<Enter />} />
        </Routes>
      }
    </>
  );
}

export default App;
