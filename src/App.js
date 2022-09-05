import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import Welcome from './components/Welcome';
import Education from './components/Education';
import BallsGenerator from './components/Ui/BallsGenerator';

function App() {
  return (
    <>
      <div className="App">
        <BallsGenerator value={30} />
        <Welcome logged={false} balls={<BallsGenerator value={30} />}></Welcome>
      </div>
      {/* 
       <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/education' element={<Education/>}/>
      </Routes> 
      */}
    </>
  );
}

export default App;
