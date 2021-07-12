import { createAction } from 'src/helpers/action';

describe('Helpers Action', () => {

  it('should build action', () => {
    const requestType = '@test/REQUEST';
    const successType = '@test/SUCCESS';
    const errorType = '@test/ERROR';

    const response = createAction(requestType, successType, errorType)<undefined, number, any>();
    expect(response.request()).toEqual({ type: requestType });
    expect(response.success(2)).toEqual({ type: successType, response: 2 });
  });
});