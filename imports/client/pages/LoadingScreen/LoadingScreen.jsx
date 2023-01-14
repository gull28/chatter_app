import {Button, Text, View} from 'react-native';

const LoadingScreen = ({navigation}) => {
  return (
    <View>
      <Text>Hello world</Text>
      <Button
        title="To Login Screen"
        onPress={() => navigation.navigate('LoginScreen')}></Button>
    </View>
  );
};

export default LoadingScreen;
