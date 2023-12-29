import React from 'react';
import './SocialLinks.css';
import FileIcon from '../assets/icons/file-drawn.png';
import DriveIcon from '../assets/icons/drive-drawn.png';
import GithubIcon from '../assets/icons/github-drawn.png';
import GmailIcon from '../assets/icons/gmail-drawn.png';
import LinkedInIcon from '../assets/icons/linkedin-drawn.png';

const email = `ier2112@columbia.edu`;

function SocialLinks() {
	return (
		<div className='social-links-container'>
			<div className='social-links'>
				<div className='social-icon' target='_blank'>
					<a href=''>
						<img src={FileIcon} alt='Resume'></img>
					</a>
				</div>
				<div className='social-icon'>
					<a href='https://github.com/naviret' target='_blank'>
						<img src={GithubIcon} alt='Github'></img>
					</a>
				</div>
				<div className='social-icon'>
					<a
						href='https://www.linkedin.com/in/ivaneduardorivera/'
						target='_blank'
					>
						<img src={LinkedInIcon} alt='LinkedIn'></img>
					</a>
				</div>
				<div className='social-icon'>
					<a href={`mailto:${email}`}>
						<img src={GmailIcon} alt='Gmail'></img>
					</a>
				</div>
			</div>
		</div>
	);
}

export default SocialLinks;
