import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import ItemComponent from './ItemComponent';
import store from '../redux/store';

export class ListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redditData: [],
			postData: null
		}
	}

	_onButtonClick(data) {
		this.setState({
			postData: data
		})
	}

	_goBack() {
		this.setState({
			postData: null
		})
	}

	componentDidMount() {
		return fetch('https://www.reddit.com/.json').then((response) => {
			this.setState({
				redditData: JSON.parse(response['_bodyText']).data.children
			})
		})
	}

	render() {
		//Variable to control 'if' binding
		const thisHolder = this;
		let listItems = this.state.redditData.map(function(item, key) {
					return (
						<TouchableHighlight key={key} onPress={() => thisHolder._onButtonClick(item.data)}>
							<Text>{ item.data.title }</Text>
						</TouchableHighlight>
					);
				});
		//Checks to see if postData from Reddit has been assigned
		if(this.state.postData) {
			return <ItemComponent data={ this.state.postData } return={ this._goBack.bind(this) } />
		} else {
			return <View>{ listItems }</View>
		}
	}
}

// export default connect((store) => {
//   return {
//     redditData: store.redditData,
//     postData: store.postData,
//   };
// })(ListComponent);