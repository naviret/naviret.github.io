import React, { useState } from 'react';
import './CodeBlock.css';
import { useNavigate } from 'react-router-dom';

let TYPES = new Set(['FILE', 'int', 'pid_t']);
let FUNCS = new Set(['fopen', 'getpid']);
let DEFS = new Set(['AF_INET', 'SOCK_STREAM']);
let VARS = new Set(['skills']);

function getClassBasedOnText(text) {
	if (text.includes('//') || text === 'Home ') {
		return 'link-line';
	}

	return 'default-line';
}

function highlightWords(line) {
	const words = line.split(' '); // Split the line into words

	// Map over the words and apply styling based on criteria
	const highlightedWords = words.map((word, index) => {
		let className = '';

		if (TYPES.has(word)) {
			className = 'type';
		} else if (FUNCS.has(word)) {
			className = 'func';
		} else if (DEFS.has(word)) {
			className = 'def';
		} else if (VARS.has(word)) {
			className = 'var';
		}

		return (
			<span key={index} className={className}>
				{word}
			</span>
		);
	});

	// Join highlighted words into a string
	return highlightedWords.reduce((prev, curr) => [prev, ' ', curr]);
}

function CodeBlock(props) {
	const [hoveredLine, setHoveredLine] = useState([]);
	const navigate = useNavigate();

	function handleClick(line) {
		const uri = line.toLowerCase().replace(/[^a-z]/g, '');
		navigate(`/${uri}`);
	}

	function renderLine(line, index) {
		const className = getClassBasedOnText(line);
		const isLineHovered = hoveredLine.includes(index);
		if (className === 'link-line') {
			return (
				<div
					className={className}
					onMouseEnter={() =>
						setHoveredLine((prevHoveredLines) => [
							...prevHoveredLines,
							index,
						])
					}
					onMouseLeave={() =>
						setHoveredLine((prevHoveredLines) =>
							prevHoveredLines.filter(
								(hoveredIndex) => hoveredIndex !== index,
							),
						)
					}
					onClick={() => handleClick(line)}
				>
					{isLineHovered ? (
						<div>{`${line}------->`}</div>
					) : (
						<div>{line}</div>
					)}
				</div>
			);
		} else {
			return (
				<div className={className}>
					<div>{highlightWords(line)}</div>
				</div>
			);
		}
	}

	return (
		<div
			className='codeblock'
			style={props.fontSize ? { fontSize: props.fontSize } : {}}
		>
			<table>
				<tbody>
					{props.content.map((item, index) => (
						<tr className='codeline' key={index}>
							{
								<td className='num'>
									<div>{item.num ? item.num : index + 1}</div>
								</td>
							}
							<td className='line'>
								{renderLine(item.line, index)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default CodeBlock;
