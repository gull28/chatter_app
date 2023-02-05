import {Text, TextInput, View} from 'react-native';
import FunctionalButton from '../../components/FunctionalButton';

export const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TextInput></TextInput>
      <FunctionalButton title="Login" />
      <FunctionalButton
        title="No account? Register now"
        onClick={() => {
          navigation.navigate('RegisterScreen');
        }}
      />
    </View>
  );
};
