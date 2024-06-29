import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import TabNavigation from "./TabNavigation"
import Details from "../screens/Details"


const Stack = createStackNavigator()

const AppNavigation = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"TabNavigation"}>
                <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown : false}}/>
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation