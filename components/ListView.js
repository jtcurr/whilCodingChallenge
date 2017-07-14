import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import ItemComponent from './ItemComponent';

export default class ListView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redditData: [
				{
					data:{
						children: []
					}
				}
			],
			postClicked: false,
			postData: null
		}
	}

	_onButtonClick(data) {
    this.setState({
    	postClicked: true,
    	postData: data
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
  	const thisHolder = this;
    let listItems = this.state.redditData.map(function(item, key) {
          return (
            <TouchableHighlight key={key} onPress={() => thisHolder._onButtonClick(item.data)}>
              <Text>{ item.data.title }</Text>
            </TouchableHighlight>
          );
         });

    if(this.state.postData) {
    	return <ItemComponent data={this.state.postData} />
    } else {
    	return <View>{ listItems }</View>
    }
  }
}