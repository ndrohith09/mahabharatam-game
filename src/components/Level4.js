import './styles/Instructionpage.css';
import { Table } from 'react-bootstrap';
import { FcRating , FcAbout  } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
import { GiAxeSword ,GiCavalry ,GiShieldBash } from "react-icons/gi";
function Level4() {
  return (
    <div className="Instructionpage">
      <div className="contentbox">
        <h1> <FcAbout /> INSTRUCTIONS for LEVEL-4</h1>
        <br />
        <div className="instruct">
          <h3>	Correct answers above 5 questions- 80 <FcRating /> coins 10 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 7 questions- 100 <FcRating /> coins 15 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 9 questions- 120 <FcRating /> coins 25 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers 10 questions- 200 <FcRating /> coins 30 <GrDiamond /> diamonds</h3>
          <h3>	In order to unlock the Characters you have to gain minimum 300 <FcRating /> coins 25 <GrDiamond /> diamonds</h3>
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
            <td>Dronacharya</td> 
            <td>300</td>
            <td>25</td>
          </tr>
          <tr>           
          <td>Vidura</td>
            <td>350</td>
            <td>30</td>
          </tr>
          <tr>           
          <td>Abhimanyu</td>
            <td>400</td>
            <td>35</td>
          </tr>       
          <tr>           
          <td>Sahadeva</td>
            <td>500</td>
            <td>40</td>
          </tr>
          <tr>           
          <td>Bheeshma</td>
            <td>1000</td>
            <td>50</td>
          </tr>          
        </tbody>
      </Table>
      <br />
      <div className="instruct">
          <h3>	In order to unlock the Battle-field you have to gain minimum 1000 <FcRating />coins and 25 <GrDiamond /> diamonds.</h3>
          <h3>	In order to gain weapons you have to gain minimum 300 <FcRating /> coins 10 <GrDiamond /> diamonds.</h3>
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
            <td>Tizona</td> 
            <td>80</td>
            <td>10</td>
          </tr>
          <tr>           
          <td>Two Bows</td>
            <td>100</td>
            <td>10</td>
          </tr>
          <tr>           
          <td>Two Gadas</td>
            <td>120</td>
            <td>15</td>
          </tr>       
          <tr>           
          <td>Three Swords</td>
            <td>200</td>
            <td>15</td>
          </tr>
          <tr>           
          <td>Two Vajras</td>
            <td>250</td>
            <td>20</td>
          </tr>          
        </tbody>
      </Table>
      <br />      
        <div className="instruct">
          <h3>When you complete the puzzle part you will be have some coins and diamonds and with those you can proceed with the gaming part</h3>
          <h3>Where you will have some life line with 90% and you have to fight with enemies and by defeating them you can reach the final enemy for the Level 4</h3>
          <h3>After that you will be promoted to the next Level-5</h3>
         
        </div>
        <a href="/quiz4">Start Battle <GiShieldBash style={{color:"black"}}/> </a>
      </div>
    </div>
  );
}

export default Level4;
