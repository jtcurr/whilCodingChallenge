import React from 'react';
import { View, TouchableHighlight, Text, Button } from 'react-native';
import store from '../redux/store';
import { postData} from '../redux/actions/dataActions';
import { connect } from 'react-redux';

@connect((store)=> {
	return {
		redditData: store.data.redditData,
		postData: store.data.postData
	}
})

export default class ItemComponent extends React.Component {

	render() {
		const thisHolder = this;
		return (
			<View>
				<Text>
					Title: { this.props.postData.title }
				</Text>
				<Text>
					Author: { this.props.postData.author }
				</Text>
				<Text>
					Id: { this.props.postData.id }
				</Text>
				<Text>
					Ups: { this.props.postData.ups }
				</Text>
				<Text>
					Downs: { this.props.postData.downs }
				</Text>
				<Text>
					Subreddit: { this.props.postData.subreddit }
				</Text>
				<Text>
					Created: { this.props.postData.created }
				</Text>
				<Button onPress={ () => postData(null) } title="Go Back" />
			</View>
		)
	}
}