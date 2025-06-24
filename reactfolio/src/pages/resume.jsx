import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Resume from "../components/resume/resume";

import INFO from "../data/user";
import SEO from "../data/seo";
import myResumes from "../data/resume";

import "./styles/resume.css";

const ResumePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="resume-logo-container">
						<div className="resume-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="resume-main-container">
						<div className="title resume-title">
							{INFO.resume.title}
						</div>
						<div className="subtitle resume-subtitle">
						{INFO.resume.descriptionText}
						<a href={INFO.resume.descriptionLink.href}>
							{INFO.resume.descriptionLink.text}
						</a>
						</div>

						<div className="resume-container">
							<div className="resume-wrapper">
								{myResumes.map((resume, index) => (
									<div
										className="resume-resume"
										key={(index + 1).toString()}
									>
										<Resume
											key={(index + 1).toString()}
											date={resume().date}
											title={resume().title}
											description={resume().description}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ResumePage;
