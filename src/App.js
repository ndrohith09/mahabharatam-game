import './App.css';
import {Route , Switch , BrowserRouter as Router } from 'react-router-dom';
import Instructionpage from './components/Instructionpage';
import Quiz from './components/Quiz1';
import Quiz2 from './components/Quiz2';
import Level2 from './components/Level2';
import Quiz3 from './components/Quiz3';
import Level3 from './components/Level3';
function App() {
  return (
    <Router>
      <Switch>
        <Router exact path ="/">
        <div className="App">

    hello
    <a href="instruction1"> Start the War</a>
        </div>
    </Router>
    <Router  path="/instruction1">
      <Instructionpage />
    </Router>
    <Router  path="/quiz1">
      <Quiz />
    </Router>

    <Router  path="/instruction2">
      <Level2 />
    </Router>
    <Router  path="/quiz2">
      <Quiz2 />
    </Router>

    <Router  path="/instruction3">
      <Level3 />
    </Router>
    <Router  path="/quiz3">
      <Quiz3 />
    </Router>

    </Switch>
    </Router>
  );
}

export default App;
