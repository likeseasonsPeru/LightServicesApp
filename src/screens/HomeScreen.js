import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
         <Text style={{marginVertical: 20}}> Home Screen</Text>   
         <Text>NOMBRES: Carlo</Text>
        </View>
    );
};

export default HomeScreen;