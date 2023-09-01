import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        elevation: 10,
    },
    modalView: {
        display: 'flex',
        flex: 'auto',
        margin: 1,
        width: '75%',
        backgroundColor: '#F6F4EB',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        // padding: 35,
        paddingLeft: 2,
        paddingRight: 2,
        paddingBottom: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    tabView: {
        display: 'flex',
        flexDirection: 'row',
    },
    tabs: {
        padding: 10,
        flex: 0.5,
        textAlign: 'center',
        // borderRadius: 20,
    },
    nonUserWelcomeContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#F6F4EB',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2
    },
    greetingText: {
        color: '#7A9D54',
        fontSize: '25',
        fontWeight: '500',
        textAlign: 'center'
    },
    appInfoText: {
        color: '#7A8D04',
        fontSize: '15',
        fontWeight: '500',
        textAlign: 'center',
        paddingTop: 8
    },
    loginSignUpbutton: {
        fontSize: '14',
        padding: 8,
        marginTop: 20,
        borderRadius: 10,
        color: 'white',
        backgroundColor: '#557A46',
        textAlign: 'center',
        alignItems: 'center'
    },
    loginSignUpbuttonText: {
        color: 'white'
    },
    userWelcomeContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#F6F4EB',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2
    },
    welcomeLabel: {
        color: '#7A9D54',
        fontSize: '20',
        fontWeight: '500',
        textAlign: 'center',
        paddingTop: 10,
    },
    userLabel: {
        paddingTop: 10,
        color: '#557A46',
        fontSize: '25',
        fontWeight: '500',
        textAlign: 'center'
    },
    userAppInfoText: {
        color: 'grey',
        fontSize: '15',
        textAlign: 'center',
        paddingTop: 15
    },
    faqContainer: {
        display: 'flex',
        backgroundColor: '#F6F4EB',
        padding: 10,
        paddingTop: 50,
    },
    faqItemContainer: {
        display: 'flex',
        backgroundColor: '#557A46',
        padding: 10,
        marginTop: 20,
        borderRadius: 10
    },
    questionText: {
        fontSize: 15,
        color: 'white',
        fontWeight: '500'
    },
    answerText: {
        fontSize: 13,
        color: 'white',
        fontWeight: '300'
    },
    faqLabel: {
        fontSize: 20,
        color: '#557A46',
        fontWeight: '300'
    },
    signoutButtonText: {
        color: 'red',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        fontSize: 20,
        fontWeight: '400'
    },
    signoutButton: {
        marginTop: 30,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgrey'
    },
    activeTab: {
        backgroundColor: '#F6F4EB',
        color: '#557A46',
        fontSize: 18,
        fontWeight: '600',
        // borderRadius: 20,
    },
    notActiveTab: {
        color: '#7A9D54',
        backgroundColor: 'white',
        // borderRadius: 20,
    }
});
export default styles;