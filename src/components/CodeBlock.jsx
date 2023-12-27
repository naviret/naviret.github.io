import React from 'react';
import './CodeBlock.css';

let TYPES = new Set(['FILE', 'int', 'pid_t']);
let FUNCS = new Set(['fopen', 'getpid']);
let DEFS = new Set(['AF_INET', 'SOCK_STREAM']);

function getClassBasedOnText(text) {
	if (text.includes('//')) {
		return 'link-line';
	}

	return 'default-line';
}

function highlightWords(line) {
	const words = line.split(' '); // Split the line into words

	// Map over the words and apply styling based on criteria
	const highlightedWords = words.map((word, index) => {
		if (TYPES.has(word)) {
			return (
				<span key={index} className='type'>
					{word}
				</span>
			);
		} else if (FUNCS.has(word)) {
			return (
				<span key={index} className='func'>
					{word}
				</span>
			);
		} else if (DEFS.has(word)) {
			return (
				<span key={index} className='def'>
					{word}
				</span>
			);
		}
		return word;
	});

	// Join highlighted words into a string
	return highlightedWords.reduce((prev, curr) => [prev, ' ', curr]);
}

function CodeBlock(props) {
	return (
		<div className='codeblock'>
			<table>
				<tbody>
					{props.content.map((item, index) => (
						<tr className='codeline' key={index}>
							<td className='num'>
								<div>{index + 1}</div>
							</td>
							<td className='line'>
								<div className={getClassBasedOnText(item.line)}>
									<div>{highlightWords(item.line)}</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default CodeBlock;
