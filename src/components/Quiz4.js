import React, { useState } from 'react';
import './styles/Quiz.css';
import Quote1 from './images/quote1.jpg';
import Video from './images/video4.mp4';
import { FcCloseUpMode , FcRating ,FcAdvance } from 'react-icons/fc';
import { GrDiamond } from 'react-icons/gr';
export default function Quiz4 () {
	const questions = [
		{   
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who was Bhishma’s mother',
			answerOptions: [
				{ answerText: 'Saraswati', isCorrect: false },
				{ answerText: 'Laxmi  ', isCorrect: false },
				{ answerText: 'Ganga ', isCorrect: true },
				{ answerText: 'Satyawati', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'How many times did King Pandu get married',
			answerOptions: [
				{ answerText: 'Once  ', isCorrect: false },
				{ answerText: 'Twice', isCorrect: true },
				{ answerText: 'Thrice ', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Which is another name of Mahabharata',
			answerOptions: [
				{ answerText: 'Aranya Sanhar ', isCorrect: false },
				{ answerText: ' Shat Sahasra Samhita ', isCorrect: true },
				{ answerText: 'Krishnavatar ', isCorrect: false },
				{ answerText: 'Kuru Samhita', isCorrect: false },
				
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'In modern India, Kurukshetra was located at?',
			answerOptions: [
				{ answerText: 'Punjab', isCorrect: false },
				{ answerText: 'Haryana ', isCorrect: true},
				{ answerText: 'Himachal Pradesh   ', isCorrect: false },
				{ answerText: 'Uttar Pradesh', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who has penned down Mahabharata',
			answerOptions: [
				{ answerText: 'Lord Ganesha  ', isCorrect: true },
				{ answerText: 'Tulasidas', isCorrect: false },
				{ answerText: 'Valmiki   ', isCorrect: false },
				{ answerText: 'Vyas', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Name the rishi who cursed Pandu?',
			answerOptions: [
				{ answerText: 'Vyasa ', isCorrect:false},
				{ answerText: 'Valmiki ', isCorrect: false },
				{ answerText: 'Kindam', isCorrect: true },
				{ answerText: 'Durvasa', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'What was the name of the kingdom developed by the Pandavas',
			answerOptions: [
				{ answerText: 'Dwaraka', isCorrect: false },
				{ answerText: 'Avanti  ', isCorrect: false  },
				{ answerText: 'Indraprastha', isCorrect: true},
				{ answerText: 'Hasthinapur', isCorrect: false },
			],
		},
        {
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'Who vowed to kill Bhishma in her next birth?',
			answerOptions: [
				{ answerText: 'Ambika', isCorrect: false },
				{ answerText: 'Shikandi  ', isCorrect: false  },
				{ answerText: 'Amba ', isCorrect: true },
				{ answerText: 'Ambalika', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: 'At the time of Duryodhana birth, in the voice of which animal did he cry',
			answerOptions: [
				{ answerText: 'Ass ', isCorrect: true },
				{ answerText: 'Dog  ', isCorrect: false  },
				{ answerText: 'Wolf  ', isCorrect: false },
				{ answerText: 'Lion', isCorrect: false },
			],
		},
		{
            questiontitle: 'Mahabodhi Temple, Bihar',
			questionText: '.Who killed Eravan, the son of Arjuna and Ulupi?',
			answerOptions: [
				{ answerText: 'Abhimanyu ', isCorrect: false },
				{ answerText: 'Alambusha   ', isCorrect: true  },
				{ answerText: 'Chitrangada', isCorrect: false },

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
					<a href="/instruction5" style={{textDecoration:"none"}} ><FcAdvance /> Level 5 </a>
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
