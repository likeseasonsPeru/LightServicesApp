import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useForm } from '../hooks/useForm';
import { CheckBox } from '@rneui/themed';

const RegisterScreen = ({navigation}) => {
    const [isEmpleador, setIsEmpleador] = useState(false);
    const [checked, isChecked] = useState(false);
    const {email, name, lastname, password, confirmPassword, onChange} = useForm({
      email: "",
      name: "",
      lastname: "",
      password: "",
      confirmPassword: ""
    })

    const onRegister = () => {
        const data = { email, name, lastname, password, confirmPassword};
        const validation = Object.values(data).filter((v) => v === "");
        console.log(validation.length > 0, Object.values(data))
        if(validation.length > 0) {
            Alert.alert("Complete correctamente los campos")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View>
                <Text style={styles.label}>Nombres</Text>
                <TextInput 
                    placeholder="Ingrese sus nombres"
                    placeholderTextColor="#e4e4e4"
                    underlineColorAndroid="white"
                    selectionColor="white"
                    style={[
                        styles.inputField,
                        Platform.OS === 'ios' && styles.inputFieldIOS,
                    ]}
                    autoCapitalize="none"
                    onChangeText={value => onChange(value, 'name')}
                    value={name}
                    onSubmitEditing={onRegister}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.label}>Apellidos</Text>
                <TextInput 
                    placeholder="Ingrese sus apellidos"
                    placeholderTextColor="#e4e4e4"
                    underlineColorAndroid="white"
                    selectionColor="white"
                    style={[
                        styles.inputField,
                        Platform.OS === 'ios' && styles.inputFieldIOS,
                    ]}
                    autoCapitalize="none"
                    onChangeText={value => onChange(value, 'lastname')}
                    value={lastname}
                    onSubmitEditing={onRegister}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.label}>Correo</Text>
                <TextInput 
                    placeholder="Ingrese su correo"
                    placeholderTextColor="#e4e4e4"
                    underlineColorAndroid="white"
                    keyboardType="email-address"
                    selectionColor="white"
                    style={[
                        styles.inputField,
                        Platform.OS === 'ios' && styles.inputFieldIOS,
                    ]}
                    autoCapitalize="none"
                    onChangeText={value => onChange(value, 'email')}
                    value={email}
                    onSubmitEditing={onRegister}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput 
                    placeholder="Ingrese su contraseña"
                    placeholderTextColor="#e4e4e4"
                    underlineColorAndroid="white"
                    secureTextEntry={true}
                    selectionColor="white"
                    style={[
                        styles.inputField,
                        Platform.OS === 'ios' && styles.inputFieldIOS,
                    ]}
                    autoCapitalize="none"
                    onChangeText={value => onChange(value, 'password')}
                    value={password}
                    onSubmitEditing={onRegister}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.label}>Confirmar Contraseña</Text>
                <TextInput 
                    placeholder="Confirme su contraseña"
                    placeholderTextColor="#e4e4e4"
                    underlineColorAndroid="white"
                    secureTextEntry={true}
                    selectionColor="white"
                    style={[
                        styles.inputField,
                        Platform.OS === 'ios' && styles.inputFieldIOS,
                    ]}
                    autoCapitalize="none"
                    onChangeText={value => onChange(value, 'confirmPassword')}
                    value={confirmPassword}
                    onSubmitEditing={onRegister}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.repeat}>
                    <CheckBox title="Términos y condiciones" checked={checked} onPress={()=> isChecked(!checked)}/>
                </View>

                <View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnToLogin} onPress={onRegister}>
                        <Text style={styles.btnText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                
                <View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.containerToRegister} onPress={() => navigation.replace("Login")}>
                        <Text style={styles.btnToRegister}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;

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
        fontWeight: '600',
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
    btnToLogin: {
        backgroundColor: "rgb(99, 175, 75)",
        padding: 4,
    },
    textColor: {
        color: "rgb(105, 180, 87)"
    },
    repeat: {
        marginVertical: 20,
        marginLeft: -20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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