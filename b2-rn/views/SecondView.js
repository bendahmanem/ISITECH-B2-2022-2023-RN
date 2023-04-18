import { View, Text, StyleSheet } from "react-native"
import { ProgressBar, MD3Colors, Button } from 'react-native-paper';

function SecondView() {
  return (
    <View style={styles.main}>
      <Button icon='camera' mode="contained" >Paper Button</Button>
      <ProgressBar  progress={0.5} color={MD3Colors.error50} />
    </View>
  )
}

export default SecondView

const styles = StyleSheet.create({
  main : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
