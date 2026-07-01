import { StyleSheet, Text, View, StatusBar, Switch, Platform, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import { useState } from 'react';
import { TextInput, Button, Alert } from "react-native";
import logoImage from "../../../assets/images/android-icon-background.png"




function RNforms() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const validateForm = () => {
        let errors = {};

        if (!username) errors.username = "Username is required";
        if (!password) errors.password = "Password is required";

        setError(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Submitted", username, password);

            setUsername("");
            setPassword("");
            setError({});
        }
    };



    return (

        <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>


            <View style={styles.form}>

                {/* i want an image on top please do it on top center */}
                <Image source={logoImage} style={styles.logoImage}></Image>


                <Text style={styles.label}>Username</Text>
                {error.username ? (<Text style={styles.error}>{error.username}</Text>) : null}

                <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />

                <Text style={styles.label}>Password</Text>
                {error.password ? (<Text style={styles.error}>{error.password}</Text>) : null}

                <TextInput value={password} onChangeText={setPassword} secureTextEntry placeholder="Password" style={styles.input} />
                <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>


            </View>
        </KeyboardAvoidingView>



    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,

    },
    form: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4, elevation: 8,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        margin: 12,

    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 4,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
        marginBottom: 30,
        height: 40,

    },
    submitButton: {
        borderRadius: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
    },

    submitButtonText: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
        fontWeight: 'bold',
        fontSize: 16,
    },
    logoImage: {
        width: 150, height: 150, alignSelf: 'center', marginBottom: 20
    }
    ,
    error: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 4,
    }
});



export default RNforms;