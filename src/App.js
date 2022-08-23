import './App.css';

import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Welcome logged={false}></Welcome>
      
    </div>
  );
}

export default App;
