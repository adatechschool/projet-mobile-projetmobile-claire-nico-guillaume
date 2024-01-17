import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, Text, View } from 'react-native';
import BoutonPlus from './Settings-coponents/BoutonPlus';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    marginRight: 40,
    marginLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title:{
    marginTop: 10,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 30,
  }
});

export default function HomeScreen() {
    return (
      <View>
        <Text style={styles.title}>Hello !!!</Text>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button title='All' color='black'/>
          <Button title='Important' color='black'/>
          <Button title='Favorites' color='black'/>
        </View>
        <View
          style={{
            width: '100%',
            height: '86%',
            backgroundColor: '#B4B4C7',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <BoutonPlus/>
        </View>
        <StatusBar style="auto" />
      </View>
      
    );
  }