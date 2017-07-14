import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './components/ListView.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      singlePage: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView singlePage={this.state.singlePage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
