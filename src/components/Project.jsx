import React from 'react';
import './Project.css';
import CodeBlock from './CodeBlock';
import GithubIcon from '../assets/icons/github-drawn.png';

function Project(props) {
	return (
		<div className='project-container' style={{ width: '50%' }}>
			<div className='project-header'>
				<div className='project-title'>
					<a href={props.link} target='_blank'>
						{props.title}
					</a>
				</div>
				{/* <div className='github-icon'>
					<a href='https://github.com/naviret' target='_blank'>
						<img src={GithubIcon} alt='Github'></img>
					</a>
				</div> */}
			</div>
			<div className='project-image'>
				<img src={props.img} alt={props.imgAlt}></img>
			</div>
			<CodeBlock fontSize='0.8rem' content={props.skills} />
			<div className='project-description'>{props.description}</div>
		</div>
	);
}

export default Project;
