import { useEffect, useState } from 'react';
import { View, Text, Modal, FlatList, KeyboardAvoidingView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './styles';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function User(props) {
    const [LoginSignupModalVisible, setLoginSignupModalVisible] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);
    const onLoginSignupCardPress = () => {
        setLoginSignupModalVisible(true);
    }

    const FAQs = [
        {
            question: 'What is COVID-19 ?',
            answer: 'Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.',
            id: 1
        },
        {
            question: 'How to sanitize hands ?',
            answer: ' Use an alcohol-based hand sanitizer if soap and water are not available.',
            id: 2
        },
        {
            question: 'What is MyDoctorApp ?',
            answer: 'MyDoctorApp is a mobile application that helps you book a doctor appointment.',
            id: 3
        },
        {
            question: 'Is MyDoctorApp is free to use ?',
            answer: 'Yes, MyDoctorApp is free to use for all the users.',
            id: 4
        },
        
    ];
    const Item = ({ data }) => (
        <View style={styles.faqItemContainer}>
            <Text style={styles.questionText}>Question {data.id}. {data.question}</Text>
            <Text style={styles.answerText}>Answer: {data.answer}</Text>
        </View>
    );
    const onLogOut = () => {
        props.onLogOut();
    }
    const handleCancel = () => {
        setLoginSignupModalVisible(false);
    }
    useEffect(() => {
        if (props.currentUser != null) {
            setLoginSignupModalVisible(false);
        }
    });
    return (
        <View style={styles.mainContainer}>{
            props.currentUser == null ?
                <View style={styles.nonUserWelcomeContainer}>
                    <Pressable onPress={onLoginSignupCardPress}>
                        <Text style={styles.greetingText}>Welcome to MyDoctorApp</Text>
                        <Text style={styles.appInfoText}>Booking a doctor's appointment is now simplified.</Text>
                        <Pressable onPress={onLoginSignupCardPress} style={styles.loginSignUpbutton}><Text style={styles.loginSignUpbuttonText}>Please click here to Login / Signup.</Text></Pressable>
                    </Pressable>
                </View> : <View style={styles.userWelcomeContainer}>
                    <Text style={styles.welcomeLabel}>Welcome Back, </Text>
                    <Text style={styles.userLabel}>{props.currentUser.name}</Text>
                    <Text style={styles.userAppInfoText}>{props.currentUser.name}, you can now browse through doctors and book an appointment.</Text>
                </View>}
            <View style={styles.faqContainer}>
                <Text style={styles.faqLabel}>Frequently Asked Questions (FAQ): </Text>
                <FlatList
                    data={FAQs}
                    scrollEnabled={true}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
            {props.currentUser != null ? <View><Pressable onPress={onLogOut} style={styles.signoutButton}><Text style={styles.signoutButtonText}><Ionicons name="log-out" size="20" color="red" />Logout</Text></Pressable></View> : null}
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={LoginSignupModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setLoginSignupModalVisible(!LoginSignupModalVisible);
                    }}>
                    <KeyboardAvoidingView style={styles.centeredView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View style={styles.modalView}>
                            <View style={styles.tabView}>
                                <Text style={[currentTab == 0 ? styles.activeTab : styles.notActiveTab, styles.tabs]} onPress={() => { setCurrentTab(0) }}>Login</Text>
                                <Text style={[currentTab == 1 ? styles.activeTab : styles.notActiveTab, styles.tabs,]} onPress={() => { setCurrentTab(1) }}>Signup</Text>
                            </View>
                            {currentTab == 0 ?
                                <Login onCancel={handleCancel} onLogin={props.onLogin} />
                                : <Signup onCancel={handleCancel} onSignUp={props.onSignUp} />}
                        </View>
                    </KeyboardAvoidingView>
                </Modal>
            </View>
        </View>
    );
}