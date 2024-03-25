import { useState } from "react";
import "./App.css";

// const days = [
// 	"Domingo",
// 	"Segunda-feira",
// 	"Terça-feira",
// 	"Quarta-feira",
// 	"Quinta-feira",
// 	"Sexta-feira",
// 	"Sábado",
// ];

// var months = [
// 	"Jan",
// 	"Fev",
// 	"Mar",
// 	"Abr",
// 	"Mai",
// 	"Jun",
// 	"Jul",
// 	"Ago",
// 	"Set",
// 	"Out",
// 	"Nov",
// 	"Dec",
// ];

export default function App() {
	return (
		<div className="App">
			<Counter />
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);
	// const [date, setDate] = useState(new Date());

	// function addDays(days) {
	// 	setDate((currentDate) => {
	// 		const newDate = new Date(currentDate);
	// 		newDate.setDate(newDate.getDate() + days);
	// 		return newDate;
	// 	});
	// }

	// function lowerDays(days) {
	// 	setDate((currentDate) => {
	// 		const newDate = new Date(currentDate);
	// 		newDate.setDate(newDate.getDate() - days);
	// 		return newDate;
	// 	});
	// }

	const date = new Date("March 20 2024");
	date.setDate(date.getDate() + count);

	function iCounter() {
		setCount((c) => c + step);
		// addDays(step);
	}

	function dCounter() {
		setCount((c) => c - step);
		// lowerDays(step);
	}

	function handleReset() {
		setCount(0);
		setStep(1);
	}

	return (
		<div>
			<div>
				<input
					type="range"
					min="1"
					max="10"
					value={step}
					onChange={(e) => setStep(Number(e.target.value))}
				/>
				<span> Step: {step}</span>
			</div>

			<div>
				<button onClick={dCounter}>-</button>
				<input
					type="text"
					placeholder={count}
					value={count}
					onChange={(e) => setCount(+e.target.value)}
				/>
				<button onClick={iCounter}>+</button>
			</div>

			<p>
				<span>
					{count === 0
						? "Today is "
						: count > 0
						? `${count} days from today is `
						: `${Math.abs(count)} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>

			{/*Colocando a condicional para o estilo do botão reset*/}
			{/* <div>
				<button
					style={count !== 0 ? {} : { display: "none" }}
					onClick={handleReset}
				>
					Reset
				</button>
			</div> */}

			{/*Colocando a condicional para aparecer ou não o botão*/}
			{count !== 0 || step !== 1 ? (
				<div>
					<button onClick={handleReset}>Reset</button>
				</div>
			) : null}

			{/* <p>
				{count} dias a partir de hoje é {days[date.getDay()]}{" "}
				{months[date.getMonth()]} {date.getDate()} {date.getFullYear()}
			</p> */}
		</div>
	);
}
