import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function HomeScreen() {
  // Toggles for "Show Archived" and "Show Canceled"
  const [showArchived, setShowArchived] = useState(false);
  const [showCanceled, setShowCanceled] = useState(false);

  // Sample data for calendar items
  const calendarData = [
    {
      id: 1,
      title: 'Direct Therapy with taha, Hor',
      date: '17 Feb 2025 03:00 PM - 05:30 PM',
      billable: true,
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Direct Therapy with john, Hor',
      date: '17 Feb 2025 05:00 PM - 07:30 PM',
      billable: true,
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Direct Therapy with taha, Hor',
      date: '18 Feb 2025 10:00 AM - 12:30 PM',
      billable: true,
      status: 'Pending',
    },
    {
      id: 4,
      title: 'Direct Therapy with john, Hor',
      date: '18 Feb 2025 02:00 PM - 04:30 PM',
      billable: true,
      status: 'Need Verification',
    },
  ];

  // Function to get status style based on status text
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return styles.statusCompleted;
      case 'Pending':
        return styles.statusPending;
      case 'Need Verification':
        return styles.statusVerification;
      default:
        return {};
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Left side: Logo Here */}
        <Text style={styles.logoText}>Logo Here</Text>

        {/* Right side: Avatar or Icon */}
        <TouchableOpacity style={styles.avatarContainer}>
          {/* Replace with an actual Image or Icon */}
          <View style={styles.avatarPlaceholder}>
            <Text style={{ color: '#fff' }}>T</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Welcome text */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome Back,</Text>
        <Text style={styles.userName}>Taha</Text>
      </View>

      {/* Toggles */}
      <View style={styles.togglesContainer}>
        <View style={styles.toggleItem}>
          <Text style={styles.toggleText}>Show Archived</Text>
          <Switch
            trackColor={{ false: '#ccc', true: '#007bff' }}
            thumbColor={showArchived ? '#fff' : '#fff'}
            ios_backgroundColor="#ccc"
            onValueChange={() => setShowArchived(!showArchived)}
            value={showArchived}
          />
        </View>
        <View style={styles.toggleItem}>
          <Text style={styles.toggleText}>Show Canceled</Text>
          <Switch
            trackColor={{ false: '#ccc', true: '#007bff' }}
            thumbColor={showCanceled ? '#fff' : '#fff'}
            ios_backgroundColor="#ccc"
            onValueChange={() => setShowCanceled(!showCanceled)}
            value={showCanceled}
          />
        </View>
      </View>

      {/* Calendar Label */}
      <Text style={styles.calendarLabel}>Calendar</Text>

      {/* Calendar Items List */}
      <ScrollView contentContainerStyle={styles.calendarList}>
        {calendarData.map((item) => (
          <View key={item.id} style={styles.calendarCard}>
            {/* Left side: Billable and Title */}
            <View style={{ flex: 1 }}>
              <View style={styles.topRow}>
                {item.billable && <Text style={styles.billableText}>Billable</Text>}
                <Text style={styles.titleText}>{item.title}</Text>
              </View>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>

            {/* Right side: Status */}
            <View style={[styles.statusContainer, getStatusStyle(item.status)]}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation Placeholder */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Data Collect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    backgroundColor: '#007bff',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#555',
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  togglesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    marginRight: 8,
    fontSize: 14,
    color: '#000',
  },
  calendarLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
    paddingHorizontal: 20,

    color: '#000',
  },
  calendarList: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Extra space so it doesn't hide behind bottom nav
  },
  calendarCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // shadow for iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation for Android
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  billableText: {
    backgroundColor: '#e5f7ff',
    color: '#007bff',
    fontWeight: '600',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 10,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  dateText: {
    fontSize: 12,
    color: '#777',
  },
  statusContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  statusCompleted: {
    backgroundColor: '#28a745', // Green
  },
  statusPending: {
    backgroundColor: '#ffc107', // Yellow/Orange
  },
  statusVerification: {
    backgroundColor: '#dc3545', // Red
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007bff',
  },
});




// import { useState } from "react"
// import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, Switch, StatusBar } from "react-native"
// import { Calendar, CheckSquare, Bell, Home, FileText, User } from "lucide-react-native"

// export default function App() {
//   const [showArchived, setShowArchived] = useState(false)
//   const [showCanceled, setShowCanceled] = useState(true)

//   const appointments = [
//     {
//       id: 1,
//       therapistName: "taha",
//       title: "Direct Therapy with taha, Hor",
//       date: "17 Feb 2025",
//       timeStart: "03:00 PM",
//       timeEnd: "05:30 PM",
//       status: "completed",
//       billable: true,
//     },
//     {
//       id: 2,
//       therapistName: "john",
//       title: "Direct Therapy with john, Hor",
//       date: "17 Feb 2025",
//       timeStart: "03:00 PM",
//       timeEnd: "05:30 PM",
//       status: "completed",
//       billable: true,
//       selected: true,
//     },
//     {
//       id: 3,
//       therapistName: "john",
//       title: "Direct Therapy with john, Hor",
//       date: "17 Feb 2025",
//       timeStart: "03:00 PM",
//       timeEnd: "05:30 PM",
//       status: "pending",
//       billable: true,
//     },
//     {
//       id: 4,
//       therapistName: "john",
//       title: "Direct Therapy with john, Hor",
//       date: "17 Feb 2025",
//       timeStart: "03:00 PM",
//       timeEnd: "05:30 PM",
//       status: "needsVerification",
//       billable: true,
//     },
//   ]

//   const renderStatusIcon = (status) => {
//     switch (status) {
//       case "completed":
//         return <CheckSquare size={24} color="#22c55e" />
//       case "pending":
//       case "needsVerification":
//         return <Calendar size={24} color="#f97316" />
//       default:
//         return <Calendar size={24} color="#f97316" />
//     }
//   }

//   const getStatusText = (status) => {
//     switch (status) {
//       case "completed":
//         return "Completed"
//       case "pending":
//         return "Pending"
//       case "needsVerification":
//         return "Need Verification"
//       default:
//         return ""
//     }
//   }

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "completed":
//         return "#22c55e"
//       case "pending":
//         return "#f97316"
//       case "needsVerification":
//         return "#ef4444"
//       default:
//         return "#000000"
//     }
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <StatusBar barStyle="light-content" />

//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.profileSection}>
//           <View style={styles.avatar}>
//             <Text style={styles.avatarText}>T</Text>
//           </View>
//           <View>
//             <Text style={styles.welcomeText}>Welcome Back,</Text>
//             <Text style={styles.nameText}>Taha</Text>
//           </View>
//         </View>
//         <View style={styles.logoSection}>
//           <Text style={styles.logoText}>Logo Here</Text>
//         </View>
//         <TouchableOpacity style={styles.notificationButton}>
//           <Bell size={24} color="#ffffff" />
//         </TouchableOpacity>
//       </View>

//       {/* Toggle Switches */}
//       <View style={styles.toggleContainer}>
//         <View style={styles.toggleRow}>
//           <Text style={styles.toggleLabel}>Show Archived</Text>
//           <Switch
//             value={showArchived}
//             onValueChange={setShowArchived}
//             trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
//             thumbColor="#ffffff"
//           />
//         </View>
//         <View style={styles.toggleRow}>
//           <Text style={styles.toggleLabel}>Show Canceled</Text>
//           <Switch
//             value={showCanceled}
//             onValueChange={setShowCanceled}
//             trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
//             thumbColor="#ffffff"
//           />
//         </View>
//       </View>

//       {/* Calendar Section */}
//       <View style={styles.calendarSection}>
//         <Text style={styles.sectionTitle}>Calendar</Text>

//         <ScrollView style={styles.appointmentList}>
//           {appointments.map((appointment) => (
//             <View
//               key={appointment.id}
//               style={[styles.appointmentCard, appointment.selected && styles.selectedAppointment]}
//             >
//               <View style={styles.appointmentIconContainer}>{renderStatusIcon(appointment.status)}</View>
//               <View style={styles.appointmentDetails}>
//                 <Text style={styles.appointmentTitle}>{appointment.title}</Text>
//                 <Text style={styles.appointmentTime}>
//                   {appointment.date}, {appointment.timeStart} - {appointment.timeEnd}
//                 </Text>
//                 <Text style={styles.billableText}>Billable</Text>
//               </View>
//               <View style={styles.statusContainer}>
//                 <Text style={[styles.statusText, { color: getStatusColor(appointment.status) }]}>
//                   {getStatusText(appointment.status)}
//                 </Text>
//               </View>
//             </View>
//           ))}
//         </ScrollView>
//       </View> */}

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Home size={24} color="#3b82f6" />
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <FileText size={24} color="#6b7280" />
//           <Text style={styles.navText}>Data Collect</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <User size={24} color="#6b7280" />
//           <Text style={styles.navText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#3b82f6",
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//   },
//   profileSection: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#60a5fa",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 12,
//   },
//   avatarText: {
//     color: "#ffffff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   welcomeText: {
//     color: "#ffffff",
//     fontSize: 12,
//   },
//   nameText: {
//     color: "#ffffff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   logoSection: {
//     backgroundColor: "#ffffff",
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//   },
//   logoText: {
//     fontWeight: "500",
//   },
//   notificationButton: {
//     padding: 8,
//   },
//   toggleContainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     backgroundColor: "#ffffff",
//   },
//   toggleRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   toggleLabel: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#1f2937",
//   },
//   calendarSection: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 16,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 16,
//     color: "#1f2937",
//   },
//   appointmentList: {
//     flex: 1,
//   },
//   appointmentCard: {
//     flexDirection: "row",
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   selectedAppointment: {
//     borderWidth: 2,
//     borderColor: "#3b82f6",
//   },
//   appointmentIconContainer: {
//     marginRight: 12,
//     justifyContent: "center",
//   },
//   appointmentDetails: {
//     flex: 1,
//   },
//   appointmentTitle: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#1f2937",
//     marginBottom: 4,
//   },
//   appointmentTime: {
//     fontSize: 12,
//     color: "#6b7280",
//     marginBottom: 4,
//   },
//   billableText: {
//     fontSize: 14,
//     color: "#4b5563",
//   },
//   statusContainer: {
//     justifyContent: "center",
//   },
//   statusText: {
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   bottomNav: {
//     flexDirection: "row",
//     backgroundColor: "#ffffff",
//     paddingVertical: 12,
//     borderTopWidth: 1,
//     borderTopColor: "#e5e7eb",
//   },
//   navItem: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   navText: {
//     fontSize: 12,
//     marginTop: 4,
//     color: "#6b7280",
//   },
// })

