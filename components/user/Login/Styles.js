import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: '100%',
        color: 'black',
        borderColor: '#557A46'
    },
    inputPlaceHolder: {
        color: 'black'
    },
    mainContainer: {
        display: 'flex',
        width: '80%',
        paddingTop: 20
    },
    inputContainers: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    inputLabel: {
        color: '#7A9D54',
        fontSize: '17',
        fontWeight: '500'
    },
    errorMessage: {
        color: 'red',
        paddingBottom: 10,
    },
    modalButtonsView: {
        display: 'flex',
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    confirmButton: {
        flex: '0.4',
        fontSize: '14',
        padding: 8,
        borderRadius: 10,
        color: 'white',
        backgroundColor: '#557A46',
        textAlign: 'center',
        marginRight: 5
    },
    cancelButton: {
        flex: '0.4',
        fontSize: '14',
        padding: 8,
        borderRadius: 10,
        color: 'white',
        backgroundColor: 'red',
        textAlign: 'center',
        marginLeft: 5
    },
    modalButtonText: {
        textAlign: 'center',
        color: '#F6F4EB'
    }
});
export default styles;