import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import BillStack from './Bills/Main';

const drawernav = createDrawerNavigator(
  {
    ['Your Bills']: {
      screen: BillStack
    },
    Rewards: {
      screen: BillStack
    }
  },
  {
    drawerWidth: 300
  }
);
const AppContainer = createAppContainer(drawernav);
export default AppContainer;
