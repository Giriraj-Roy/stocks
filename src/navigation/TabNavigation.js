import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TopGainers from "../screens/TopGainers";
import TopLosers from "../screens/TopLosers";
import { AppContext } from "../utils/AppContext";
import { useContext } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  const {isDarkMode} = useContext(AppContext)

  return (
    <Tab.Navigator
    initialRouteName={'Splash'}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route?.name === 'Home') {
          if(focused){
           return null
          }else{
            return null
          }
        }
      },
      tabBarActiveTintColor: isDarkMode ? Colors.lighter : "#D2464B",
      tabBarInactiveTintColor: "#575757",
      tabBarLabelStyle: {
        fontSize: 24,
        bottom: 14,
        margin: 12
      },
      tabBarStyle: {
        height: Platform.OS === 'android' ? '10%' : '12%',
        backgroundColor: isDarkMode ? Colors.darker : 'white',
      },
    })}
    
    >
      <Tab.Screen name="Top Gainers" component={TopGainers} options={{headerShown : false}} />
      <Tab.Screen name="Top Losers" component={TopLosers} options={{headerShown : false}} />
    </Tab.Navigator>
  )
}

export default TabNavigation