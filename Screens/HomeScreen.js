import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

//SafeAreaView  works only on ios 
const HomeScreen = () =>{
    return(
        <View style={tw`bg-white h-full`}>
            <Text style={tw`text-red-500 p-10`}>
                Home
            </Text>
        </View>
    )
};



export default HomeScreen;