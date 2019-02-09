import React from 'react'
import {mount, shallow} from 'enzyme'
import MovieItem from '../../app/components/MovieItem'
import movies from '../../app/sample-data';

describe('[Components] - Movies', () => {

	test('should render correctly', () => {
        const movieItem = {
            Title: "X-Men: The Last Stand",
            Year : "2006",
            Type : "movie",
            Image: ''
        };
        const node = shallow(<MovieItem movie={movieItem} />);
		expect(node.find('.movie-item').exists()).toEqual(true)
    })
    
    test('have title, year as props', () => {
        const movieItem = {
            Title: "X-Men: The Last Stand",
            Year : "2006",
            Type : "movie",
            Image: ''
        };
        const node = shallow(<MovieItem movie={movieItem} />);
        expect(node.prop('Title')).to.equal('X-Men: The Last Stand');
    })

})
