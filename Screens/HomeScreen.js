import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../Components/NavOptions';

//SafeAreaView  works only on ios 
const HomeScreen = () =>{
    return(
        <View style={[tw`bg-white h-full`]}>
            <View style={tw`pt-10 pl-3`}>
                <Image style= {{ width:80, height:80, resizeMode: "contain"}} 
                       source={{
                         uri:'https://static-00.iconduck.com/assets.00/uber-icon-2047x2048-su5smknl.png'
                       }}
                >

                </Image>
                <NavOptions />
            </View>
        </View>
    )
};



export default HomeScreen;