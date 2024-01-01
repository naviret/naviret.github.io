import React from 'react';
import './ExperiencesPage.css';
import PageHeader from '../components/PageHeader';
import BackButton from '../components/BackButton';
import Experience from '../components/Experience';
import ExperienceData from '../static/myinfo/ExperienceData';

function ExperiencesPage() {
	return (
		<div className='experiences-page'>
			<div className='experiences-heading'>
				<BackButton />
				<div className='experiences-page-title'>
					<PageHeader name='Experiences' />
				</div>
			</div>
			<div experiences-container>
				{ExperienceData.map((experience, index) => (
					<Experience
						title={experience.title}
						jobTitle={experience.jobTitle}
						date={experience.date}
						description={experience.description}
						logo={experience.logo}
						logoAlt={experience.logoAlt}
					/>
				))}
			</div>
		</div>
	);
}

export default ExperiencesPage;
