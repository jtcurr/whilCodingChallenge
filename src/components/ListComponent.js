import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import ItemComponent from './ItemComponent';
import store from '../redux/store';
import { redditData, postData} from '../redux/actions/dataActions';

@connect((store)=> {
	return {
		apiData: store.data.apiData,
		postData: store.data.postData,
	}
})

export class ListComponent extends React.Component {

//Runs reducer to update store with specific post data
	_onButtonClick(data) {
		postData(data);
	}
//Makes inital call to reddit api and parses response
	componentDidMount() {
		return fetch('https://www.reddit.com/.json').then((response) => {
			redditData(JSON.parse(response['_bodyText']).data.children)
		})
	}

	render() {
		//Variable to control 'if' binding
		const thisHolder = this;
		//Iterates through each item in api data to generate list
		let listItems = this.props.apiData.map(function(item, key) {
					return (
						<TouchableHighlight key={key} style={styles.row} onPress={() => thisHolder._onButtonClick(item.data)}>
							<Text>{ item.data.title }</Text>
						</TouchableHighlight>
					);
				});
		//Checks to see if indiviual post has been selected
		if(this.props.postData) {
			return <ItemComponent  />
		} else {
			return <View>{ listItems }</View>
		}
	}
}

const styles = StyleSheet.create({
  row: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});