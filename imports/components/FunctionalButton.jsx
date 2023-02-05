import React from 'react';
import {Button} from 'react-native';

export default FunctionalButton = ({title, onClick}) => {
  return <Button onPress={onClick} title={title} />;
};
