import React, { useState } from 'react';
import './styles/Quiz.css';
import Video from './images/video2.mp4';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
export default function Quiz2() {
	const questions = [
		{   
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'In all, how many sons or daughters did Kunti give birth to?',
			answerOptions: [
				{ answerText: '4', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the blind king?',
			answerOptions: [
				{ answerText: 'Pandu', isCorrect: false },
				{ answerText: 'Bhishma', isCorrect: false },
				{ answerText: 'Dhritarashtra', isCorrect: true },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What does the word Bheeshma mean?',
			answerOptions: [
				{ answerText: 'A Horrible man ', isCorrect: false },
				{ answerText: 'A Great Warrior    ', isCorrect: false },
				{ answerText: 'A man of a terrible oath', isCorrect: true },
				
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What were the names of the ornaments given to Karna by the Sun God?',
			answerOptions: [
				{ answerText: 'Shastras', isCorrect: false },
				{ answerText: 'Danur Bana', isCorrect: false },
				{ answerText: 'Kavacha & Kundala', isCorrect: true },

			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What were the names of Bheeshmas step brothers?',
			answerOptions: [
				{ answerText: 'Pandu', isCorrect: false },
				{ answerText: 'Chitrangada', isCorrect: false },
				{ answerText: 'Vichitraveerya', isCorrect: false },
				{ answerText: 'Both b & c', isCorrect: true },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Whom did Duryodhana trick into joining his side before the war?',
			answerOptions: [
				{ answerText: 'Drupada', isCorrect: false },
				{ answerText: 'Shalya', isCorrect: true },
				{ answerText: 'Ashwatthama', isCorrect: false },

			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who abducted Draupadi when Pandavas were in exile?',
			answerOptions: [
				{ answerText: 'Jarasandh', isCorrect: false },
				{ answerText: 'Jayadrath', isCorrect: true  },
				{ answerText: 'Hidimba', isCorrect: false },
				{ answerText: 'Yaksha', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was Laxman in Mahabharata?',
			answerOptions: [
				{ answerText: 'Son of Duryodhana', isCorrect: true },
				{ answerText: 'Son of Dushasana', isCorrect: false  },
				{ answerText: 'Son of Abhimanyu', isCorrect: false },
	
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the fourth avatar of Bramha?',
			answerOptions: [
				{ answerText: 'Dhronacharya', isCorrect: false },
				{ answerText: 'Kripacharya', isCorrect: true  },
				{ answerText: 'Durvasa', isCorrect: false },
				{ answerText: 'Vidura', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'At what age Arjuna died?',
			answerOptions: [
				{ answerText: '115 years 06 months', isCorrect: false },
				{ answerText: '125 years 02 months', isCorrect: true  },
				{ answerText: '133 years 05 months', isCorrect: false },
	
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
        <h1 className="main-title1">Level 2</h1>

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
					<a href="/instruction3" style={{textDecoration:"none"}} ><FcAdvance /> Level 3 </a>
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
