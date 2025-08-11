import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { LogLevel, OneSignal } from 'react-native-onesignal';

const App = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // Initialize OneSignal
    OneSignal.initialize('fc83a11a-a097-4f44-859a-9d0a465c6cec');
    setIsInitialized(true);
  // Initialize with your OneSignal App ID
  // OneSignal.initialize('YOUR_APP_ID');
  // Use this method to prompt for push notifications.
  // We recommend removing this method after testing and instead use In-App Messages to prompt for notification permission.
    OneSignal.Notifications.requestPermission(false)
    // Request notification permission
    // OneSignal.Notifications.requestPermission(true).then((accepted) => {
    //   setHasPermission(accepted);
    //   console.log('User accepted notifications:', accepted);
    // });


// Correct - with proper event name and listener
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
  Alert.alert('Notification Clicked', JSON.stringify(event, null, 2));
});

// For lifecycle events (foreground/background)
OneSignal.Notifications.addEventListener('foregroundWillDisplay', (event) => {
  console.log('OneSignal: notification will display in foreground:', event);
  // You can modify or cancel the notification here
  event.preventDefault(); // To prevent showing
  // or event.notification.display(); // To show it
});

    // Get user ID
  OneSignal.User.getOnesignalId().then((id) => {
      setUserId(id);
      console.log('OneSignal User ID:', id);
    });
  }, []);

  const sendTestNotification = () => {
    Alert.alert('Test Notification', 'Use OneSignal dashboard to send test notifications');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>OneSignal React Native Example</Text>
        
        <View style={styles.statusContainer}>
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>Initialized:</Text>
            <Text style={[styles.statusValue, { color: isInitialized ? '#28a745' : '#dc3545' }]}>
              {isInitialized ? 'Yes' : 'No'}
            </Text>
          </View>
          
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>Permission:</Text>
            <Text style={[styles.statusValue, { color: hasPermission ? '#28a745' : '#dc3545' }]}>
              {hasPermission ? 'Granted' : 'Denied'}
            </Text>
          </View>
          
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>User ID:</Text>
            <Text style={styles.statusValue}>
              {userId ? userId.substring(0, 8) + '...' : 'Loading...'}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={sendTestNotification}>
          <Text style={styles.buttonText}>Send Test Notification</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Setup Instructions:</Text>
          <Text style={styles.infoText}>
            1. Replace YOUR_ONESIGNAL_APP_ID with your actual App ID{'\n'}
            2. Configure android/app/google-services.json{'\n'}
            3. Add OneSignal configuration to android/app/build.gradle{'\n'}
            4. Test notifications from OneSignal dashboard
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  statusContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statusLabel: {
    fontSize: 16,
    color: '#666',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    padding: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default App;