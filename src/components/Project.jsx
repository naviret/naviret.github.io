import React from 'react';
import './Project.css';
import CodeBlock from './CodeBlock';

function Project(props) {
	return (
		<div className='project-container'>
			<div className='project-title'>{props.title}</div>
			<div className='project-image'>
				<img src={props.img} alt={props.imgAlt}></img>
			</div>
			<CodeBlock fontSize='0.8rem' content={props.skills} />
			<div className='project-description'>{props.description}</div>
		</div>
	);
}

export default Project;
