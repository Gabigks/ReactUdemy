import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
	{
		skill: "HTML+CSS",
		level: "advanced",
		color: "#2662EA",
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "#EFD81D",
	},
	{
		skill: "Web Design",
		level: "advanced",
		color: "#C3DCAF",
	},
	{
		skill: "Git and GitHub",
		level: "intermediate",
		color: "#E84F33",
	},
	{
		skill: "React",
		level: "advanced",
		color: "#60DAFB",
	},
	{
		skill: "Svelte",
		level: "beginner",
		color: "#FF3B00",
	},
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				{/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return (
		<img
			src="https://avatars.githubusercontent.com/u/104871952?s=400&u=0b3611f8a41fc4196ce1fa154bf1979b217a0095&v=4"
			alt="Profile"
			className="avatar"
		></img>
	);
}

function Intro() {
	return (
		<div className="data">
			<h1>Gabriel Kolling</h1>
			<p>
				Programador apaixonado por tecnologia, sempre em busca de
				soluções criativas para desafios complexos. Amante do código
				limpo e das últimas tendências em desenvolvimento. Comprometido
				em transformar ideias em realidade digital.
			</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((skill) => (
				<Skill skillObj={skill} key={skill.skill} />
			))}
		</div>
	);
}

function Skill({ skillObj }) {
	return (
		<div className="skill" style={{ backgroundColor: skillObj.color }}>
			<span>{skillObj.skill}</span>
			<span>
				{skillObj.level === "begginer" && "👶"}
				{skillObj.level === "intermediate" && "👍"}
				{skillObj.level === "advanced" && "💪"}
			</span>
		</div>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
