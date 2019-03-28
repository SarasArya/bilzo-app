import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import BillStack from './Bills/Main';
import DiscoverShop from './DiscoverShop/Main';
import SideBar from './SideMenu';

const drawernav = createDrawerNavigator(
  {
    Bills: {
      screen: BillStack
    },
    Rewards: {
      screen: BillStack
    },
    DiscoverShop: {
      screen: DiscoverShop
    },
    ReferFriend: {
      screen: ReferFriend
    },
    ReferShop: {
      screen: ReferShop
    }
  },
  {
    drawerWidth: 300,
    contentComponent: props => <SideBar {...props} />
  }
);
const AppContainer = createAppContainer(drawernav);
export default AppContainer;
