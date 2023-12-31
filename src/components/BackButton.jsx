import React from 'react';
import './BackButton.css';
import { useNavigate } from 'react-router-dom';

function BackButton() {
	const navigate = useNavigate();

	function handleClick() {
		navigate('/');
	}

	return (
		<div className='button-container'>
			<div className='button'>
				<div className='button-text' onClick={() => handleClick()}>
					{'<-- Home '}
				</div>
			</div>
		</div>
	);
}

export default BackButton;
