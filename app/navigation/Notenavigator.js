import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import OneNote from '../screens/OneNote';
import HomeScreen from '../screens/HomeScreen';
import EditNote from '../screens/EditNote';

const Stack = createStackNavigator()

const noteNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'HOME' }}/>
        <Stack.Screen name="note" component={OneNote} options={{ title: 'MY NOTE' }} />
        <Stack.Screen name="edit" component={EditNote} options={{ title: 'EDIT NOTE' }} />
    </Stack.Navigator>
)

export default noteNavigator