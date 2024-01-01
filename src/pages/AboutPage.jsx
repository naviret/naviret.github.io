import React from 'react';
import './AboutPage.css';
import PageHeader from '../components/PageHeader';
import BackButton from '../components/BackButton';
import me from '../assets/images/me.png';

function AboutPage() {
	return (
		<div className='about-page'>
			<div className='about-heading'>
				<BackButton />
				<div className='about-page-title'>
					<PageHeader name='About Me' />
				</div>
			</div>
			<div className='about-container'>
				<div className='about-image'>
					<img src={me} alt='picture-of-me'></img>
				</div>
				<div className='about-text'>
					<div>
						Hi there! I'm Ivan, a senior at Columbia University
						studying Biomedical Engineering and Computer Science.
					</div>
					<div>
						Throughout my academic journey, I’ve developed a passion
						for computer science and systems programming. Regardless
						of what language I use to write code, the most rewarding
						aspect of programming comes from a deep understanding of
						what goes on in the background.
					</div>
					<div>
						By delving into exciting projects, constructing a web
						server from scratch in C and developing a
						microcontroller driver for the New York Stem Cell
						Foundation's Global Stem Cell Array, I've gained a deep
						understanding of code.
					</div>
					<div>
						Currently, I'm diving into the realm of AI/ML research
						with the Gray Lab at Johns Hopkins, working on
						characterizing broadly neutralizing antibodies. It's a
						thrilling exploration involving SQL database management,
						search algorithms, parallelized processes, graph
						representations, and reinforcement learning.
					</div>
					<div>
						Now, as I embark on new opportunities, I'm eager to
						contribute my systems-level understanding and
						problem-solving abilities to cutting-edge projects aimed
						at revolutionizing data analytics and distributed data
						integrations.
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
