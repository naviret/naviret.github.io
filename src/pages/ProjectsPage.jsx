import React from 'react';
import './ProjectsPage.css';
import bash from '../assets/icons/bash-drawn.png';
import PageHeader from '../components/PageHeader';
import Project from '../components/Project';
import BackButton from '../components/BackButton';
import ProjectsData from '../static/myinfo/ProjectsData';

const proj = [{ line: 'skills = {"skill1", "skill2",  "skill3"}' }];

function formatSkills(skillsArray) {
	const formattedSkills = skillsArray.map((skill) => `"${skill}"`).join(', ');
	return `skills = {${formattedSkills}}`;
}

function ProjectsPage() {
	return (
		<div className='projects-page'>
			<div className='projects-heading'>
				<BackButton />
				<div className='projects-page-title'>
					<PageHeader name='Projects' />
				</div>
			</div>
			<div className='projects-container'>
				{ProjectsData.map((project, index) => (
					<Project
						key={index}
						width={project.width}
						title={project.title}
						link={project.link}
						img={project.img}
						imgAlt={project.imgAlt}
						skills={[{ line: formatSkills(project.skills) }]}
						description={project.description}
					/>
				))}
			</div>
		</div>
	);
}

export default ProjectsPage;
