import './App.css';
import TopBar from './Components/TopBar';
import Background from './Components/Background';

import 'bootstrap/dist/css/bootstrap.min.css'
import StoreListing from './Components/StoreListing';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;
