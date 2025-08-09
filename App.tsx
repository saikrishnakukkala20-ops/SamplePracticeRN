/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { UserDisplayData } from './src/screens/contextapiscreens/UserDisplayData';
import { AppProvider } from './src/context/AppContextProvider';
import { UserUpdateData } from './src/screens/contextapiscreens/UserUpdateData';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppProvider>
        <UserDisplayData/>
        <UserUpdateData/>
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
