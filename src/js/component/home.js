import React from "react";

//Import other pages to this like imports from old eclipse.
import NavBar from "./navBar.js";
import PageContent from "./pageContent.js";
import Footer from "./footer.js";

//Home first component
const Home = () => {
	return (
		<>
			<div>
				<NavBar />
				<PageContent />
				<Footer />
			</div>
		</>
	);
};

export default Home;
