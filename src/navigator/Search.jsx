import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabScreen from '../screens/TabScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

export const Search = () =>
{
    return (
        <Stack.Navigator
            initialRouteName="TabScreen"
            screenOptions={
            {
                headerShown: false,
                cardStyle: { backgroundColor: 'white' }
            }}
        >
            <Stack.Screen name="TabScreen" component={TabScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
}
