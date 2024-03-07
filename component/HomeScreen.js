import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const name = 'Siddharth Singh';

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Food Corporation Of India</Text>
      <Text style={styles.subHeaderStyle}>Support provided by Tech Mahindra Pvt. Ltd.</Text>
      <Text style={styles.commonMessage}>Welcome {name} to our team.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    alignItems: 'center',
    color: 'red',
    fontSize: 23
  },
  subHeaderStyle: {
    alignItems: 'center',
    color: 'green',
    fontSize: 14
  },
  commonMessage: {
    alignItems: 'center',
    color: 'blue',
    fontSize: 14,
    marginTop: 10
  }
});
