import React from 'react';
import { View, TouchableHighlight } from 'react-native';

export default class ItemComponent extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View>
				{this.props.title}
				{this.props.author}
				{this.props.id}
				{this.props.selftext}
			</View>
		)
	}
}