import React, { useState } from 'react';
import './styles/Quiz.css';
import Quote1 from './images/quote1.jpg';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
import Video from '../components/images/video1.mp4';
export default function Quiz() {
	const questions = [
		{   
            
			questionText: 'Who gave Bhishma the boon that he would die only when he wished?',
			answerOptions: [
				{ answerText: 'Lord Krishna', isCorrect: false },
				{ answerText: 'Surya dev', isCorrect: false },
				{ answerText: 'Shantana', isCorrect: true },
			],
		},
		{
            
			questionText: 'Who was the daughter of Dhritarashtra?',
			answerOptions: [
				{ answerText: 'Drupadi', isCorrect: false },
				{ answerText: 'Dushala', isCorrect: true },
				{ answerText: 'Shikandi', isCorrect: false },
			],
		},
		{
            
			questionText: 'Let us start off with a straightforward one. The Great War lasted for _____ days of fighting.',
			answerOptions: [
				{ answerText: '13', isCorrect: false },
				{ answerText: '16', isCorrect: false },
				{ answerText: '18', isCorrect: true },
			],
		},
		{
            
			questionText: 'Who was King Santunus first wife?',
			answerOptions: [
				{ answerText: 'Arundathi   ', isCorrect: false },
				{ answerText: 'Ambika', isCorrect: false },
				{ answerText: 'Ganga', isCorrect: true },
			],
		},
        {
            
			questionText: 'Who recited the Mahabharata?',
			answerOptions: [
				{ answerText: 'Lord Ganesha', isCorrect: false },
				{ answerText: 'Veda Vyasa', isCorrect: true },
				{ answerText: 'Vishwamitra', isCorrect: false },
			],
		},
        {
            
			questionText: 'What were the names of Karnas foster parents?',
			answerOptions: [
				{ answerText: 'Adhiratha & Radha', isCorrect: true },
				{ answerText: 'Kunthi & Pandu', isCorrect: false },
				{ answerText: 'Dhritharashtra & Gandhari', isCorrect: false },
			],
		},
        {
            
			questionText: "What was Bheeshma's name when he was a young lad?",
			answerOptions: [
				{ answerText: 'Devavrata', isCorrect: true },
				{ answerText: 'Yudhishtira', isCorrect: false  },
				{ answerText: 'Parasurama', isCorrect: false },
			],
		},
        {
            
			questionText: 'Duryodhana and Arjuna both approached Krishna for help before the war began. Arjuna asked for Krishna himself to aid him. What did Duryodhana ask for?',
			answerOptions: [
				{ answerText: 'Akshohinis', isCorrect: false },
				{ answerText: 'Chariots', isCorrect: false  },
				{ answerText: 'Narayani Sena ', isCorrect: true },
			],
		},
		{
            
			questionText: 'What "Guru-Dakshina" did Drona ask from Ekalavya?',
			answerOptions: [
				{ answerText: 'Kingdom', isCorrect: false },
				{ answerText: 'Right thumb', isCorrect: true  },
				{ answerText: 'Left thumb ', isCorrect: false },
			],
		},
		{
            
			questionText: 'Who killed Dushasana?',
			answerOptions: [
				{ answerText: 'Arjuna', isCorrect: false },
				{ answerText: 'Sahadeva', isCorrect: false  },
				{ answerText: 'Bheema ', isCorrect: true },
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
        <h1 className="main-title1">Level 1</h1>

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
					<a href="/instruction2" style={{textDecoration:"none"}} ><FcAdvance /> Level 2 </a>
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
