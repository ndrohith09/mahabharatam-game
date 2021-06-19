import './styles/Instructionpage.css';
import { Table } from 'react-bootstrap';
import { FcRating , FcAbout  } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
import { GiAxeSword ,GiCavalry ,GiShieldBash } from "react-icons/gi";
function Level7() {
  return (
    <div className="Instructionpage">
      <div className="contentbox">
        <h1> <FcAbout /> INSTRUCTIONS for LEVEL-7</h1>
        <br />
        <div className="instruct">
          <h3>	Correct answers above 5 questions- 600 <FcRating /> coins 70 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 7 questions- 650 <FcRating /> coins 85 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 9 questions- 750 <FcRating /> coins 100 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers 10 questions- 1000 <FcRating /> coins 400 <GrDiamond /> diamonds</h3>
          <h3>	In order to unlock the Characters you have to gain minimum 800 <FcRating /> coins 75 <GrDiamond /> diamonds</h3>
        </div>
        <br />
        <Table striped bordered hover>
        <thead>
          <tr style={{fontSize:"20px"}}>            
            <th>Characters <GiCavalry/> </th>
            <th>Coins</th>
            <th>Diamonds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Arjuna</td> 
            <td>1500</td>
            <td>150</td>
          </tr>               
        </tbody>
      </Table>
      <br />
      <div className="instruct">
          <h3>	In order to unlock the Battle-field you have to gain minimum 2500 <FcRating />coins and 50 <GrDiamond /> diamonds.</h3>
          <h3>	In order to gain weapons you have to gain minimum 600 <FcRating /> coins 40 <GrDiamond /> diamonds.</h3>
      </div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr style={{fontSize:"20px"}}>            
            <th>Weapons And Shields <GiAxeSword/> </th>
            <th>Coins</th>
            <th>Diamonds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three Nirvana</td> 
            <td>600</td>
            <td>40</td>
          </tr>
          <tr>           
          <td>Two Liberator</td>
            <td>600</td>
            <td>50</td>
          </tr>
          <tr>           
          <td>Three Tupsimati</td>
            <td>650</td>
            <td>65</td>
          </tr>       
          <tr>           
          <td>Brahmastra</td>
            <td>700</td>
            <td>85</td>
          </tr>          
        </tbody>
      </Table>
      <br />      
        <div className="instruct">
          <h3>When you complete the puzzle part you will be have some coins and diamonds and with those you can proceed with the gaming part</h3>
          <h3>Where you will have some life line with 250% and you have to fight with enemies and by defeating them you can reach the final enemy for the Level 7</h3>
          <h3>After that you will be promoted to the next Level-8</h3>
         
        </div>
        <a href="/quiz8">Start Battle <GiShieldBash style={{color:"black"}}/> </a>
      </div>
    </div>
  );
}

export default Level7;
