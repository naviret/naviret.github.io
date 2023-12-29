import React, { useState } from 'react';
import './CodeBlock.css';
import { useNavigate } from 'react-router-dom';

let TYPES = new Set(['FILE', 'int', 'pid_t']);
let FUNCS = new Set(['fopen', 'getpid']);
let DEFS = new Set(['AF_INET', 'SOCK_STREAM']);

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
