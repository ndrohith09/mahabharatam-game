import './styles/Instructionpage.css';
import { Table } from 'react-bootstrap';
import { FcRating , FcAbout  } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
import { GiAxeSword ,GiCavalry ,GiShieldBash } from "react-icons/gi";
function Level9() {
  return (
    <div className="Instructionpage">
      <div className="contentbox">
        <h1> <FcAbout /> INSTRUCTIONS for LEVEL-9</h1>
        <br />
        <div className="instruct">
          <h3>	Correct answers above 5 questions- 800 <FcRating /> coins 100 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 7 questions- 900 <FcRating /> coins 150 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers above 9 questions- 1500 <FcRating /> coins 200 <GrDiamond /> diamonds</h3>
          <h3>	Correct answers 10 questions- 3000 <FcRating /> coins 500 <GrDiamond /> diamonds</h3>
        </div>

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
            <td>Lord Krishna</td> 
            <td>900</td>
            <td>5000</td>
          </tr>                        
        </tbody>
      </Table>
      <div className="instruct">
          <h3>	In order to unlock the Battle-field you have to gain minimum 4000 <FcRating /> coins 150 <GrDiamond /> diamonds</h3>
          <h3>	In order to unlock the weapons you have to gain minimum 1000 <FcRating /> coins 200 <GrDiamond /> diamonds</h3>
        </div>
        <br />
        <Table striped bordered hover>
        <thead>
          <tr style={{fontSize:"20px"}}>            
            <th>Weapons And Shields<GiCavalry/> </th>
            <th>Coins</th>
            <th>Diamonds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three Brahmastras</td> 
            <td>1500</td>
            <td>500</td>
          </tr>               

          <tr>
            <td>Gastraphetes</td> 
            <td>1000</td>
            <td>350</td>
          </tr>               

          <tr>
            <td>Death Penality</td> 
            <td>1000</td>
            <td>250</td>
          </tr>               

          <tr>
            <td>Conquerer</td> 
            <td>1000</td>
            <td>200</td>
          </tr>               

        </tbody>
      </Table>
      <br />      
        <div className="instruct">
          <h3>When you complete the puzzle part you will be have some coins and diamonds and with those you can proceed with the gaming part</h3>
          <h3>Where you will have some life line with 1000% and you have to fight with enemies and by defeating them you can reach the final enemy for the Level 9</h3>
          <h3>After that you will be promoted to the next Level-10</h3>
          <h3>	So, like these 9 levels we will be having another more 9 levels.</h3>
         
        </div>
        <a href="/quiz9">Start Battle <GiShieldBash style={{color:"black"}}/> </a>
      </div>
    </div>
  );
}

export default Level9;
