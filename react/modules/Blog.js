import React from 'react'

export default React.createClass({
	render() {
		return(
			<div>
				<h2 data-page-title="Blog">This is the blog landing page</h2>
				<h3>Here are the blog posts:</h3>
				<nav role="navigation" aria-labelledby="blog_posts">
					<h2 id="blog_posts">Blog Posts</h2>
					<div className="articles">
						<a href="#/blog/accessible-accordion-content.html">Accessible Accordion Content</a>
						<a href="#/blog/accessible-carousels.html">Accessible Carousels</a>
						<a href="#/blog/fourth-post.html">Fourth Blog Post</a>
						<a href="#/blog/accessible-modals.html">Accessible Modals</a>
						<a href="#/blog/third-post.html">Third Blog Post</a>
						<a href="#/blog/help-text-for-complex-ui.html">Spoken help text for complex UI components</a>
						<a href="#/blog/second-post.html">Second Blog Post</a>
						<a href="#/blog/help-text-for-complex-ui.html">Spoken help text for complex UI components</a>
						<a href="#/blog/help-text-for-complex-ui.html">Spoken help text for complex UI components</a>
						<a href="#/blog/html5-sectioning-elements.html">HTML5 Sectioning Elements</a>
						<a href="#/blog/help-text-for-complex-ui.html">Spoken help text for complex UI components</a>
						<a href="#/blog/first-post.html">First Blog Post</a>
						<a href="#/blog/screen-reader-page-load-behaviors.html">Screen Reader Page Load Behaviors</a>
						<a href="#/blog/second-post.html">Second Blog Post</a>
						<a href="#/blog/second-post.html">Second Blog Post</a>
					</div>
				</nav>
			</div>
		)
	}
})