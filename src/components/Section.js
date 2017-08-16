/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import Label from './Label';

type P = {
  title: string,
  children?: any,
};

const Section = ({ title, children }: P) => (
  <View style={{ marginBottom: 96, flexDirection: 'row', flexWrap: 'wrap'}}>
    <View style={{ width: 200, marginTop: 40 }}>
      <Label bold>{title}</Label>
    </View>

    <View style={{ width: 2000, flexDirection: 'row', flexWrap: 'wrap'}}>
      {children}
    </View>
  </View>
);

export default Section;
