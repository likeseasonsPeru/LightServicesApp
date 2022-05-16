import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, Alert } from 'react-native';
import {useForm} from '../hooks/useForm';
import { CheckBox } from '@rneui/themed';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {

    const {login}  = useContext(AuthContext)

    const [checked, isChecked] = useState(false);
    const {email, password, onChange} = useForm({
        email: '',
        password: '',
      });
    const onLogin = async() => {
        console.log({email, password})
        const data = { email, password};
        const validation = Object.values(data).filter((v) => v === "");
        console.log(validation.length > 0, Object.values(data))
        if(validation.length > 0) {
            Alert.alert("Complete correctamente los campos")
        }
        try {
            await login({email, password})
            navigation.replace("Tabs")
        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresar</Text>
            <View>
                <Text style={styles.label}>Correo:</Text>
                <TextInput 
                    placeholder="Ingrese su correo"
                    placeholderTextColor="#e4e4e4"
                    underlineColorAndroid="white"
                    selectionColor="white"
                    style={[
                        styles.inputField,
                        Platform.OS === 'ios' && styles.inputFieldIOS,
                    ]}
                    autoCapitalize="none"
                    onChangeText={value => onChange(value, 'email')}
                    value={email}
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    placeholder="Ingrese su password"
                    placeholderTextColor="#e4e4e4"
                    underlineColorAndroid="white"
                    secureTextEntry={true}
                    style={[
                    styles.inputField,
                    Platform.OS === 'ios' && styles.inputFieldIOS,
                    ]}
                    selectionColor="white"
                    onChangeText={value => onChange(value, 'password')}
                    value={password}
                    onSubmitEditing={onLogin}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.repeat}>
                    <CheckBox title="Recuérdame" checked={checked} onPress={()=> isChecked(!checked)}/>
                    <Text style={styles.textColor}>Recuperar contraseña?</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnToLogin} onPress={onLogin}>
                        <Text style={styles.btnText}>Ingresar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.containerToRegister} onPress={() => navigation.replace("Register")}>
                        <Text style={styles.btnToRegister}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
)};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 40,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "600"
    },
    label: {
        marginTop: 25,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    inputField: {
        color: '#000',
        fontSize: 20,
    },
    inputFieldIOS: {
        borderColor: '#000',
        borderWidth: 0.5,
        padding: 4,
    },
    repeat: {
        marginVertical: 20,
        marginLeft: -20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btnToLogin: {
        backgroundColor: "rgb(99, 175, 75)",
        padding: 4,
    },
    textColor: {
        color: "rgb(105, 180, 87)"
    },
    btnText: {
        color: "#000",
        fontWeight: "600",
        padding: 4,
        textAlign: "center",
        fontSize: 18
    },
    containerToRegister:{
        marginTop: 30,
    },
    btnToRegister: {
        color: "blue",
        fontSize: 18,
        textDecorationLine: "underline",
        textDecorationColor: "blue",
        textAlign: "right"
    }
})