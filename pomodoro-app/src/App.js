import { Greeting } from './Home.js';
import { PomodoroMode } from './Home.js';
import "./App.css";

function App() {
  return (
    <body style={{backgroundColor: "#80160e"}}>
      <ul style={{color: "white" }}>
        <Greeting/>
      </ul>

      <PomodoroMode/>
    </body>

    
  );
}

export default App;
