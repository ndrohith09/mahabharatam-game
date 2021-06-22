import React, { useState } from 'react';
import './styles/Quiz.css';
import Video from './images/video8.mp4';
import Quote1 from './images/quote1.jpg';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
export default function Quiz8 () {
	const questions = [
		{   
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What was the name of Yudhishtira during his stay in agyaatavas',
			answerOptions: [
				{ answerText: 'Granthik ', isCorrect: false },
				{ answerText: ' Vallaba     ', isCorrect: false },
				{ answerText: 'Kank ', isCorrect: true },
				{ answerText: 'Brihannala', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What was the name of Draupadi during his stay in agyaatavas?',
			answerOptions: [
				{ answerText: 'Swaranga ', isCorrect: false },
				{ answerText: 'Sairandhri  ', isCorrect: true  },
				{ answerText: 'Kank', isCorrect: false },
				{ answerText: 'Tantripal', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What was the name of Arjuna during his stay in agyaatavas?',
			answerOptions: [
				{ answerText: 'Brihannala   ', isCorrect: true },
				{ answerText: 'Vallaba', isCorrect: false  },
				{ answerText: 'Kank', isCorrect: false },
				{ answerText: 'Tantripal', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What was the name of Sahadeva during his stay in agyaatavas',
			answerOptions: [
				{ answerText: 'Granthik  ', isCorrect: false },
				{ answerText: 'Vallaba ', isCorrect: false },
				{ answerText: 'Kank', isCorrect: false },
				{ answerText: 'Tantripal ', isCorrect: true },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: ' What was the name of Bhima during his stay in agyaatavas',
			answerOptions: [
				{ answerText: ' Granthik     ', isCorrect: true },
				{ answerText: 'Vallaba', isCorrect: false },
				{ answerText: 'Kank  ', isCorrect: false },
				{ answerText: 'Tantripal', isCorrect: false },

			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Uttara was the princess of which Kingdom?',
			answerOptions: [
				{ answerText: 'Maladas', isCorrect: false },
				{ answerText: 'Chedi', isCorrect: false },
				{ answerText: 'Matsya', isCorrect: true },
				{ answerText: 'Magadha', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What was the name of the hunter who mistakenly shot an arrow that ended the Krishna Avatar',
			answerOptions: [
				{ answerText: 'Jara', isCorrect: true },
				{ answerText: ' Gira       ', isCorrect: false },
				{ answerText: 'Hara', isCorrect: false },
				{ answerText: 'Kara', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who curse caused the death of Lord Krishna and his clan',
			answerOptions: [
				{ answerText: 'Kunti', isCorrect: false},
				{ answerText: 'Gandhari', isCorrect: false },
				{ answerText: 'Durvasa', isCorrect: false },
				{ answerText: 'Both b and c', isCorrect: true},
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Name Krishna’s son who abducted the daughter of Duryodhana?',
			answerOptions: [
				{ answerText: 'Charu  ', isCorrect: false },
				{ answerText: 'Pradyumna', isCorrect: false  },
				{ answerText: 'Sochu', isCorrect: false },
				{ answerText: 'Samba', isCorrect: true },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Whom did Lord Krishna marry in process of recovering the Syamantaka Mani?',
			answerOptions: [
				{ answerText: 'Kalindi & Satya      ', isCorrect: false },
				{ answerText: 'Rukmini & Satyabhama     ', isCorrect: false  },
				{ answerText: 'Satyabhama & Jambavathi  ', isCorrect:true },
				{ answerText: 'Jambavathi & Kalindi ', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <>
        <h1 className="main-title">Mahabharatam</h1>
        <h1 className="main-title1">Level 8</h1>

        <div className="quizimg">
		<video autoPlay loop muted>
                <source class="embed-responsive" src={Video} type="video/mp4" />
        </video>
        </div>
        
		<div className='test1'>
			{showScore ? (
				<div className='score-section' style={{ fontSize:"30px"}}>
					<h3>You scored {score} out of {questions.length} </h3>
                    <br/>
                    
					<div className="Result">
					<h1><FcCloseUpMode /> Congratulations <FcCloseUpMode /></h1>
					<h2> You score {score*10} <GrDiamond /> Diamonds </h2>
					<h2> You score {score*20} <FcRating /> Gold Coins </h2>
					
					<br />
					<a href="/instruction9" style={{textDecoration:"none"}} ><FcAdvance /> Level 9 </a>
					</div>

				</div>
			) : (
				<>
					<div className='question-section'>
                   
						<div className='question-count'>
							<span style={{ fontSize:"40px"}}>Question {currentQuestion + 1}/{questions.length}</span>
						</div>
						<div className='question-text' style={{ fontSize:"28px"}}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section' >
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button style={{ fontSize:"30px"}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
                    
					</div>
				</>
			)}
		</div>

        </>
	);
}
