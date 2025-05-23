import React from "react";
import { Link } from "react-router-dom";

import "./style/resume.css";

const Resume = (props) => {
	const { date, title, description, link } = props;

	const description_list = () => (
		<ul>

			{description.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
	
	return (
		<React.Fragment>
			<div className="resume">
				<div className="resume-left-side">
					<div className="resume-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="resume-right-side">
						<div className="resume-title">{title}</div>
						<div className="resume-description">{description_list()}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Resume;
