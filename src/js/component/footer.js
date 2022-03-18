import React from "react";

var symbol = "Copyright \u00A9";
//const footer declaring whats inside of the footer {style}
const footer = () => {
	return (
		<div
			className="bg-dark mt-5"
			style={{
				height: "120px",
				display: "grid",
				justifyContent: "center",
				alignItems: "center",
				fontSize: "0.875em",
			}}>
			<p className="text-muted text-opacity-25">
				{symbol} This site is a exercise
			</p>
		</div>
	);
};

//exporting footer instead of export default function footer() to use arrow functions instead
export default footer;
