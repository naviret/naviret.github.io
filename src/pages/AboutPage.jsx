import React from 'react';
import './AboutPage.css';
import PageHeader from '../components/PageHeader';
import BackButton from '../components/BackButton';

function AboutPage() {
	return (
		<div className='about-page'>
			<div className='about-heading'>
				<BackButton />
				<div className='about-page-title'>
					<PageHeader name='About Me' />
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
