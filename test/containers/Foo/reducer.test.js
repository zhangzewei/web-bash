import { expect } from 'chai';
import foo from 'containers/Foo/reducer';
import * as at from 'constants/actionTypes';
import immutable from 'immutable';

describe('foo reducer', () => {
  it('should change result correctly', () => {
    const result = foo(immutable.fromJS({}), {
      type: at.CHANGE_NAME,
      result: '',
    });
    expect(result.get('result')).to.be.equal(undefined);
  });
});
