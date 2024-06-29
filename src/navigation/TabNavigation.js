import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TopGainers from "../screens/TopGainers";
import TopLosers from "../screens/TopLosers";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName={'Splash'}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route?.name === 'Home') {
          if(focused){
           return <HomeActiveSVG/>
          }else{
            return <HomeSVG/>
          }
        }
      },
      tabBarActiveTintColor: "#D2464B",
      tabBarInactiveTintColor: "#575757",
      tabBarLabelStyle: {
        fontSize: 24,
        bottom: 14,
        margin: 12
      },
      tabBarStyle: {
        height: Platform.OS === 'android' ? '10%' : '12%',
        backgroundColor: 'white',
      },
    })}
    
    >
      <Tab.Screen name="Top Gainers" component={TopGainers} 
                  options={{  
                              // title : "Stocks App"
                              headerShown : false
                            }} 
      />
      <Tab.Screen name="Top Losers" component={TopLosers} options={{headerShown : false}} />
    </Tab.Navigator>
  )
}

export default TabNavigation