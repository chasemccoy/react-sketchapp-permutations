/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';

import Label from './components/Label';
import Swatch from './components/Swatch';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';

const Document = ({ system, context }: { system: DesignSystem}) => (
  <View>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 2 }}>
      <Label>
        This is an example react-sketchapp document, showing how to render permutations of type styles.
      </Label>
    </View>

    <Section title="Swatch Permutations">
      {permute([
        {backgroundColor: system.colors},
        {width: system.swatchSizes},
        {borderRadius: system.borderRadii},
      ]).map(function(permutation) {
        return <Swatch style={permutation}></Swatch>
      })}
    </Section>

    <Section title="Type Permutations">
      {permute([
        {fontFamily: system.fontFamilies},
        {fontSize: system.typeSizes},
        {color: system.colors},
        {fontWeight: system.fontWeights},
        {fontStyle: system.fontStyles},
      ]).map(function(permutation) {
        return <TypeSpecimen name="Testing" style={permutation}></TypeSpecimen>
      })}
    </Section>
  </View>
);

export default (context: any) => {
  render(<Document system={designSystem} />, context.document.currentPage());
}

function permute(array) {
    function c(part, index) {
        var k = Object.keys(array[index])[0];
        array[index][k].forEach(function (a) {
            var p = Object.assign({}, part, { [k]: a });
            if (index + 1 === array.length) {
                r.push(p);
                return;
            }
            c(p, index + 1);
        });
    }

    var r = [];
    c({}, 0);
    return r;
}
