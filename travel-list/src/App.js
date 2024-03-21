import { useState } from "react";

const initialItems = [
	{ id: 1, description: "Passport", quantity: 1, packed: false },
	{ id: 2, description: "Toothbrush", quantity: 2, packed: true },
	{ id: 3, description: "Underwear", quantity: 5, packed: false },
];

export default function App() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>🌴 Far away 💼</h1>;
}

function Form() {
	const [desc, setDesc] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!desc) return;

		const newItem = {
			desc,
			quantity,
			packed: false,
			id: Date.now(),
		};
		console.log(newItem);

		setDesc("");
		setQuantity(1);
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip? 😍</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

function PackingList() {
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (
					<Item item={item} key={item.id} />
				))}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
		</li>
	);
}

function Stats() {
	return (
		<footer className="stats">
			<em>
				💼 You have X items in your list, and you already packed Y (%)
			</em>
		</footer>
	);
}
