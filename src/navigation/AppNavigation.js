import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


const Stack = createStackNavigator()

const AppNavigation = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={""}>
                {/* <Stack.Screen name="Home" component={Home} /> */}
            </Stack.Navigator>

        </NavigationContainer>
    )
}