import React from 'react';
import { Button, Input } from 'antd';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Message from 'containers/Foo/components/Message';

const props = {
  message: 'ls',
};

const context = {
  fooActions: {
    handleCommand: sinon.spy(),
  }
};

describe('Message component', () => {
  it('should render correctly', () => {
    const wrap = shallow(<Message {...props} />);
    expect(wrap.find('pre').length).to.be.equal(1);
    expect(wrap.find('pre').text()).to.be.equal('');
    expect(wrap.find(Input).length).to.be.equal(1);
    expect(wrap.find(Button).length).to.be.equal(1);
  });

  it('should button click correctly', () => {
    const wrap = shallow(<Message {...props} />, { context });
    wrap.setState({ message: 'ls' });
    wrap.find(Button).simulate('click');
    expect(context.fooActions.handleCommand.callCount).to.be.equal(1);
    expect(wrap.state('result')).to.be.equal(undefined);
  });

  it('should input change correctly', () => {
    const wrap = shallow(<Message {...props} />);
    wrap.find(Input).simulate('change', { target: { value: 'ls' } });
    expect(wrap.state('message')).to.be.equal('ls');
  });
});
