import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Header from './components/Header';
import Main from './components/Main';

export default class App extends Component {

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <Header isLogin={true} />
        <Main />
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
