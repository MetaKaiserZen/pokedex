import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Navigator } from './Navigator';
import { Search } from './Search';

const Tab = createBottomTabNavigator();

export const Tabs = () =>
{
    return (
        <Tab.Navigator
            screenOptions={
            {
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: { marginBottom: (Platform.OS === 'ios') ? 0 : 10 },
                tabBarStyle:
                {
                    position: 'absolute',
                    backgroundColor: 'white',
                    opacity: 0.9,
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 75 : 50
                }
            }}
            sceneContainerStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen
                name="NavigatorScreen"
                component={Navigator}
                options={
                {
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) =>
                    (
                        <Ionicons
                            name="list-outline"
                            color={color}
                            size={25}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={Search}
                options={
                {
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: ({ color }) =>
                    (
                        <Ionicons
                            name="search-outline"
                            color={color}
                            size={25}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
