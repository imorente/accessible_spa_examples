import React from 'react'

export default React.createClass({
	render() {
		return(
			<div>
				<h2 data-page-title="Blog">Blog Posts</h2>
				<div className="blog">
					<div className="articles">
						<article>
							<time> 
								<div className="month">Jun</div>
								<div className="day">15</div>
								<div className="year">2015</div>
							</time>
							<a href="#/blog/a11ywin-outlook-aria-labelledby.html" className="title">Outlook Accessibility and aria-labelledby</a>
							<span className="author pfox">by Patrick Fox</span>
							<div className="summary">The Outlook Web App is a great example of a highly usable and accessible web experience, and an #a11ywin</div>
							<a href="#/blog/#" aria-label="Read full post for Outlook Accessibility and aria-labelledby" className="readmore">Read More</a>
						</article>
						<article>
							<time> 
								<div className="month">Jan</div>
								<div className="day">15</div>
								<div className="year">2015</div>
							</time>
							<a href="#/blog/accessible-modals.html" className="title">Accessible Modals</a>
							<span className="author pfox">by Patrick Fox</span>
							<div className="summary">Accessible modals</div><a href="#/blog/#" aria-label="Read full post for Accessible Modals" className="readmore">Read More</a>
						</article>
						<article>
							<time> 
							<div className="month">Jan</div>
							<div className="day">15</div>
							<div className="year">2015</div>
							</time>
							<a href="#/blog/screen-reader-page-load-behaviors.html" className="title">Screen Reader Page Load Behaviors</a>
							<span className="author pfox">by Patrick Fox</span>
							<div className="summary">In an effort to better understand how screen readers communicate page load, I spent some time documenting how various screen reader and browser combinations report that a new page has loaded.</div>
							<a href="#/blog/#" aria-label="Read full post for Screen Reader Page Load Behaviors" className="readmore">Read More</a>
						</article>
						<article>
							<time> 
								<div className="month">Jul</div>
								<div className="day">15</div>
								<div className="year">2015</div>
							</time>
							<a href="#/blog/using-tabindex.html" className="title">Using Tabindex</a>
							<span className="author pfox">by Patrick Fox</span>
							<div className="summary">An important aspect of web accessibility is ensuring keyboard navigation and managing the users focus in a page. The tabindex attribute gives developers the ability to make any element focusable.</div>
							<a href="#/blog/#" aria-label="Read full post for Using Tabindex" className="readmore">Read More</a>
						</article>
					</div>
				</div>
			</div>
		)
	}
})