import {Text, View} from 'react-native';
import FunctionalButton from '../../../components/FunctionalButton';

const LoadingScreen = ({navigation}) => {
  return (
    <View>
      <Text>Hello world</Text>
      <FunctionalButton
        title="To Login Screen"
        onPress={() => navigation.navigate('LoginScreen')}></FunctionalButton>
    </View>
  );
};

export default LoadingScreen;
