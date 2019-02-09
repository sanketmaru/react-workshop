import React from 'react'
import {shallow} from 'enzyme'
import Jumbotron from '../../app/components/Jumbotron'

describe('[Components] - Jumbotron', () => {

	test('should render correctly', () => {

		const node = shallow(<Jumbotron/>)
		expect(node.find('.jumbotron').exists()).toEqual(true)
		expect(node.find('.jumbotron .btn').length).toEqual(0)
	})

})
