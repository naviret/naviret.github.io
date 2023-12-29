import React from 'react';
import './PageHeader.css';

function PageHeader(props) {
	return <div className='page-header'>{props.name}</div>;
}

export default PageHeader;
