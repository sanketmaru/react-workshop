import React from 'react'

function MovieItem(props) {
	const {movie} = props;
	return (
		<div className="card movie-item">
			<img src={movie.Poster} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{movie.Title}</h5>
				<p className="card-text">{movie.Year}</p>
				<a className="btn btn-primary" onClick={props.markAsFavourite}>Favourite</a>
			</div>
		</div>
	)
	
}

export default MovieItem;

// export default class MovieItem extends React.Component {
// 	constructor(props) {
// 		super(props)
// 	}

// 	render() {
// 		return (
// 			<div className="card movie-item">
//                 <img src={this.props.movie.Poster} className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">{this.props.movie.Title}</h5>
//                     <p className="card-text">{this.props.movie.Year}</p>
//                     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//                 </div>
//             </div>
// 		)
// 	}
// }
