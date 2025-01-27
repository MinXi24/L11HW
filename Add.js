import React, { useState } from 'react';
import { StatusBar, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    frame1Container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(45,99,93,0.56)',
    },
    inputField: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        color: "rgba(30, 30, 30, 1)",
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    input: {
        height: 45,
        backgroundColor: "rgba(220,165,165,0.7)",
        borderRadius: 8,
        borderColor: "#a17a7a",
        borderWidth: 1,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    buttonGroup: {
        width: '100%',
        marginTop: 30,
    },
    button: {
        backgroundColor: "#57829c",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    h1: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'rgb(106,64,158)',
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: '600',
    },


});

const Add = ({ navigation, route }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const mydata = route.params?.datastr ? JSON.parse(route.params.datastr) : [];

    return (
        <View style={styles.frame1Container}>
            <StatusBar />
            <Text style = {styles.h1}>ღ❣Registrationღ❣</Text>
            <Text> </Text>

            <View style={styles.inputField}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                />
            </View>

            <View style={styles.inputField}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                />
            </View>

            <View style={styles.inputField}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    value={number}
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={() => {
                    let item = { name: name, email: email, number: number };
                    mydata.push(item);
                    fetch("https://f43b2ff89cb44ee99e4eaf6f01d35a1d.api.mockbin.io/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "HEEHEE",
                        },
                        body: JSON.stringify(mydata),
                    })
                        .then((response) => {
                            navigation.navigate('Home');
                        });
                }}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Add;
