import { useEffect } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import styles from './Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
export default function MyAppointments(props) {

    const onDeleteClick = (id) => {
        Alert.alert(
            'Delete Appointment',
            'Are you sure you want to delete ?', [
            {
                text: 'Confirm',
                onPress: () => {
                    props.onAppointmentDelete(id);
                }
            },
            {
                text: 'Cancel'
            }
        ])
    }
    const Appointment = ({ data }) => (
        <View style={styles.appointmentContainer}>
            <Text style={styles.nameLabel}>Doctor Name : <Text style={styles.nameText}>{data.doctorName}</Text></Text>
            {data?.doctorCategory ? <Text style={styles.timeLabel}>Doctor Category : <Text style={styles.timeText}>{data.doctorCategory}</Text></Text> : null}
            <View style={styles.detailsContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.dateLabel}><Ionicons name="calendar" size="18" color="blue" /> : <Text style={styles.dateText}>{data.date}</Text></Text>
                    <Text style={styles.timeLabel}><Ionicons name="stopwatch" size="18" color="blue" /> : <Text style={styles.timeText}>{data.time}</Text></Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.deleteButton} onPress={() => { onDeleteClick(data.id) }}><Text style={{ color: 'white' }}> <Ionicons name="trash-bin-outline" size="18" color="white" /> Delete</Text></Pressable>
                </View>
            </View>
            <Text style={{ paddingTop: 10 }}>Please note that deleting upcoming appointment will result in cancellation.</Text>
        </View>
    );
    return (
        <View style={styles.pageContainer}>
            {props.currentUser != null ?
                props?.listOfAppointments != null && props?.listOfAppointments?.length != 0 ?
                    <FlatList
                        style={styles.mainContainer}
                        data={props?.listOfAppointments}
                        scrollEnabled={true}
                        renderItem={({ item }) => <Appointment data={item} />}
                        keyExtractor={item => item.id}
                    /> : <Text style={styles.emptyText}>No Appointments to show.</Text>
                : <Text style={styles.emptyText}>Please login to see your appointments.</Text>}
        </View>
    );
}