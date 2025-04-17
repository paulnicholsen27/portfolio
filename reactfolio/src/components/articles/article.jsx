import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	console.log("description prop:", description);
	const description_list = () => (
		<ul>

			{description.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
	
	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description_list()}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Article;
