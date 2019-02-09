import React from 'react'
import MovieItem from './MovieItem';

// function Movies(props) {
// 	const {movies} = props
// 	const movies = movies.map(movie => {
// 		return <MovieItem key={movie.imdbID} movie={movie} />
// 	});
// 	return (
// 		<div className="row" style={{margin: 20 + 'px', flexWrap: "nowrap", overflowX: "auto"}}>
// 			{movies}
// 		</div>
// 	)
// }
// export default Movies;
export default class Movies extends React.Component {
	constructor(props) {
		super(props);
		// this.markAsFavourite = this.markAsFavourite.bind(this);
		this.state = {
			favourites: 0
		}
	}

	markAsFavourite = () => {
		this.setState( (state) => {
			return {favourites : state.favourites + 1 };
		})
	}

	render() {
        const movies = this.props.movies.map(movie => {
			return <MovieItem key={movie.imdbID} movie={movie} markAsFavourite={this.markAsFavourite} />
		});
		return (
			<div>
				<div className="row" style={{margin: 20 + 'px', flexWrap: "nowrap", overflowX: "auto"}}>
					Favourites: {this.state.favourites}
				</div>
				<div className="row" style={{margin: 20 + 'px', flexWrap: "nowrap", overflowX: "auto"}}>
					{movies}
				</div>
			</div>
		)
	}
}
