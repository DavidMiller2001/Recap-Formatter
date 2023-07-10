import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.children}>
        <Text>Hello!</Text>
      </View>
      <View style={[styles.test, styles.children]}>
        <Text>I am orange</Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  test: {
    backgroundColor: 'orange',
  },
  children: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
