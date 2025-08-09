// __tests__/PrintHello.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import PrintHello  from '../src/screens/testing_jest_screens/PrintHello';

// describe('PrintHello', () => {
//   it('renders correctly with name', () => {
//     const { getByText } = render(<PrintHello name="Sai" />);
//     expect(getByText('Hello Sai')).toBeTruthy();
//   });
// });

describe('PrintHello', () => {
  it('renders correctly with name', () => {
    const { toJSON } = render(<PrintHello name="Sai" />);
    expect(toJSON()).toMatchSnapshot(); // 👈 Snapshot created here
  });
});
