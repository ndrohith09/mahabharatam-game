import React, { useState } from 'react';
import './styles/Quiz.css';
import Quote1 from './images/quote1.jpg';
import Video from './images/video5.mp4';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
export default function Quiz4 () {
	const questions = [
		{   
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Where did Dronacharya go when he was insulted by Drupada',
			answerOptions: [
				{ answerText: 'Gandharava', isCorrect: false },
				{ answerText: 'Madra  ', isCorrect: false },
				{ answerText: 'Hasthinapura ', isCorrect:true},
				{ answerText: 'Sindhu', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Karna learnt archey from a venerable sage by pretending to be a Bramhin. Who was this sage',
			answerOptions: [
				{ answerText: 'Bhishma ', isCorrect: false },
				{ answerText: 'Dronacharya', isCorrect: false },
				{ answerText: 'Parashurama ', isCorrect: true },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Friendship in the Mahabharata was defined by ',
			answerOptions: [
				{ answerText: 'Duryodhana-Karna', isCorrect:true },
				{ answerText: 'Arjuna-Krishna', isCorrect: false },
				{ answerText: 'Kunti-Gandhari     ', isCorrect: false },
				{ answerText: 'Draupadi-Subhadra', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'When king Vichitraveerya died, when finally gave an heir to the Kuru Clan',
			answerOptions: [
				{ answerText: 'Veda Vyasa ', isCorrect: true},
				{ answerText: 'Durvasa', isCorrect: false },
				{ answerText: 'Valmiki  ', isCorrect: false },
				{ answerText: 'Vishwamitra', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who killed Dhrishtadyumna',
			answerOptions: [
				{ answerText: 'Duryodhana   ', isCorrect: false },
				{ answerText: 'Dushasana ', isCorrect: false },
				{ answerText: 'Ashwatthama', isCorrect: true },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What was the name of Ekalavya’s father',
			answerOptions: [
				{ answerText: '2nd century CE', isCorrect: true },
				{ answerText: '15th century CE', isCorrect: false },
				{ answerText: '18th century CE', isCorrect: false },
				{ answerText: '8th century CE', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'As Karna walked away dejectedly after being cursed by Parashurama he killed an animal. What was it',
			answerOptions: [
				{ answerText: 'Dog', isCorrect: false },
				{ answerText: 'Cow  ', isCorrect: true  },
				{ answerText: 'Wolf', isCorrect: false },
				{ answerText: 'Tiger', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Name the venerable sage who fought Bheeshma',
			answerOptions: [
				{ answerText: 'Karna  ', isCorrect: false },
				{ answerText: 'Parashurama ', isCorrect: true  },
				{ answerText: 'Krishna', isCorrect: false },
				{ answerText: 'Mahadev', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'The ‘House of Lac’ by whom',
			answerOptions: [
				{ answerText: 'Vyasa', isCorrect: false },
				{ answerText: 'Purochana', isCorrect: true },
				{ answerText: 'Devavratha', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who did Duryodhana crown as “King of Anga”?',
			answerOptions: [
				{ answerText: 'Dushasana   ', isCorrect: false },
				{ answerText: 'Karna    ', isCorrect: true  },
				{ answerText: 'Arjuna', isCorrect: false },
				{ answerText: 'Shalya', isCorrect: false },
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
        <h1 className="main-title1">Level 4</h1>

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
					<a href="/instruction5" style={{textDecoration:"none"}} ><FcAdvance /> Level 6 </a>
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
