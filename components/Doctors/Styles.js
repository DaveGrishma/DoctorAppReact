import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        display: 'flex',
        flex: 'auto',
        margin: 10,
        width: '70%',
        backgroundColor: '#F6F4EB',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#557A46',
        shadowOffset: {
            width: 5,
            height: 8,
        },
        shadowOpacity: 0.35,
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
        flex: 0.2
    },
    title: {
        color: 'black',
    },
    doctorCard: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F6F4EB',
        shadowColor: '#557A46',
        shadowOffset: {
            width: 5,
            height: 8,
        },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        elevation: 5,
    },
    imageView: {
        flex: '0.3',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15
    },
    infoView: {
        flex: '0.6',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    doctorNameText: {
        fontSize: '17',
        fontWeight: '700',
        color: '#7A9D54',
        paddingBottom: 5
    },
    locationText: {
        fontSize: '14',
        paddingBottom: 8
    },
    categoryText: {
        fontSize: '14',
        paddingBottom: 3
    },
    yearsText: {
        fontSize: '14',
        paddingBottom: 3
    },
    bookAppointmentButton: {
        fontSize: '14',
        padding: 8,
        borderRadius: 10,
        color: 'white',
        backgroundColor: '#557A46',
        width: '100%',
        textAlign: 'center'
    },
    bookAppointmentButtonText: {
        textAlign: 'center',
        color: 'white',
    },
    modalBookAppointmentTextView: {
        borderBottomWidth: '2',
        width: '100%',
        textAlign: 'center',
        borderBottomColor: '#557A46',
    },
    modalBookAppointmentText: {
        fontSize: '20',
        fontWeight: '600',
        paddingBottom: 5,
        textAlign: 'center',
    },
    modalDetailsView: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 10
    },
    modalDoctorNameText: {
        fontSize: '22',
        fontWeight: '500',
        color: '#7A9D54'
    },
    modalLabelText: {
        paddingTop: 25,
    },
    modalDatePickerView: {
        display: 'flex',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
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