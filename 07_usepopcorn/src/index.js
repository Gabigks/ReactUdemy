import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Appv2";

// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		{/* <StarRating maxRating={10} />
		<StarRating
			maxRating={5}
			color="red"
			size={24}
			messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
			defaultRating={3}
		/> */}
	</React.StrictMode>
);
