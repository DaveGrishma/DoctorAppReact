import { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import styles from './Styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Login(props) {
    const [email, onEmailChange] = useState("");
    const [password, onPasswordChange] = useState("");
    const [emailErrorMessage, showEmailErrorMessage] = useState(false);
    const [passwordErrorMessage, showPasswordErrorMessage] = useState(false);
    const onCancelClick = () => {
        props.onCancel();
    }
    const onLoginButtonClick = () => {
        showEmailErrorMessage(false);
        showPasswordErrorMessage(false);

        if (email == undefined || email == null || email == "") {
            showEmailErrorMessage(true);
        }
        else if (password == undefined || password == null || password == "") {
            showPasswordErrorMessage(true);
        }
        else {
            props.onLogin(email, password);
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
                        placeholder="Enter email"
                        placeholderTextColor="grey"
                    />
                </View>
                {emailErrorMessage ?
                    <Text style={styles.errorMessage}>Email is required.</Text>
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
                {passwordErrorMessage ?
                    <Text tyle={styles.errorMessage}>Password is required.</Text>
                    : null}
                <View style={styles.modalButtonsView}>
                    <Pressable style={styles.confirmButton} onPress={onLoginButtonClick}><Text style={styles.modalButtonText}><Ionicons name="log-in" size="15" color="white" /> Login</Text></Pressable>
                    <Pressable style={styles.cancelButton} onPress={onCancelClick}><Text style={styles.modalButtonText}><Ionicons name="close" size="15" color="white" /> Cancel</Text></Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}