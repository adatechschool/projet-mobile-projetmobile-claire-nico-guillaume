import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
      <View>
        <Text>Home Screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }