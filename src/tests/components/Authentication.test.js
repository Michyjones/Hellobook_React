
import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../store/index';
import Login from '../../components/LoginForm';
import Register from '../../components/RegisterForm';
// import RequestReset from '../../components/RequestReset';
// import Resetpassword from '../../components/ResetPassword';
import sinon from 'sinon';

describe('Register component', () => {
  it('Renders register component', () => {
    const wrapper = shallow(<Register store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });

  xit('Handles _register onsubmit', () => {
    const _register = sinon.spy();
    const wrapper = shallow(<Register onSubmit={_register} store={store} />);
    wrapper.find('Form').simulate('submit');
  });
});

describe('Login component', () => {
  it('Renders login component', () => {
    const wrapper = shallow(<Login store={store} />).dive();
    expect(wrapper).toHaveLength(1);
  });
});

