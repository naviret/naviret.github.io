import movieApp from '../../assets/images/movie-app.png';
import bnab from '../../assets/images/bnab_drl.png';
import webserver from '../../assets/images/webserver.gif';
import microcontroller from '../../assets/images/microcontroller_driver.png';
import arcadegame from '../../assets/images/arcadegame.png';

const ProjectsData = [
	{
		title: 'Web Server in C',
		link: '',
		img: webserver,
		imgAlt: 'bnab-drl',
		width: '96%',
		skills: ['C', 'Bash', 'TCP/IP Networking', 'Sockets API'],
		description: (
			<>
				Using the <b>C programming language</b>,<b>sockets API</b>, and
				a strong foundation of Linux systems programming, I developed a
				web server and database server from scratch serving static and
				dynamic HTML content.
			</>
		),
	},
	{
		title: 'Characterizing BNABs with DRL',
		link: 'https://github.com/naviret/rl_bnab_maturation_pathways',
		img: bnab,
		imgAlt: 'bnab-drl',
		width: '96%',
		skills: ['SQL', 'HPC', 'PyTorch'],
		description: (
			<>
				Leading the development of a toolkit to characterize the
				developmental pathways of broadly neutralizing antibodies
				(bnabs) with deep reinforcement learning. Bnabs are a type of
				antibody capable of neutralizing a number of rapidly-mutating
				viruses, like HIV and COVID.
			</>
		),
	},
	{
		title: 'Movie Recommendation App',
		link: 'https://github.com/naviret/movie-app-backend',
		img: movieApp,
		imgAlt: 'movie-app',
		width: '96%',
		skills: ['MERN', 'CORS'],
		description: (
			<>
				Developed the frontend and backend for a movie reccomendation
				website using the <b>MERN</b> (MongoDB, Express, React, Node)
				stack and <b>The Movie Database (TMDB) API</b>. This website
				contains a user registration/login form with input verification.
				Check out the deployment{' '}
				<b>
					<a
						href='https://movie-app-frontend.up.railway.app'
						target='_blank'
						rel='noreferrer'
					>
						here
					</a>
				</b>
				.
			</>
		),
	},
	{
		title: 'Microcontroller Driver',
		link: '',
		img: microcontroller,
		imgAlt: 'microcontroller',
		width: '96%',
		skills: ['.NET', 'C#', 'Python', 'Raspberry Pi', 'Serial Comms'],
		description: (
			<>
				Designed and implemented a microcontroller driver for NYSCF's
				Global Stem Cell Array (GSCA). I crafted a{' '}
				<b>
					serial communications library in C#, employing an HTTP-like
					protocol for seamless data exchange{' '}
				</b>{' '}
				with microcontrollers such as Raspberry Pi and Arduino. This was
				successfully integrated into NYSCF's GSCA via the Windows
				Registry Database.
			</>
		),
	},
	{
		title: 'Arduino Arcade Game',
		link: '',
		img: arcadegame,
		imgAlt: 'microcontroller',
		width: '96%',
		skills: ['C/C++', 'Arduino', 'CAD', 'Circuitry'],
		description: (
			<>
				Assembled a the circutry and casing for 1-player and 4-player
				Arduino-based arcade games. I also programmed these games in C,{' '}
				<b>
					cleverly manipulating the Arduino Uno's static and dynamic
					memory caches to reduce dynamic memory usage from 80% to 30%{' '}
				</b>
				and significantly accelerate execution.
			</>
		),
	},
];

export default ProjectsData;
