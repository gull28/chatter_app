import React from 'react';
import {Text, View} from 'react-native';

export const LandingPage = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('LoginScreen');
  }, 1000);
  return (
    <View>
      <Text>LandingPage</Text>
    </View>
  );
};
