import React from 'react';
import { render } from '@testing-library/react-native';
import Intro  from '../src/screens/testing_jest_screens/snapshot_test/Intro';

test('renders correctly', () => {
  const { toJSON } = render(<Intro />);
  expect(toJSON()).toMatchSnapshot();
});
