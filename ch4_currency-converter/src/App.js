// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
	const [curr1, setcurr1] = useState("USD");
	const [curr2, setcurr2] = useState("EUR");
	const [amount, setAmount] = useState(1);
	const [converted, setConverted] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		async function convert() {
			try {
				setIsLoading(true);
				const res = await fetch(
					`https://api.frankfurter.app/latest?amount=${amount}&from=${curr1}&to=${curr2}`,
					{ signal: controller.signal }
				);
				const data = await res.json();
				console.log(data.rates);
				setConverted(data.rates[curr2]);
				setIsLoading(false);
			} catch (err) {
				if (err.name === "AbortError") return;
			}
		}

		if (curr1 === curr2) return setConverted(amount);
		convert();

		return function () {
			controller.abort();
		};
	}, [amount, curr1, curr2]);

	return (
		<div>
			<input
				type="text"
				value={amount}
				onChange={(e) => setAmount(Number(e.target.value))}
				disabled={isLoading}
			/>
			<select
				value={curr1}
				onChange={(e) => setcurr1(e.target.value)}
				disabled={isLoading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<select
				value={curr2}
				onChange={(e) => setcurr2(e.target.value)}
				disabled={isLoading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<p>
				{converted} {curr2}
			</p>
		</div>
	);
}
