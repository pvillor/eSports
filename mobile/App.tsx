import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Link Start</Text>
      <Button title='Send 1'/>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string
}

function Button(props: ButtonProps){
  return(
   <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
   </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
