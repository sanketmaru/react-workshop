import React from 'react'
import Movies from '../components/Movies';

export default class MoviesPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies : []
		}
	}

	componentDidMount() {
		async function fetchContent() {
			// Instead of using fetch().then, use await
			let content = await fetch('https://thoughtworksreactreduxmovies.firebaseio.com/movies.json');
			let text = await content.json();
			
			// Inside the async function text is the request body
			console.log(text);
		  
			// Resolve this async function with the text
			return text;
		}
		fetchContent().then( (text) => {
			this.setState({
				movies: text
			})
		});
	}

	render() {
		return (
			<div className="sample-page">
				<Movies movies={this.state.movies}/>
			</div>	
		)
	}
}

// const MoviesPage = () =>
// 	<div className="sample-page">
// 		<Movies movies={movies}/>
// 	</div>

// export default MoviesPage