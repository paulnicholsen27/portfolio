import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Chatbot from "./chatbot.jsx";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/chatbot.css";

const ChatbotPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "chatbot");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Chatbot | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="chatbot" />
				<div className="content-wrapper">
					<div className="chatbot-logo-container">
						<div className="chatbot-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="chatbot-container">
						<div className="title chatbot-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<Chatbot />
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ChatbotPage;
