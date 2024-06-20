import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Store';
import HomeScreen from './Screens/HomeScreen';


export default function App() {
  return (
    <Provider store={store}>
        <HomeScreen></HomeScreen>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
