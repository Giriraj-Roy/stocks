import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Top Gainers" component={HomeScreen} />
      <Tab.Screen name="Top Losers" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation