/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import Label from './Label';

type P = {
  name: string,
  style: any,
};

const TypeSpecimen = ({ name, style }: P) => (
  <View name={`TypeSpecimen-${name}`} style={{ margin: 40 }}>
    <View style={{ width: 150 }}>
      <Label>
        {`${style.fontFamily} / ${style.fontSize}`}
      </Label>
    </View>
    <Text
      style={{
        ...style,
      }}
    >
      {name}
    </Text>
  </View>
);

export default TypeSpecimen;
