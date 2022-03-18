import React from "react";

//imports from ./ to this
import Card from "./Card";
import Jumbotron from "./jumbotron";

const pageContent = () => {
	return (
		<div className="container">
			<Jumbotron />
			<div className="container d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default pageContent;
