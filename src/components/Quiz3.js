import React, { useState } from 'react';
import './styles/Quiz.css';
import Video from './images/video3.mp4';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
export default function Quiz3() {
	const questions = [
		{   
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Janamejaya was the son of?',
			answerOptions: [
				{ answerText: 'Karna', isCorrect: false },
				{ answerText: 'Parikshit', isCorrect: true },
				{ answerText: 'Kritverna', isCorrect: false },
				{ answerText: 'Abhimanyu', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Shikandi is the son of?',
			answerOptions: [
				{ answerText: 'Drupada', isCorrect: true },
				{ answerText: 'Pandu', isCorrect: false },
				{ answerText: 'Puru', isCorrect: false },
				{ answerText: 'Vrihanta', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Younger son of Satyavati was?',
			answerOptions: [
				{ answerText: 'Bhishma', isCorrect: false },
				{ answerText: 'Chitrvirya', isCorrect: false },
				{ answerText: 'Vichitraveerya', isCorrect: true }

			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Vikarna was the son of?',
			answerOptions: [
				{ answerText: 'Radhey', isCorrect: false },
				{ answerText: 'Gandhari', isCorrect: true },
				{ answerText: 'Druapdhi', isCorrect: false },
				{ answerText: 'Karna', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who is the consort of Lord Balarama?',
			answerOptions: [
				{ answerText: 'Indumati', isCorrect: false },
				{ answerText: 'Nahusha', isCorrect: false },
				{ answerText: 'Revati', isCorrect: true },
				{ answerText: 'Manasa', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Which is not an another name of Bhishma?',
			answerOptions: [
				{ answerText: 'Gauranga', isCorrect: false },
				{ answerText: 'Saptu-Vasu', isCorrect: true },
				{ answerText: 'Mahamahima', isCorrect: false },
				{ answerText: 'Shevataveera', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Great hero who lived a life such a way that today he is another name for generosity and loyality?',
			answerOptions: [
				{ answerText: 'Bhishma', isCorrect: false },
				{ answerText: 'Sahadeva', isCorrect: false  },
				{ answerText: 'Arjuna', isCorrect: false },
				{ answerText: 'Karna', isCorrect: true },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who amoung the given was not the Kunti’s daughter-in-law?',
			answerOptions: [
				{ answerText: 'Uttara', isCorrect: true },
				{ answerText: 'Ulupi', isCorrect: false  },
				{ answerText: 'Hidmbi', isCorrect: false },
				{ answerText: 'Chirangadha', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was the son of Bhima and Hidimba?',
			answerOptions: [
				{ answerText: 'Barbarik', isCorrect: false },
				{ answerText: 'Ghatotkacha', isCorrect: true  },
				{ answerText: 'Abhimanyu', isCorrect: false },

			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Kunti’s son Karna also known with this name?',
			answerOptions: [
				{ answerText: 'Kunthey', isCorrect: false },
				{ answerText: 'Radhey', isCorrect: true  },
				{ answerText: 'Kaurav', isCorrect: false },
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
        <h1 className="main-title1">Level 3</h1>

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
					<a href="/instruction4" style={{textDecoration:"none"}} ><FcAdvance /> Level 4 </a>
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
