// __tests__/Intro-test.js
import React from 'react';
import Addition from '../Components/Addition/Addition.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Addition />).toJSON();
  expect(tree).toMatchSnapshot();
})