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

	function iStep() {
		setStep((s) => s + 1);
	}

	function dStep() {
		if (step > 1) setStep((s) => s - 1);
	}

	return (
		<div>
			<button onClick={dStep}>-</button>
			<span>Step: {step}</span>
			<button onClick={iStep}>+</button>

			<br />
			<button onClick={dCounter}>-</button>
			<span>Counter: {count}</span>
			<button onClick={iCounter}>+</button>

			<br />

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
			{/* <p>
				{count} dias a partir de hoje é {days[date.getDay()]}{" "}
				{months[date.getMonth()]} {date.getDate()} {date.getFullYear()}
			</p> */}
		</div>
	);
}
