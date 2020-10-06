import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';


import AddForm from '../screens/AddForm';
import noteNavigator from './Notenavigator';

const Stack = createStackNavigator()

const AppNavigator =  () => (
    <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={noteNavigator}/>
        <Stack.Screen name="add" component={AddForm} />
    </Stack.Navigator>
)


export default AppNavigator