import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import ItemComponent from './ItemComponent';

export default class ListView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redditData: [
				{
					data: {
					}
				}
			],
			postClicked: false
		}
	}

	_onButtonClick() {
    this.setState({
    	postClicked: true
    })
  }

	componentDidMount() {
		return fetch('https://www.reddit.com/.json').then((response) => {
			this.setState({
				redditData: JSON.parse(response['_bodyInit']).data.children
			})
		})
	}

  render() {
  	var thisHolder = this;
    var listItems = this.state.redditData.map(function(item, key) {
      return (
        <TouchableHighlight key={key} onPress={thisHolder._onButtonClick}>
          <Text>{item.data.title}</Text>
        </TouchableHighlight>
      );
    });
    return (
        <View>
          {listItems}
        </View>
    );
  }
}