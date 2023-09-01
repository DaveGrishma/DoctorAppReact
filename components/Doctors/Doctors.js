import { useState } from 'react';
import { View, Text, ScrollView, Modal, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './Styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Doctors(props) {
    const [showModal, setShowModal] = useState(false);
    const [currentDoctor, setcurrentDoctor] = useState(null);
    const [time, setTime] = useState(new Date(Date.now()));
    const [date, setDate] = useState(new Date());
    const onConfirmClick = () => {
        setShowModal(false);
        let data = new Date(date);
        let dateString = data.getDate() + "-" + Number(data.getMonth() + 1) + "-" + data.getFullYear();
        let t = new Date(time);
        let timeString = t.getHours() + ":" + t.getMinutes();
        props.onBookAppointment(currentDoctor.id, currentDoctor.name, dateString, timeString, currentDoctor.category);
    }
    const handleBookAppoint = (event) => {
        setShowModal(true);
        setcurrentDoctor(event);
    }
    const onCancelClick = () => {
        setShowModal(false);
    }

    function onDateSelected(event, value) {
        setDate(new Date(value));
    };

    function onTimeSelected(event, value) {
        setTime(value);

    };
    return (<>

        <ScrollView>
            {props?.listOfDoctors?.map(
                (doctor, index) => (
                    <Pressable key={index}>
                        <View style={styles.doctorCard}>
                            <View style={styles.imageView}>
                                {/* <Text>{doctor?.imageURL}</Text> */}
                                {doctor?.imageURL ? <Image alt='Doctor Image' source={{ uri: doctor?.imageURL + '' }} style={{ width: '100%', height: undefined, aspectRatio: 1, borderRadius: 30 }} /> :
                                    <Ionicons name="ios-person" size="80" color="#557A46" />}
                            </View>
                            <View style={styles.infoView}>
                                <Text style={styles.doctorNameText}>{doctor.name}</Text>
                                <Text style={styles.categoryText}>Category : {doctor.category}</Text>
                                <Text style={styles.yearsText}>Experience: {doctor.yearsOfExperience} years</Text>
                                <Text style={styles.locationText}>Location : {doctor.location}</Text>
                                <Pressable onPress={() => { handleBookAppoint(doctor) }} style={styles.bookAppointmentButton}><Text style={styles.bookAppointmentButtonText}>+ Book an Appointment</Text></Pressable>
                            </View>
                        </View >
                    </Pressable>
                )
            )}

            {props.listOfDoctors?.length == 0 && <Text>No Doctors Available.</Text>}
        </ScrollView>
        <Modal visible={showModal} transparent={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalBookAppointmentTextView}>
                        <Text style={styles.modalBookAppointmentText}>Book an Appointment</Text>
                    </View>
                    <View style={styles.modalDetailsView}>
                        <Text style={styles.modalDoctorNameText}>{currentDoctor?.name}</Text>
                        <Text style={styles.modalLabelText}>Select Date and Time :</Text>
                        <View style={styles.modalDatePickerView}>
                            <DateTimePicker accentColor='#7A9D54' mode="date" minimumDate={new Date()} value={date} onChange={onDateSelected} />
                            <DateTimePicker accentColor='#7A9D54' is24Hour={false} timeZoneOffsetInMinutes={new Date().getTimezoneOffset() * 60} mode="time" minuteInterval={15} value={time} onChange={onTimeSelected} />
                        </View>
                        <View style={styles.modalButtonsView}>
                            <Pressable style={styles.confirmButton} onPress={onConfirmClick}><Text style={styles.modalButtonText}><Ionicons name="checkbox-outline" size="15" color="white" /> Confirm</Text></Pressable>
                            <Pressable style={styles.cancelButton} onPress={onCancelClick}><Text style={styles.modalButtonText}><Ionicons name="close" size="15" color="white" /> Cancel</Text></Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    </>
    );
}