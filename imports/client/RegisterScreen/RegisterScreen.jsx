import React from 'react';
import {View, Text} from 'react-native';
import FunctionalButton from '../../components/FunctionalButton';

export const RegisterScreen = ({navigation}) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
      <FunctionalButton
        title={'Want to go back to logging in?'}
        onClick={() => navigation.navigate('LoginScreen')}></FunctionalButton>
    </View>
  );
};
