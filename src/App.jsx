import React, { useState } from 'react';
import "./App.css";
import questions from './JS/questions';

function App() {

	const [prevQuestion, setPrevQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [remark, setRemark] = useState('');

	const answerClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			if (score > 3) {
				setRemark('Very Good Result');
			}
			else{
				setRemark('Fair Result');
			}
				}
		const nextQuestion = prevQuestion + 1;
		if (nextQuestion < questions.length) {
			setPrevQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<>

		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<div>
					You scored {score}/{questions.length}
					</div>

					<div>
						<button>Done</button>
						{remark} result
					</div>
				</div>
			) : (
				<div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {prevQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[prevQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[prevQuestion].answerOptions.map((answerOption) => (
							<button key={answerOption.answerText} onClick={() => answerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</div>
			)}
		</div>
		
		</>
	);
}

export default App;

