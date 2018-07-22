import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = props => (
  <View style={styles.listItem}>
    <Text>{props.item}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee'
  }
});

export default ListItem;
