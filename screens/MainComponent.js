import { useState } from 'react';
import { View, Platform } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { TRAILS } from '../shared/trails';
import DirectoryScreen from './DirectoryScreen';
import TrailInfoScreen from './TrailInfoScreen';

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Directory"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen 
                name="Directory" 
                component={DirectoryScreen}
                options={{
                    title: 'Trail Directory'
                }} 
            />
            <Stack.Screen 
                name="TrailInfo" 
                component={TrailInfoScreen}
                options={({ route }) => ({ title: route.params.trail.name })} 
            />
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <View style={{ flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <DirectoryNavigator />
        </View>
    )
}

export default Main;