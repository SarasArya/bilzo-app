import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details'
  };
  render() {
    return (
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>I am in details Page</Text>
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export default DetailsScreen;
