import React from 'react';
import CodeBlock from '../components/CodeBlock';
import './HomePage.css';

function HomePage() {
	const content = [
		// { line: '#include <stdio.h>' },
		// { line: '#include <stdlib.h>' },
		// { line: '#include <sys/socket.h>' },
		// { line: '#include <arpa/inet.h>' },
		// { line: '#include <unistd.h>' },
		// { line: ' ' },
		{ line: '// Projects ' },
		{ line: 'FILE *file = fopen("projects.txt", "w");' },
		{ line: 'fprintf(file, "Write a web server from sratch...\\n");' },
		{ line: ' ' },
		{ line: '// Experiences ' },
		{ line: 'int network;' },
		{ line: 'network = socket(AF_INET, SOCK_STREAM, 0);' },
		{ line: ' ' },
		{ line: '// About Me ' },
		{ line: 'pid_t pid = getpid();' },
		{ line: 'fprintf(file, "Are you %d?\\n", pid);' },
	];
	return (
		<div className='homepage'>
			<div className='name'>
				Hi! I'm <span>Ivan</span> Rivera
			</div>
			<CodeBlock content={content} />
		</div>
	);
}

export default HomePage;

// for ProjectsPage

// for ExperiencesPage
// --> use code to create a socket

// for AboutPage
// --> use code to determine information about the current running process
