import React, { useState } from 'react';
import './styles/Quiz.css';
import Video from './images/video6.mp4';
import Quote1 from './images/quote1.jpg';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
export default function Quiz6 () {
	const questions = [
		{   
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was Karna’s charioteer in the war',
			answerOptions: [
				{ answerText: 'Shalya', isCorrect: true},
				{ answerText: 'Krishna', isCorrect: false },
				{ answerText: 'Shakuni ', isCorrect: false },
				{ answerText: 'Satyaki ', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'In the battle field a great warrior sent the fatal arrows which period Bheeshma. Who was he?',
			answerOptions: [
				{ answerText: 'Krishna ', isCorrect: false },
				{ answerText: 'Arjuna ', isCorrect: true },
				{ answerText: 'Yudhistra ', isCorrect: false },
				{ answerText: 'Satyaki', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Which warrior on the Pandava side died on the first day on the war?',
			answerOptions: [
				{ answerText: 'Abhimanyu  ', isCorrect: false },
				{ answerText: 'Ghatotkacha', isCorrect: false  },
				{ answerText: 'Uttar  ', isCorrect: true},
				{ answerText: 'Yayustu', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the son of Arjuna’s grandson?',
			answerOptions: [
				{ answerText: 'Abhimanyu  ', isCorrect: false },
				{ answerText: 'Uttar ', isCorrect: false },
				{ answerText: 'Janamjaya', isCorrect: true },

			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Along with Krishna and Arjuna who also present on Arjuna’s chariot during the war?',
			answerOptions: [
				{ answerText: 'Brahma', isCorrect: false },
				{ answerText: 'Vishnu ', isCorrect: false },
				{ answerText: 'Hanuman ', isCorrect: true},
				{ answerText: 'Mahesh', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Book said by Lord Krishna is called as?',
			answerOptions: [
				{ answerText: 'Vishnu Puran', isCorrect: false },
				{ answerText: ' Krishna Puran       ', isCorrect: false },
				{ answerText: 'Gita', isCorrect: true },
				{ answerText: 'Vishnu Leela', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who had boon to select their death?',
			answerOptions: [
				{ answerText: 'Duryodhana  ', isCorrect: false },
				{ answerText: 'Bhishma ', isCorrect: true },
				{ answerText: 'Dronacharya', isCorrect: false },
				{ answerText: 'Karna', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Running commentary of Mahabharata War was given to Dhritrashtra by?',
			answerOptions: [
				{ answerText: 'Ajay 	', isCorrect: false },
				{ answerText: 'Vidur', isCorrect: false },
				{ answerText: 'Sanjay ', isCorrect: true },
				{ answerText: 'Shakuni', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was fighting against the Pandavas in the war?',
			answerOptions: [
				{ answerText: 'Virat', isCorrect: false },
				{ answerText: 'Drupad  ', isCorrect: false  },
				{ answerText: 'Drishtadyumna', isCorrect: false },
				{ answerText: 'Drona  ', isCorrect: true },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the Maharathi in Pandavas?',
			answerOptions: [
				{ answerText: 'Shikandini', isCorrect: false },
				{ answerText: 'Virat ', isCorrect: true },
				{ answerText: 'Shakuni  ', isCorrect: false },
				{ answerText: 'Drishtaketu', isCorrect: false },
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
