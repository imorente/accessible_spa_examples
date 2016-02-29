import React from 'react'

export default React.createClass({
	render() {
		return(
			<div>
				<h2 data-page-title="Contact Us">This is the contact page!</h2>
				<h3>Have something to say? Let us know what you think! Yeah!</h3>
				<form method="" action="">
					<div className="field">
						<label htmlFor="name">Name</label>
						<input id="name"/>
					</div>
					<div className="field">
						<label htmlFor="email">Email</label>
						<input id="email"/>
					</div>
					<div className="field">
						<label htmlFor="topic">Topic</label>
						<select id="topic">
							<option>Topic 1</option>
							<option>Topic 2</option>
							<option>Topic 3</option>
							<option>Topic 4</option>
						</select>
					</div>
					<div className="field">
						<label htmlFor="message">Message</label>
						<textarea id="message"></textarea>
					</div>
					<button type="submit">Submit Your Comments</button>
				</form>
			</div>
		)
	}
})