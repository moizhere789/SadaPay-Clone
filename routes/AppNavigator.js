import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import Payment from "../screens/Payment";
import More from "../screens/More";
import Balance from "../screens/Balance";
import Loadmoney from "../screens/Loadmoney";
import Sendmoney from "../screens/Sendmoney";
import Increasemylimit from "../screens/Increasemylimit";
const { Navigator, Screen } = createStackNavigator();

function AppNavigation(props) {
  return (
    <NavigationContainer>

    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Payment" component={Payment} />
      <Screen name="More" component={More} />
      <Screen name="Balance" component={Balance} />
      <Screen name="Loadmoney" component={Loadmoney} />
      <Screen name="Sendmoney" component={Sendmoney} />
      <Screen name="Increasemylimit" component={Increasemylimit} />

    </Navigator>
    </NavigationContainer>

  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
