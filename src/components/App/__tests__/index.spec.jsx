import React from 'react';
import { shallow } from 'enzyme';
import App from '..';

describe('main', () => {
  it('Should render', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
