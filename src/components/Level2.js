import './styles/Instructionpage.css';
import { Table } from 'react-bootstrap';
import { FcRating , FcAbout  } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
import { GiAxeSword ,GiCavalry ,GiShieldBash } from "react-icons/gi";
function Level2() {
  return (
    <div className="Instructionpage">
      <div className="contentbox">
        <h1> <FcAbout /> INSTRUCTIONS for LEVEL-2</h1>
        <br />
        <div className="instruct">
          <h3>	Correct answers above 5 questions- 50 <FcRating /> coins 3 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 7 questions- 70 <FcRating /> coins 5 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 9 questions- 100 <FcRating /> coins 7 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers 10 questions- 150 <FcRating /> coins 13 <GrDiamond /> diamonds</h3>
          <h3>	In order to unlock the Characters you have to gain minimum 200 <FcRating /> coins 10 <GrDiamond /> diamonds</h3>
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
            <td>Kichaka	</td> 
            <td>200</td>
            <td>10</td>
          </tr>
          <tr>           
          <td>Parashurama</td>
            <td>250</td>
            <td>12</td>
          </tr>
          <tr>           
          <td>Ghatotkacha</td>
            <td>300</td>
            <td>15</td>
          </tr>       
          <tr>           
          <td>Sanjaya</td>
            <td>450</td>
            <td>20</td>
          </tr>
          <tr>           
          <td>Dhritarashtra</td>
            <td>500</td>
            <td>25</td>
          </tr>          
        </tbody>
      </Table>
      <br />
      <div className="instruct">
          <h3>	In order to unlock the Battle-field you have to gain minimum 800 <FcRating />coins and 20 <GrDiamond /> diamonds.</h3>
          <h3>	In order to gain weapons you have to gain minimum 50 <FcRating /> coins 5 <GrDiamond /> diamonds.</h3>
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
            <td>Nagi</td> 
            <td>50</td>
            <td>5</td>
          </tr>
          <tr>           
          <td>Aymur</td>
            <td>100</td>
            <td>7</td>
          </tr>
          <tr>           
          <td>Yagrush</td>
            <td>150</td>
            <td>10</td>
          </tr>       
          <tr>           
          <td>Murglesi</td>
            <td>180</td>
            <td>12</td>
          </tr>
          <tr>           
          <td>Burtgang</td>
            <td>200</td>
            <td>15</td>
          </tr>          
        </tbody>
      </Table>
      <br />      
        <div className="instruct">
          <h3>When you complete the puzzle part you will be have some coins and diamonds and with those you can proceed with the gaming part</h3>
          <h3>Where you will have some life line with 70% and you have to fight with enemies and by defeating them you can reach the final enemy for the Level 2</h3>
          <h3>After that you will be promoted to the next Level-3</h3>
         
        </div>
        <a href="/quiz2">Start Battle <GiShieldBash style={{color:"black"}}/> </a>
      </div>
    </div>
  );
}

export default Level2;
