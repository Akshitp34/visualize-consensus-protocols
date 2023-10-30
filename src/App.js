import logo from './logo.svg';
import './App.css';
import {MyRootComponent} from './MyRootComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          BFT Protocols Visualization
        </p>
      </header>
      <MyRootComponent/>
    </div>
  );
}

export default App;
