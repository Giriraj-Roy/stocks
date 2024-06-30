import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import TabNavigation from "./TabNavigation"
import Details from "../screens/Details"
import Error from "../screens/Error"
import Search from "../screens/Search"


const Stack = createStackNavigator()

const AppNavigation = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"TabNavigation"}>
                <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown : false}}/>
                <Stack.Screen name="Details" component={Details}  options={{headerShown : false}}/>
                <Stack.Screen name="Search" component={Search}  options={{headerShown : false}}/>
                <Stack.Screen name="Error" component={Error}  options={{headerShown : false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation