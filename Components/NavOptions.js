import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const DATA = [{
    id: '100',
    title: 'Get a ride',
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569012661/assets/19/dea9bc-88d6-461e-a233-17ed4d8cdc09/original/Taxi.png',
    screen:'MapScreen'
},
{
    id: '101',
    title: 'Order food',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp-LI56Hd_9lXuB7WI8y0ZeCn74DYQaFPUw&s',
    screen: 'EatsScreen',
}];

const Item = ({itemImage}) => (
    <TouchableOpacity style={[{height: '55%'}, tw `m-2 pl-6 pb-8 pt-4 w-40 bg-gray-200`]}>
      <View>
        <Image 
            style={{ height: '50%', width:'75%'}}
            source={{uri: itemImage[0]}}
        />
        <Text style={tw`mt-6 text-lg font-semibold`}>{itemImage[1]}</Text>
      </View>
    </TouchableOpacity>
  );

  
const NavOptions = () => {
    return(
        <FlatList
        data={DATA}
        horizontal
        renderItem={({item}) => <Item itemImage={[item.image, item.title]} />}
        keyExtractor={item => item.id}
      />
    )
};

export default NavOptions;