import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import  Constants  from 'expo-constants';

const Screen = ({children, style}) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <View style={styles.main}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        paddingTop: Constants.statusBarHeight
    },
    main:{
        flex: 1
    }
})
