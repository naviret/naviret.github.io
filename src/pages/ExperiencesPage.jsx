import React from 'react';
import './ExperiencesPage.css';
import PageHeader from '../components/PageHeader';
import BackButton from '../components/BackButton';

function ExperiencesPage() {
	return (
		<div className='experiences-page'>
			<div className='experiences-heading'>
				<BackButton />
				<div className='experiences-page-title'>
					<PageHeader name='Experiences' />
				</div>
			</div>
		</div>
	);
}

export default ExperiencesPage;
