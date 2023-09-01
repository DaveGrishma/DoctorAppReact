import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import User from './components/user/User/User';
import Doctors from './components/Doctors/Doctors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles/main';
import { initializeApp } from 'firebase/app';
import { addDoc, deleteDoc, doc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { collection }
  from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { useEffect, useState } from 'react';
import MyAppointments from './components/user/MyAppointments/MyAppointments';

const Tab = createBottomTabNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyARivS-IvzGUzSrNFLXjQhUSgEs0gj_g1c",
  authDomain: "mydoctorapp-332ec.firebaseapp.com",
  projectId: "mydoctorapp-332ec",
  storageBucket: "mydoctorapp-332ec.appspot.com",
  messagingSenderId: "814548459887",
  appId: "1:814548459887:web:e1e29fb162193b605f489a",
  measurementId: "G-617ZM9RECR"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const userCollection = collection(db, 'users');
export const doctorsCollection = collection(db, 'doctors');
export const appointmentsCollection = collection(db, 'appointments');

export default function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [listOfDoctors, setListOfDoctors] = useState(null);
  const [listOfAppointments, setListOfAppointments] = useState(null);
  useEffect(() => {
    getDoctors();
  }, []);

  const getAppointments = (id) => {
    const dbQuery = query(appointmentsCollection, where('userId', '==', id));
    getDocs(dbQuery).then((querySnapshot) => {
      const appointments = [];
      querySnapshot.forEach((doc) => {
        appointments.push({
          id: doc.id,
          userId: doc.data().doctorId,
          doctorId: doc.data().doctorId,
          doctorName: doc.data().doctorName,
          doctorCategory: doc.data()?.doctorCategory,
          date: doc.data().date,
          time: doc.data().time
        });
      });
      setListOfAppointments(appointments);
    })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
  const getDoctors = () => {
    getDocs(doctorsCollection)
      .then((querySnapshot) => {
        const doctors = [];
        querySnapshot.forEach((doc) => {
          doctors.push({
            id: doc.id,
            category: doc.data().category,
            location: doc.data().location,
            name: doc.data().name,
            yearsOfExperience: doc.data().yearsOfExperience,
            imageURL: doc.data().imageURL
          });
        });
        setListOfDoctors(doctors);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
  const handleSignup = (email, name, password) => {
    const dbQuery = query(userCollection, where('email', '==', email));
    getDocs(dbQuery).then((querySnapshot) => {
      if (querySnapshot.size > 0) {
        alert("User already exist with given email.");
      }
      else {
        addDoc(userCollection, {
          email: email,
          name: name,
          password: password
        })
          .then((docRef) => {
            alert("User created. Please login.");
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    });
  }
  const handleLogOut = () => {
    setCurrentUser(null);
    setListOfAppointments(null);
  }
  const onBookAppointment = (doctorid, doctorName, date, time, category) => {
    if (currentUser) {
      addDoc(appointmentsCollection, {
        doctorId: doctorid,
        userId: currentUser.id,
        doctorName: doctorName,
        date: date,
        time: time,
        doctorCategory: category
      })
        .then((docRef) => {
          if (docRef) {
            alert("Appoitment confirmed");
            getAppointments(currentUser.id);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    else {
      alert("Please login first to book an appointment.");
    }
  }
  const handleLogin = (email, password) => {
    const dbQuery = query(userCollection, where('email', '==', email), where('password', '==', password));
    let data = {};
    getDocs(dbQuery).then((querySnapshot) => {
      if (querySnapshot.size > 0) {
        querySnapshot.forEach(data => {
          if (data.id) {
            data = { id: data.id, email: data.data().email, name: data.data().name };
            setCurrentUser(data);
            getAppointments(data.id);
          }
        })
      }
      else {
        alert("Email and password does not match. Please try again.");
      }
    });
  }
  const handleDeleteAppointment = (id) => {
    const dbDoc = doc(db, 'appointments', id);
    deleteDoc(dbDoc)
      .then(() => {
        alert("Appointment Deleted.");
        getAppointments(currentUser.id);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: true,
            headerTintColor: '#557A46',
            tabBarActiveTintColor: '#557A46',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name == 'Doctors') {
                iconName = focused
                  ? 'ios-add-circle'
                  : 'ios-add-circle-outline';
              } else if (route.name == 'My Appointments') {
                iconName = focused ? 'book' : 'book-outline';
              }
              else if (route.name == 'User') {
                iconName = focused ? 'ios-person' : 'ios-person-outline';
              }
              return <Ionicons name={iconName} size="25" color="#557A46" />;
            },
          })
          }
        >
          <Tab.Screen name='Doctors'>
            {(props) => (
              <Doctors onBookAppointment={onBookAppointment} listOfDoctors={listOfDoctors} {...props} />
            )}
          </Tab.Screen>
          <Tab.Screen name='My Appointments'>
            {(props) => (
              <MyAppointments onAppointmentDelete={handleDeleteAppointment} listOfAppointments={listOfAppointments} currentUser={currentUser} />
            )}
          </Tab.Screen>
          <Tab.Screen name='User'>
            {(props) => (
              <User {...props} currentUser={currentUser} onLogOut={handleLogOut} onLogin={handleLogin} onSignUp={handleSignup} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}