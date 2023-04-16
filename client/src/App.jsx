import Canvas from './canvas'
import Home from './pages/Home'
import Customizer from './pages/Customizer'

import React from 'react'

const App = () => {
	return (
		<main className='app transition-all'>
			<Home />
			<Canvas />
			<Customizer />
		</main>
	)
}

export default App
