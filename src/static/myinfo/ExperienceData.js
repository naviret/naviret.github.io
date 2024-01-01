import whiting from '../../assets/images/whiting.png';
import nyscf from '../../assets/images/nyscf.png';

const ExperienceData = [
	{
		title: 'Gray Lab',
		jobTitle: 'AI Research Intern',
		date: 'Jun 2023 - Present',
		logo: whiting,
		imgAlt: 'Gray Lab',
		description: (
			<ul>
				<li>
					Working in the Gray Lab at Johns Hopkins University to
					characterize broadly neutralizing antibodies against HIV
					using artificial intelligence.
				</li>
				<li>
					Mentoring new undergraduate student at the Gray Lab.
					Produced and delivered lectures in data structures, search
					algorithms, and clustering.
				</li>
			</ul>
		),
	},
	{
		title: 'New York Stem Cell Foundation',
		jobTitle: 'Automation Engineer Intern',
		date: 'Jun 2022 - Aug 2022',
		logo: nyscf,
		imgAlt: 'NYSCF',
		description: (
			<ul>
				<li>
					Developed a library to integrate microcontrollers with the
					Global Stem Cell Array.
				</li>
				<li>
					Presented my work to ~125 NYSCF employees, half which are
					non-technical.
				</li>
			</ul>
		),
	},
];

export default ExperienceData;
