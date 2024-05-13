import { useState } from "react";

const initialUsers = [
	{
		id: 118836,
		name: "Clark",
		image: "https://i.pravatar.cc/48?u=118836",
		posts: [
			{
				id: 1,
				title: "Post 1 Clark",
				body: "Post 1 Clark Body",
			},
			{
				id: 2,
				title: "Post 2 Clark",
				body: "Post 2 Clark Body",
			},
		],
	},
	{
		id: 933372,
		name: "Sarah",
		image: "https://i.pravatar.cc/48?u=933372",
		posts: [
			{
				id: 1,
				title: "Post 1 Sarah",
				body: "Post 1 Sarah Body",
			},
			{
				id: 2,
				title: "Post 2 Sarah",
				body: "Post 2 Sarah Body",
			},
		],
	},
	{
		id: 499476,
		name: "Anthony",
		image: "https://i.pravatar.cc/48?u=499476",
		posts: [
			{
				id: 1,
				title: "Post 1 Anthony",
				body: "Post 1 Anthony Body",
			},
			{
				id: 2,
				title: "Post 2 Anthony",
				body: "Post 2 Anthony Body",
			},
		],
	},
];

export default function App() {
	const [users, setUsers] = useState(initialUsers);

	return (
		<div className="app-container">
			<UserList users={users} />
			<PostsList />
		</div>
	);
}

function UserList({ users }) {
	return (
		<div className="user-list">
			{users.map((user) => (
				<div className="user-container" key={user.id}>
					<div className="user-info">
						<h1>{user.name}</h1>
						<img
							className="user-image"
							src={user.image}
							alt={user.name}
						/>
					</div>
					<div className="user-posts">
						{user.posts.map((post) => (
							<Post
								key={post.id}
								title={post.title}
								body={post.body}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

function PostsList() {
	// Your PostsList component code...
}

function Post({ title, body }) {
	return (
		<div className="post">
			<h2>{title}</h2>
			<p>{body}</p>
			<Button onClick={() => alert("Deleting post...")}>
				Delete Post
			</Button>
		</div>
	);
}

function Button({ children, onClick }) {
	return (
		<button className="button" onClick={onClick}>
			{children}
		</button>
	);
}
