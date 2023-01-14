import {Text, View} from 'react-native';
import FunctionalButton from '../../components/FunctionalButton';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <FunctionalButton
        title="To Loading Screen"
        onPress={() => navigation.navigate('LoadingScreen')}></FunctionalButton>
    </View>
  );
};

export default LoginScreen;
