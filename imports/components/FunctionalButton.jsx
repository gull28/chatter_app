import React from 'react';
import {Button} from 'react-native';

export default FunctionalButton = ({props}) => {
  const {title, onClick} = props;
  return <Button onClick={onClick}>{title}</Button>;
};
