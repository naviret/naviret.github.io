import React from 'react';
import './ProjectsPage.css';
import bash from '../assets/icons/bash-drawn.png';
import PageHeader from '../components/PageHeader';
import Project from '../components/Project';
import BackButton from '../components/BackButton';

const proj = [{ line: 'skills = {"skill1", "skill2",  "skill3"}' }];

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
				<Project
					title='Project'
					link='https://github.com/naviret'
					img={bash}
					imgAlt='project-test'
					skills={proj}
					description={
						<>
							<b>BLABSL</b>DABLD
						</>
					}
				/>
			</div>
		</div>
	);
}

export default ProjectsPage;
