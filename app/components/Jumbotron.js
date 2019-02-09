import React from 'react'

export default class Jumbotron extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section className="jumbotron text-center">
				<div className="container">
					<h1 className="jumbotron-heading">{this.props.name}</h1>
					<p className="lead text-muted">
						React & Redux
					</p>
					<p>
					</p>
				</div>
			</section>
		)
	}
}
