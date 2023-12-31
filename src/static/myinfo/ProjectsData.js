import movieApp from '../../assets/images/movie-app.png';
import bnab from '../../assets/images/bnab_drl.png';
import webserver from '../../assets/images/webserver.png';

const ProjectsData = [
	{
		title: 'Web Server in C',
		link: 'https://github.com/naviret/rl_bnab_maturation_pathways',
		img: webserver,
		imgAlt: 'bnab-drl',
		width: '100%',
		skills: [
			'C',
			'Systems Programming',
			'Bash',
			'TCP/IP Networking',
			'Sockets API',
		],
		description: (
			<>
				Using the <b>C programming language</b>,<b>sockets API</b>, and
				a strong foundation of Linux systems, I developed a web server
				and database server from scratch serving static and dynamic HTML
				content.
			</>
		),
	},
	{
		title: 'Characterizing BNABs with DRL',
		link: 'https://github.com/naviret/rl_bnab_maturation_pathways',
		img: bnab,
		imgAlt: 'bnab-drl',
		width: '50%',
		skills: ['SQL', 'HPC', 'PyTorch'],
		description: (
			<>
				Building a toolkit to characterize the developmental pathways of
				broadly neutralizing antibodies (bnabs) with deep reinforcement
				learning. Bnabs are a type of antibody capable of neutralizing a
				number of rapidly-mutating viruses, like HIV and COVID.
			</>
		),
	},
	{
		title: 'Movie Recommendation App',
		link: 'https://github.com/naviret/movie-app-backend',
		img: movieApp,
		imgAlt: 'movie-app',
		width: '40%',
		skills: ['MERN', 'CORS'],
		description: (
			<>
				Using the <b>MERN</b> (MongoDB, Express, React, Node) stack and{' '}
				<b>The Movie Database (TMDB) API</b>, I implemented the frontend
				and backend for a movie reccomendation website. This website
				contains a user registration/login form with input verification.
				Check out the deployment{' '}
				<b>
					<a href='https://movie-app-frontend.up.railway.app'>here</a>
				</b>
				.
			</>
		),
	},
];

export default ProjectsData;
