import './styles/Instructionpage.css';
import { Table } from 'react-bootstrap';
import { FcRating , FcAbout  } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
import { GiAxeSword ,GiCavalry ,GiShieldBash } from "react-icons/gi";
function Level6() {
  return (
    <div className="Instructionpage">
      <div className="contentbox">
        <h1> <FcAbout /> INSTRUCTIONS for LEVEL-6</h1>
        <br />
        <div className="instruct">
          <h3>	Correct answers above 5 questions- 400 <FcRating /> coins 50 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 7 questions- 450 <FcRating /> coins 75 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 9 questions- 550 <FcRating /> coins 80 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers 10 questions- 700 <FcRating /> coins 300 <GrDiamond /> diamonds</h3>
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
            <td>Ashwatthama</td> 
            <td>800</td>
            <td>75</td>
          </tr>
          <tr>           
          <td>Dushasana</td>
            <td>900</td>
            <td>80</td>
          </tr>
          <tr>           
          <td>Yudhistira</td>
            <td>1000</td>
            <td>90</td>
          </tr>               
        </tbody>
      </Table>
      <br />
      <div className="instruct">
          <h3>	In order to unlock the Battle-field you have to gain minimum 2500 <FcRating />coins and 50 <GrDiamond /> diamonds.</h3>
          <h3>	In order to gain weapons you have to gain minimum 400 <FcRating /> coins 40 <GrDiamond /> diamonds.</h3>
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
            <td>Nirvana</td> 
            <td>400</td>
            <td>40</td>
          </tr>
          <tr>           
          <td>Liberator</td>
            <td>450</td>
            <td>50</td>
          </tr>
          <tr>           
          <td>Two Tupsimati</td>
            <td>500</td>
            <td>65</td>
          </tr>       
          <tr>           
          <td>Brahmastra</td>
            <td>600</td>
            <td>85</td>
          </tr>          
        </tbody>
      </Table>
      <br />      
        <div className="instruct">
          <h3>When you complete the puzzle part you will be have some coins and diamonds and with those you can proceed with the gaming part</h3>
          <h3>Where you will have some life line with 150% and you have to fight with enemies and by defeating them you can reach the final enemy for the Level 6</h3>
          <h3>After that you will be promoted to the next Level-7</h3>
         
        </div>
        <a href="/quiz7">Start Battle <GiShieldBash style={{color:"black"}}/> </a>
      </div>
    </div>
  );
}

export default Level6;
