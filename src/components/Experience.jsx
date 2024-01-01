import React from 'react';
import './Experience.css';

function Experience(props) {
	return (
		<div className='experience-container'>
			<div className='experience-logo'>
				<img src={props.logo} alt={props.logoAlt}></img>
			</div>
			<div className='experience-text'>
				<div className='experience-title'>{props.title}</div>
				<div className='experience-job-title'>{props.jobTitle}</div>
				<div className='experience-date'>{props.date}</div>
				<div className='experience-description'>
					{props.description}
				</div>
			</div>
		</div>
	);
}

export default Experience;
