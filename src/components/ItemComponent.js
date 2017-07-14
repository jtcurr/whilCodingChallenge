import React from 'react';
import { View, TouchableHighlight, Text, Button } from 'react-native';

export default class ItemComponent extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const thisHolder = this;
		return (
			<View>
				<Text>
					Title: { this.props.data.title }
				</Text>
				<Text>
					Author: { this.props.data.author }
				</Text>
				<Text>
					Id: { this.props.data.id }
				</Text>
				<Text>
					Ups: { this.props.data.ups }
				</Text>
				<Text>
					Downs: { this.props.data.downs }
				</Text>
				<Text>
					Subreddit: { this.props.data.subreddit }
				</Text>
				<Text>
					Created: { this.props.data.created }
				</Text>
				<Button onPress={ thisHolder.props.return } title="Go Back" />
			</View>
		)
	}
}