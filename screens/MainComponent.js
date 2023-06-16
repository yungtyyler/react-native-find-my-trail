import { useState } from 'react';
import { View, Platform, StyleSheet, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import logo from '../assets/images/logo.png';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TRAILS } from '../shared/trails';
import DirectoryScreen from './DirectoryScreen';
import TrailInfoScreen from './TrailInfoScreen';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();
const screenOptions = {
    headerStyle: { backgroundColor: '#008024' },
    headerTintColor: '#fff',
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon 
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Directory"
            screenOptions={screenOptions}
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

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <View>
                    <Image 
                        source={logo}
                        style={styles.drawerImage}
                    />
                </View>
                <View>
                    <Text style={styles.drawerHeaderText}>Find My Trail</Text>
                </View>
            </View>
            <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
        </DrawerContentScrollView>
    )
}

const Main = () => {
    return (
        <View style={{ flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={{ backgroundColor: '#c0f0c0' }}
                drawerContent={CustomDrawerContent}
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='home'
                                type='font-awesome'
                                size={24}
                                color={color}
                                iconStyle={{ width: 24 }}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Directory"
                    component={DirectoryNavigator}
                    options={{
                        title: 'Trail Directory',
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='list'
                                type='font-awesome'
                                size={24}
                                color={color}
                                iconStyle={{ width: 24 }}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerImage: {
        margin: 10,
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: 'center'
    },
    drawerHeaderText: {
        color: '#6b6b6b',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    }
})

export default Main;