import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'
import Blog from './modules/Blog'
import Contact from './modules/Contact'
import About from './modules/About'
import Home from './modules/Home'

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/blog" component={Blog} />
			<Route path="/contact" component={Contact} />
			<Route path="/about" component={About} />
		</Route>
	</Router>
), document.getElementById('app'))