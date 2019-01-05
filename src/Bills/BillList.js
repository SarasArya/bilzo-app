import React from 'react';
import { View, Text, Icon, Button } from 'react-native';

class BillList extends React.Component {
  static navigationOptions = {
    title: 'Your Bills'
  };
  render() {
    return (
      <View>
        <Text>List of all the bills</Text>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('BillDetail')} />
      </View>
    );
  }
}

export default BillList;
