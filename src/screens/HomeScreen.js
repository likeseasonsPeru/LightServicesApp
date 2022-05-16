import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
    const {dispatch, user} = useContext(AuthContext);

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
         <Text style={{marginVertical: 20}}> Home Screen</Text>   
         <Text>NOMBRES: {user.username}</Text>
         <TouchableOpacity activeOpacity={0.8} style={{width:100, backgroundColor: "red", borderRadius: 1000, marginTop: 20}} onPress={() => dispatch({type:"SIGNOUT"})}>
             <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center', paddingVertical: 5}} >SIGNOUT</Text>
         </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;