import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import { announce_view_loaded } from '../utils';

export default React.createClass({
	componentDidUpdate() {
		announce_view_loaded();
	},

	render() {

		return (
			<div data-isolate className="shell">
				<header role="banner">
					<div className="inner">
						<a id="skip2content" href="#main_content">Skip to main content</a>
						<div id="a11y_announcer" aria-live="polite" className="vh"></div>
						<h1>Modern A11y</h1>
						<nav role="navigation" id="sitenav">
							<NavLink to="/" onlyActiveOnIndex>Home</NavLink>
							<NavLink to="/blog">Blog</NavLink>
							<NavLink to="/about">About</NavLink>
							<NavLink to="/contact">Contact</NavLink>
						</nav>
					</div>
				</header>

				<main id="main_content" role="main">
					<div className="inner">
						{ this.props.children }
					</div>
				</main>

				<footer role="contentinfo">
					<div className="inner">
						<p>This is the footer</p>
					</div>
				</footer>
			</div>
		)
	}
});