import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  containerTitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#00000040',
    paddingBottom: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  email: {
    fontSize: 14,
    color: '#00000080',
  },
});

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.containerTitle}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.email}>{data.email}</Text>
    </View>
    <Text>{data.body}</Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Post;
