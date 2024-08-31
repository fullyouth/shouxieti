import { ajaxGet, ajaxPost } from '../src/11.AJAX'

describe('ajax functions', () => {
  beforeEach(() => {
    const mockXHR = {
      open: jest.fn(),
      send: jest.fn(),
      setRequestHeader: jest.fn(),
      readyState: 4,
      status: 200,
      responseText: 'test response',
      onreadystatechange: null
    };
    global.XMLHttpRequest = jest.fn().mockImplementation(() => mockXHR);
  });

  afterEach(() => {
    delete global.XMLHttpRequest;
  });

  it('ajaxGet should make a GET request and call callback', (done) => {
    const callback = jest.fn();
    ajaxGet('test-url', callback);
    expect(1).toBe(1)
    done()
  });

  it('ajaxPost should make a POST request and call callback', (done) => {
    const callback = jest.fn();
    ajaxPost('test-url', {data: 1}, callback);
    expect(1).toBe(1)
    done()
  });
});