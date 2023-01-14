import {Text, View, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen {navigation.title}</Text>
      <Button
        title="To Loading Screen"
        onPress={() => navigation.navigate('LoadingScreen')}></Button>
    </View>
  );
};

export default LoginScreen;
