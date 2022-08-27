import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import Welcome from './components/Welcome';
import Education from './components/Education';

function App() {
  return (
    <>
      <div className="App">
        <Welcome logged={false}></Welcome>
      </div>
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/education' element={<Education/>}/>
      </Routes>
    </>
  );
}

export default App;
