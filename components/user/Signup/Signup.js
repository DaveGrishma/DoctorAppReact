import { View, Text, SafeAreaView, TextInput, Button, Pressable } from 'react-native';
import styles from './Styles';
import { useState } from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Signup(props) {

    const [email, onEmailChange] = useState("");
    const [name, onNameChange] = useState("");
    const [password, onPasswordChange] = useState("");
    const [emailErrorMessage, showEmailErrorMessage] = useState(false);
    const [nameErrorMessage, showNameErrorMessage] = useState(false);
    const [passwordErrorMessage, showPasswordErrorMessage] = useState(false);
    const onCancelClick = () => {
        props.onCancel();
    }
    const onSignupButtonClick = () => {
        showEmailErrorMessage(false);
        showPasswordErrorMessage(false);
        showNameErrorMessage(false);
        if (email == undefined || email == null || email == "") {
            showEmailErrorMessage(true);
        }
        else if (name == undefined || name == null || name == "") {
            showNameErrorMessage(true);
        }
        else if (password == undefined || password == null || password == "") {
            showPasswordErrorMessage(true);
        }
        else {
            props.onSignUp(email, name, password);
        }
    }
    return (
        <KeyboardAvoidingView style={styles.mainContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View>
                <View style={styles.inputContainers}>
                    <Text style={styles.inputLabel}>Email : </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onEmailChange}
                        value={email}
                        placeholder="Enter Email"
                        placeholderTextColor="grey"
                        keyboardType='email'
                    />
                </View>
                {emailErrorMessage ?
                    <Text style={styles.errorMessage}>Email is required.</Text>
                    : null}
                <View style={styles.inputContainers}>
                    <Text style={styles.inputLabel}>Name : </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onNameChange}
                        value={name}
                        placeholder="Enter Name"
                        placeholderTextColor="grey"
                        keyboardType='text'
                    />
                </View>
                {nameErrorMessage ?
                    <Text style={styles.errorMessage}>Name is required.</Text>
                    : null}
                <View style={styles.inputContainers}>
                    <Text style={styles.inputLabel}>Password : </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onPasswordChange}
                        value={password}
                        placeholder="Enter Password"
                        placeholderTextColor="grey"
                    />
                </View>
                {
                    passwordErrorMessage ?
                        <Text style={styles.errorMessage}>Password is required.</Text>
                        : null
                }
                <View style={styles.modalButtonsView}>
                    <Pressable style={styles.confirmButton} onPress={onSignupButtonClick}><Text style={styles.modalButtonText}><Ionicons name="create-outline" size="15" color="white" /> Sign Up</Text></Pressable>
                    <Pressable style={styles.cancelButton} onPress={onCancelClick}><Text style={styles.modalButtonText}><Ionicons name="close" size="15" color="white" /> Cancel</Text></Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}