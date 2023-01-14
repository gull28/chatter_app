import {Button, Text, View} from 'react-native';

const LoadingScreen = (props, navigation) => {
  const onpress = navigation => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View>
      <Text>{props.title}</Text>
      <Button title="Login Screen" onpress={onpress}></Button>
    </View>
  );
};

export default LoadingScreen;
