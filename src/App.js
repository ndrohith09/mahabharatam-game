import './App.css';
import {Route , Switch , BrowserRouter as Router } from 'react-router-dom';
import Instructionpage from './components/Level1';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Jumbotron, Container } from 'react-bootstrap';
import Video from './components/images/video5.mp4';
import Img  from './components/images/startpage.jpeg'; 
import Quiz from './components/Quiz1';
import Quiz2 from './components/Quiz2';
import Level2 from './components/Level2';
import Quiz3 from './components/Quiz3';
import Level3 from './components/Level3';
import Video1 from './components/Video1';
import Quiz4 from './components/Quiz4';
import Level4 from './components/Level4';
import Quiz5 from './components/Quiz5';
import Level5 from './components/Level5';
import Quiz6 from './components/Quiz6';
import Level6 from './components/Level6';
import Video2 from './components/Video2';
import Quiz7 from './components/Quiz7';
import Level7 from './components/Level7';
import Quiz8 from './components/Quiz8';
import Level8 from './components/Level8';
import Quiz9 from './components/Quiz9';
import Level9 from './components/Level9';
import Video3 from './components/Video3';

function App() {
  return (
    <Router>
      <Switch>
        <Router exact path ="/">
        <div className="App">
        <div class="mid">
             {/* <video autoPlay loop muted>
                <source class="embed-responsive" src={Video} type="video/mov" />
             </video> */}
             <img src={Img} />
         </div> 
         <h1 className="main-title">Mahabharatam</h1>
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

    <Router  path="/video1">
      <Video1 />
    </Router>

    <Router  path="/instruction4">
      <Level4 />
    </Router>
    <Router  path="/quiz4">
      <Quiz4 />
    </Router>

    <Router  path="/instruction5">
      <Level5 />
    </Router>
    <Router  path="/quiz5">
      <Quiz5 />
    </Router>

    
    <Router  path="/instruction6">
      <Level6 />
    </Router>
    <Router  path="/quiz6">
      <Quiz6 />
    </Router>

    <Router  path="/video2">
      <Video2 />
    </Router>
    
    <Router  path="/instruction7">
      <Level7 />
    </Router>
    <Router  path="/quiz7">
      <Quiz7 />
    </Router>

    
    <Router  path="/instruction8">
      <Level8 />
    </Router>
    <Router  path="/quiz8">
      <Quiz8 />
    </Router>
    
    <Router  path="/instruction9">
      <Level9 />
    </Router>
    <Router  path="/quiz9">
      <Quiz9 />
    </Router>

    <Router  path="/video3">
      <Video3 />
    </Router>

    </Switch>
    </Router>
  );
}

export default App;
