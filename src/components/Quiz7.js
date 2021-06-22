import React, { useState } from 'react';
import './styles/Quiz.css';
import Quote1 from './images/quote1.jpg';
import Video from './images/video7.mp4';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
export default function Quiz7 () {
	const questions = [
		{   
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the first commander in Chief of the Kauravas Army?',
			answerOptions: [
				{ answerText: 'Drona', isCorrect: false },
				{ answerText: 'Ashvathama', isCorrect: false },
				{ answerText: 'Karna', isCorrect: false },
				{ answerText: 'Bheeshma', isCorrect: true },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the last commander in Chief of the Kauravas Army?',
			answerOptions: [
				{ answerText: 'Bheeshma', isCorrect: false },
				{ answerText: 'Drona', isCorrect: false  },
				{ answerText: 'Karna', isCorrect: false },
				{ answerText: 'Ashvathama', isCorrect: true },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Arjuna was shown the Lord’s Vishwaroopa or Dive form by?',
			answerOptions: [
				{ answerText: 'Laxmi', isCorrect: false },
				{ answerText: 'Lord Krishna', isCorrect: true  },
				{ answerText: 'Lord Shiva', isCorrect: false },
				{ answerText: 'Lord Indra', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the son of Bhima and Valandra who was the daughter of the King of Kasi?',
			answerOptions: [
				{ answerText: 'Sutasoma', isCorrect: false },
				{ answerText: 'Sudharman', isCorrect: false },
				{ answerText: 'Swaraga', isCorrect: true },
				{ answerText: 'Ghatotkacha', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Bhima killed the demon Hidimba who was the king of demons of which forest?',
			answerOptions: [
				{ answerText: 'Khaandav', isCorrect: true },
				{ answerText: 'Takshak', isCorrect: false },
				{ answerText: 'Mandook', isCorrect: false },
				{ answerText: 'Kamyaka', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Jarasandha was the emperor of:',
			answerOptions: [
				{ answerText: 'Maladas', isCorrect: false },
				{ answerText: 'Chedi', isCorrect: false },
				{ answerText: 'Matsya', isCorrect: false },
				{ answerText: 'Magadha', isCorrect: true },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What was the name of the brother of Bakasura killed by Bhima?',
			answerOptions: [
				{ answerText: 'Kimira', isCorrect: true },
				{ answerText: 'Kirmada', isCorrect: false },
				{ answerText: 'Kirmada', isCorrect: false },
				{ answerText: 'Kampasura', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the son of Arjuna and Chitrangada?',
			answerOptions: [
				{ answerText: 'Iravan', isCorrect: false },
				{ answerText: 'Babhruvahana', isCorrect: true },
				{ answerText: 'Abhimanyu', isCorrect: false },
				{ answerText: 'Srutakarma', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the son of Yudhishtira and Draupadi?',
			answerOptions: [
				{ answerText: 'Sutasoma', isCorrect: false },
				{ answerText: 'Srutakarma', isCorrect: false  },
				{ answerText: 'Satanika', isCorrect: false },
				{ answerText: 'Prativindhya', isCorrect: true },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What was the name of Bhima during his stay in agyaatavas?',
			answerOptions: [
				{ answerText: 'Granthik', isCorrect: false },
				{ answerText: 'Vallaba', isCorrect: true  },
				{ answerText: 'Kank', isCorrect: false },
				{ answerText: 'Tantripal', isCorrect: false },
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
        <h1 className="main-title1">Level 7</h1>

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
					<a href="/instruction8" style={{textDecoration:"none"}} ><FcAdvance /> Level 8 </a>
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
