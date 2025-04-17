import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/resume.css";

const Resume = (props) => {
	const { title, description, date } = props;

	return (
		<React.Fragment>
			<div className="homepage-resume">
				<div className="homepage-resume-content">
					<div className="homepage-resume-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-resume-title">{title}</div>
					<div className="homepage-resume-description">
						{description}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
