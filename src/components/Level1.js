import './styles/Instructionpage.css';
import { Table } from 'react-bootstrap';
import { FcRating , FcAbout  } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
import { GiAxeSword ,GiCavalry ,GiShieldBash } from "react-icons/gi";

function Instructionpage() {
  return (
    <div className="Instructionpage">
      <div className="contentbox">
        <h1> <FcAbout /> INSTRUCTIONS for LEVEL-1</h1>
        <br />
        <div className="instruct">
          <h3>	Correct answers above 5 questions- 30 <FcRating /> coins 2 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 7 questions- 50 <FcRating /> coins 3 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 9 questions- 70 <FcRating /> coins 5 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers 10 questions- 100 <FcRating /> coins 10 <GrDiamond /> diamonds</h3>
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
            <td>Basic Troup</td> 
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>           
          <td>Shalya</td>
            <td>150</td>
            <td>2</td>
          </tr>
          <tr>           
          <td>Uttar</td>
            <td>200</td>
            <td>5</td>
          </tr>       
          <tr>           
          <td>Virat</td>
            <td>250</td>
            <td>7</td>
          </tr>
          <tr>           
          <td>Drupada</td>
            <td>300</td>
            <td>10</td>
          </tr>          
        </tbody>
      </Table>
      <br />
      <div className="instruct">
          <h3>	In order to unlock the Battle-field you have to gain minimum 500 <FcRating />coins and 15 <GrDiamond /> diamonds.</h3>
          <h3>	In order to gain weapons you have to gain minimum 80 <FcRating /> coins 2 <GrDiamond /> diamonds.</h3>
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
            <td>Basic Sword</td> 
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>           
          <td>Arrow</td>
            <td>80</td>
            <td>2</td>
          </tr>
          <tr>           
          <td>Bow</td>
            <td>120</td>
            <td>5</td>
          </tr>       
          <tr>           
          <td>Spear</td>
            <td>150</td>
            <td>7</td>
          </tr>
          <tr>           
          <td>Gada</td>
            <td>180</td>
            <td>9</td>
          </tr>          
        </tbody>
      </Table>
      <br />      
        <div className="instruct">
          <h3>When you complete the puzzle part you will be have some coins and diamonds and with those you can proceed with the gaming part</h3>
          <h3>Where you will have some life line with 50% and you have to fight with enemies and by defeating them you can reach the final enemy for the Level 1</h3>
          <h3>After that you will be promoted to the next Level-2</h3>
         
        </div>
        <a href="/quiz1">Start Battle <GiShieldBash style={{color:"black"}}/> </a>
      </div>
    </div>
  );
}

export default Instructionpage;
