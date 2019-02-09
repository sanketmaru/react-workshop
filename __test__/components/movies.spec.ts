import React from 'react'
import {mount, shallow} from 'enzyme'
import Movies from '../../app/components/Movies'
import movies from '../../app/sample-data';

describe('[Components] - Movies', () => {

	test('should render correctly', () => {
        const moviesData = [{
            Title: "X-Men: The Last Stand",
            Year : "2006",
            Type : "movie",
            Image: ''
        }, {
            Title: "The Last Airbender",
            Year : "2010",
            Type : "movie"
        }];
        const node = shallow(<Movies movies={moviesData} />);
		expect(node.find('.row').exists()).toEqual(true)
    })
    
    test('have movie item component when length > 0', () => {
        const moviesData = [{
            Title: "X-Men: The Last Stand",
            Year : "2006",
            Type : "movie",
            Image: ''
        }, {
            Title: "The Last Airbender",
            Year : "2010",
            Type : "movie"
        }];
        const node = shallow(<Movies movies={moviesData} />);
		expect(node.find('MovieItem').length).toEqual(2);
    })

})
