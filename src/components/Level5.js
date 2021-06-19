import './styles/Instructionpage.css';
import { Table } from 'react-bootstrap';
import { FcRating , FcAbout  } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
import { GiAxeSword ,GiCavalry ,GiShieldBash } from "react-icons/gi";
function Level5() {
  return (
    <div className="Instructionpage">
      <div className="contentbox">
        <h1> <FcAbout /> INSTRUCTIONS for LEVEL-5</h1>
        <br />
        <div className="instruct">
          <h3>	Correct answers above 5 questions- 250 <FcRating /> coins 40 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 7 questions- 450 <FcRating /> coins 45 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 9 questions- 500 <FcRating /> coins 75 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers 10 questions- 500 <FcRating /> coins 100 <GrDiamond /> diamonds</h3>
          <h3>	In order to unlock the Characters you have to gain minimum 500 <FcRating /> coins 75 <GrDiamond /> diamonds</h3>
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
            <td>Karna</td> 
            <td>500</td>
            <td>60</td>
          </tr>
          <tr>           
          <td>Duryodhana</td>
            <td>450</td>
            <td>65</td>
          </tr>
          <tr>           
          <td>Bhima</td>
            <td>500</td>
            <td>75</td>
          </tr>               
        </tbody>
      </Table>
      <br />
      <div className="instruct">
          <h3>	In order to unlock the Battle-field you have to gain minimum 1500 <FcRating />coins and 35 <GrDiamond /> diamonds.</h3>
          <h3>	In order to gain weapons you have to gain minimum 300 <FcRating /> coins 30 <GrDiamond /> diamonds.</h3>
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
            <td>Two Terpsichore</td> 
            <td>300</td>
            <td>30</td>
          </tr>
          <tr>           
          <td>Kenkonken</td>
            <td>350</td>
            <td>30</td>
          </tr>
          <tr>           
          <td>Tupsimati</td>
            <td>400</td>
            <td>45</td>
          </tr>       
          <tr>           
          <td>Four Bows and Two Gadas</td>
            <td>500</td>
            <td>45</td>
          </tr>          
        </tbody>
      </Table>
      <br />      
        <div className="instruct">
          <h3>When you complete the puzzle part you will be have some coins and diamonds and with those you can proceed with the gaming part</h3>
          <h3>Where you will have some life line with 120% and you have to fight with enemies and by defeating them you can reach the final enemy for the Level 5</h3>
          <h3>After that you will be promoted to the next Level-6</h3>
         
        </div>
        <a href="/quiz5">Start Battle <GiShieldBash style={{color:"black"}}/> </a>
      </div>
    </div>
  );
}

export default Level5;
