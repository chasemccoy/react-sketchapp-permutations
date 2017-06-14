/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import Label from './Label';

const Swatch = ({style}) => (
  <View style={{ margin: 20 }}>
    <View
      style={{
        height: style["width"],
        ...style
      }}
    />
  </View>
);

export default Swatch;
