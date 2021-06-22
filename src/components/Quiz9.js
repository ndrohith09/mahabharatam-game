import React, { useState } from 'react';
import './styles/Quiz.css';
import Video from './images/video9.mp4';
import Quote1 from './images/quote1.jpg';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
export default function Quiz9 () {
	const questions = [
		{   
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Name the daughter of Bhishmaka who was married to Lord Krishna',
			answerOptions: [
				{ answerText: 'Tulsi      ', isCorrect: false },
				{ answerText: 'Rukmini', isCorrect: true },
				{ answerText: 'Kalindi', isCorrect: false },
				{ answerText: 'Satya ', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the brother of Rukmini',
			answerOptions: [
				{ answerText: 'Jayadrath  ', isCorrect: false},
				{ answerText: 'Rukmi', isCorrect: true  },
				{ answerText: 'Bheeshma  ', isCorrect: false },
				{ answerText: ' Jarasandh', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'In Kurukshetra War, How many warriors each elephant could carry along with their weapons?',
			answerOptions: [
				{ answerText: '10 ', isCorrect: false },
				{ answerText: '7', isCorrect: true  },
				{ answerText: '8', isCorrect: false },
				{ answerText: '6', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who vowed to kill the evil Dushasana and drink his blood when he molested Draupadi?',
			answerOptions: [
				{ answerText: 'Bhima ', isCorrect: true },
				{ answerText: 'Arjuna  ', isCorrect: false },
				{ answerText: 'Nakul ', isCorrect: false},
				{ answerText: 'Sahadeva ', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Which Apsara wanted to marry Arjuna when he was in Indraloka',
			answerOptions: [
				{ answerText: 'Urvashi', isCorrect: true },
				{ answerText: 'Menaka ', isCorrect: false },
				{ answerText: 'Rambha  ', isCorrect: false },
				{ answerText: 'Tilottama', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was Bhishmaka?',
			answerOptions: [
				{ answerText: 'Krishna’s father-in-law      ', isCorrect: true },
				{ answerText: 'Jayadratha’s father-in-law    ', isCorrect: false },
				{ answerText: 'Duryodhana’s father-in-law ', isCorrect: false },
				{ answerText: 'Arjuna’s father-in-law', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who cursed Arjuna that he would have to spend a part of his life as a Eunch?',
			answerOptions: [
				{ answerText: 'Urvashi ', isCorrect: true },
				{ answerText: 'Menaka', isCorrect: false },
				{ answerText: 'Rambha  ', isCorrect: false },
				{ answerText: 'Tilottama', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who promised his teacher to fight from the weaker side?',
			answerOptions: [
				{ answerText: 'Bheeshma    ', isCorrect: false },
				{ answerText: 'Jarasandh ', isCorrect: false },
				{ answerText: 'Barbareek ', isCorrect: true },
				{ answerText: 'Jayadrath', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who died in Chakravyuh? ',
			answerOptions: [
				{ answerText: 'Barbareek ', isCorrect: false },
				{ answerText: 'Abhimanyu', isCorrect: true  },
				{ answerText: 'Arjun ', isCorrect: false },
				{ answerText: 'Ghatotkach', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Karna was born by the blessings of:',
			answerOptions: [
				{ answerText: 'Lord Fire ', isCorrect: false},
				{ answerText: 'Lord Brahm', isCorrect: false  },
				{ answerText: 'Lord Sun    ', isCorrect: true },
				{ answerText: 'Lord Shiva', isCorrect: false },
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
        <h1 className="main-title1">Level 9</h1>

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
					<a href="/video3" style={{textDecoration:"none"}} ><FcAdvance /> Next </a>
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
