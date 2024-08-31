import { EventEmitter } from '../src/6.发布订阅'

describe('EventEmitter', () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it('should add a listener correctly', () => {
    const callback = jest.fn();
    emitter.on('event', callback);
    emitter.emit('event');
    expect(callback).toHaveBeenCalled();
  });

  it('should remove a listener correctly', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    emitter.on('event', callback1);
    emitter.on('event', callback2);
    emitter.off('event', callback1);
    emitter.emit('event');
    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalled();
  });

  it('should emit events with arguments correctly', () => {
    const callback = jest.fn();
    emitter.on('event', callback);
    emitter.emit('event', 'arg1', 'arg2');
    expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
  });
});