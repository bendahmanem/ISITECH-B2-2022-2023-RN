import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerFlex}>
      <View style={styles.blueFlexItem}>
      <Text>Blue</Text>
      </View>
      <View style={styles.greenFlexItem}>
      <Text>Green</Text>
      </View>
      <View style={styles.yellowFlexItem} >
      <Text>Yellow</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFlex: {
    flex: 1,
    backgroundColor: 'orange'
  },
  blueFlexItem : {
    flex: 2,
    backgroundColor: 'blue'
  },
  greenFlexItem : {
    flex: 5,
    backgroundColor: 'green'
  },
  yellowFlexItem : {
    flex: 2,
    backgroundColor: 'yellow'
  },
});
