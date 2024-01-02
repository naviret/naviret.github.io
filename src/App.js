import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ExperiencesPage from './pages/ExperiencesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { Routes, Route, HashRouter } from 'react-router-dom';

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/home' element={<HomePage />}></Route>
				<Route path='/projects' element={<ProjectsPage />}></Route>
				<Route
					path='/experiences'
					element={<ExperiencesPage />}
				></Route>
				<Route path='/aboutme' element={<AboutPage />}></Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
