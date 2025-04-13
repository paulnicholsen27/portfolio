import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, pirateMode, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		pirateMode ?
		<img src={INFO.main.pirate_logo} alt="logo" className="logo" width={width} /> :
		<img src={INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
