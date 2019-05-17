import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import Post from './components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee7777',
  },
  bar: {
    backgroundColor: '#fff',
    width: '100%',
  },
  containerScroll: {
    flex: 1,
    width: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});

export default class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then((json) => {
        this.setState({
          posts: json,
        });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
          <Text style={styles.welcome}>GoNative App</Text>
        </View>
        <ScrollView style={styles.containerScroll}>
          {posts.map(post => (
            <Post data={post} key={post.id} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
