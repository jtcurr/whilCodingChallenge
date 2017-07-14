import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import ItemComponent from './ItemComponent';
import store from '../redux/store';
import { redditData, postData} from '../redux/actions/dataActions';

@connect((store)=> {
	return {
		apiData: store.data.apiData,
		postData: store.data.postData,
		test: store.data.test
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
		let listItems = this.props.apiData.map(function(item, key) {
					return (
						<TouchableHighlight key={key} onPress={() => thisHolder._onButtonClick(item.data)}>
							<Text>{ item.data.title }</Text>
						</TouchableHighlight>
					);
				});
		//Checks to see if postData from Reddit has been assigned
		if(this.props.postData) {
			return <ItemComponent  />
		} else {
			return <View>{ listItems }</View>
		}
	}
}