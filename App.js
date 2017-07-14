import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ListComponent } from './src/components/ListComponent.js';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <ListComponent />
        </Provider>
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
