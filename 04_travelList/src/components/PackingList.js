import { useState } from "react";
import Item from "./Item";

export default function PackingList({
	items,
	onDeleteItem,
	onToggleItem,
	onClearList,
}) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;

	if (sortBy === "input") sortedItems = items;

	if (sortBy === "description")
		sortedItems = items
			.slice()
			.sort((a, b) => a.desc.localeCompare(b.desc));

	if (sortBy === "packed")
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
						key={item.id}
					/>
				))}
			</ul>

			<div className="actions">
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="input">SORT BY INPUT</option>
					<option value="packed">SORT BY PACKED</option>
					<option value="description">SORT BY DESCRIPTION</option>
				</select>
				<button onClick={onClearList}>Clear list</button>
			</div>
		</div>
	);
}
