import React from 'react';
import { Text } from 'react-native';

type PrintHelloProps = {
  name: string;
};

 const PrintHello: React.FC<PrintHelloProps> = ({ name }) => {
  return <Text style={{ fontSize: 24 }}>Hello {name}</Text>;
};

export default PrintHello