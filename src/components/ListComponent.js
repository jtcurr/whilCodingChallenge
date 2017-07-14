import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import ItemComponent from './ItemComponent';
import store from '../redux/store';
import { redditData, postData} from '../redux/actions/dataActions';

@connect((store)=> {
	return {
		redditData: store.data.redditData,
		postData: store.data.postData
	}
})

export class ListComponent extends React.Component {

	_onButtonClick(data) {
		postData(data);
	}

	_goBack() {
		postData(null);
	}

	componentDidMount() {
		return fetch('https://www.reddit.com/.json').then((response) => {
			redditData(JSON.parse(response['_bodyText']).data.children)
		})
	}

	render() {
		//Variable to control 'if' binding
		const thisHolder = this;
		let listItems = this.props.redditData.map(function(item, key) {
					return (
						<TouchableHighlight key={key} onPress={() => thisHolder._onButtonClick(item.data)}>
							<Text>{ item.data.title }</Text>
						</TouchableHighlight>
					);
				});
		//Checks to see if postData from Reddit has been assigned
		if(this.props.postData) {
			return <ItemComponent data={ this.state.postData } return={ this._goBack.bind(this) } />
		} else {
			return <View>{ listItems }</View>
		}
	}
}