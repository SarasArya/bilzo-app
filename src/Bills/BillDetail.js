import React from 'react';
import { View, Text } from 'react-native';

class BillDetail extends React.Component {
  static navigationOptions = {
    title: 'Your Bills'
  };
  render() {
    return (
      <View>
        <Text>This is a detailed Bill</Text>
      </View>
    );
  }
}

export default BillDetail;
