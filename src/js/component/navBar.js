import React from "react";

//navigation bar arrowe function function
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>

				<div className=" my-2 my-lg-0" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link disabled" href="#">
							About
						</a>
						<a className="nav-item nav-link disabled" href="#">
							Services
						</a>
						<a className="nav-item nav-link disabled" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
