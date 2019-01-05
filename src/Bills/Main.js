import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import BillList from './BillList';
import BillDetail from './BillDetail';

const BillStack = createStackNavigator(
  {
    BillList: {
      screen: BillList,
      // path: "/bills/:userId",
      navigationOptions: ({ navigation }) => ({
        title: 'Your Bills', // Title to appear in status bar,
        headerLeft: <Icon name="menu" size={25} color="#ffffff" onPress={() => navigation.toggleDrawer()} />,
        headerLeftContainerStyle: {
          paddingLeft: 20
        }
      })
    },
    BillDetail: {
      screen: BillDetail,
      path: '/bills/:billId'
    }
  },
  {
    initialRouteName: 'BillList',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default BillStack;
