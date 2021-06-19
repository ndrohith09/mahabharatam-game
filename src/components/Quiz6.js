import React, { useState } from 'react';
import './styles/Quiz.css';
import Quote1 from './images/quote1.jpg';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
export default function Quiz6 () {
	const questions = [
		{   
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'First where is the Mahabodhi temple located at',
			answerOptions: [
				{ answerText: 'Prayaga', isCorrect: false },
				{ answerText: 'Varanasi', isCorrect: false },
				{ answerText: 'Gaya', isCorrect: false },
				{ answerText: 'Bodh Gaya', isCorrect: true },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Name the lord who is worshipped in Maha bodhi temple',
			answerOptions: [
				{ answerText: 'Lord Venkateswara', isCorrect: false },
				{ answerText: 'Lord Rama', isCorrect: false },
				{ answerText: 'Lord Buddha', isCorrect: true },
				{ answerText: 'Lord Krishna', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'People of which religion come to worship at the Maha bodhi Temple',
			answerOptions: [
				{ answerText: 'Buddhists', isCorrect: false },
				{ answerText: 'Hindus', isCorrect: false },
				{ answerText: 'Christians', isCorrect: false },
				{ answerText: 'Muslims', isCorrect: false },
				{ answerText: 'Both Hindus and Buddhists', isCorrect: true },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Which qualities have Lord buddha attained by meditating under the Maha bodhi tree',
			answerOptions: [
				{ answerText: 'Super Powers', isCorrect: false },
				{ answerText: 'Anger and Rage', isCorrect: false },
				{ answerText: 'Pride and Negligence', isCorrect: false },
				{ answerText: 'Wisdom and Enlightenment', isCorrect: true },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Towards which side is the Mahabodhi Temple constructed with respect to the Mahabodhi Tree',
			answerOptions: [
				{ answerText: 'North', isCorrect: false },
				{ answerText: 'South', isCorrect: false },
				{ answerText: 'East', isCorrect: true },
				{ answerText: 'West', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What is the believed time of construction of the main temple',
			answerOptions: [
				{ answerText: '2nd century CE', isCorrect: true },
				{ answerText: '15th century CE', isCorrect: false },
				{ answerText: '18th century CE', isCorrect: false },
				{ answerText: '8th century CE', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'When did the major restorations took place at the Maha bodhi temple took place?',
			answerOptions: [
				{ answerText: '16th century', isCorrect: false },
				{ answerText: '19th century', isCorrect: true  },
				{ answerText: '15th century', isCorrect: false },
				{ answerText: '18th century', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: '.During which empire did lord buddha attained his Enlightenment?',
			answerOptions: [
				{ answerText: 'The Mauryan Empire', isCorrect: true },
				{ answerText: 'The Kakatiya Empire', isCorrect: false  },
				{ answerText: 'The Vijayanagara Empire', isCorrect: false },
				{ answerText: 'The Mughal empire', isCorrect: false },
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
        <h1 className="main-title1">Level 6</h1>

        <div className="quizimg">
            <img src={Quote1} alt="image" />
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
					<a href="/video2" style={{textDecoration:"none"}} ><FcAdvance /> Level 7 </a>
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
