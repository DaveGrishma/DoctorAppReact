import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#557A46',
        height: '100%'
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20
    },
    appointmentContainer: {
        padding: 10,
        margin: 10,
        display: 'flex',
        borderRadius: 10,
        backgroundColor: '#F6F4EB'
    },
    emptyText: {
        paddingTop: 350,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    nameLabel: {
        paddingTop: 5,
        fontSize: 16,
        fontWeight: '600'
    },
    nameText: {
        fontSize: 16,
        fontWeight: '500'
    },
    dateLabel: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: '600'
    },
    dateText: {
        fontSize: 15,
        fontWeight: '500'
    },
    timeLabel: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: '600'
    },
    timeText: {
        fontSize: 15,
        fontWeight: '500'
    },
    detailsContainer:
    {
        display: 'flex',
        flexDirection: 'row',

    },
    textContainer: {
        flex: 0.4
    },
    buttonContainer: {
        flex: 0.6,
        display: 'flex',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    deleteButton: {
        fontSize: '14',
        padding: 5,
        borderRadius: 10,
        color: 'white',
        backgroundColor: 'red',
        width: '40%',
        alignContent: 'flex-end',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});
export default styles;