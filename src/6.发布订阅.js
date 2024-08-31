export class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    return this;
  }

  emit(eventName,...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(...args));
    }
    return this;
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        cb => cb!== callback
      );
    }
    return this;
  }
}

// 使用示例
const emitter = new EventEmitter();

const callback1 = (data) => {
  console.log('Callback 1:', data);
};

const callback2 = (data) => {
  console.log('Callback 2:', data);
};

emitter.on('event1', callback1);
emitter.on('event1', callback2);

emitter.emit('event1', 'Hello from event emitter!');

emitter.off('event1', callback1);

emitter.emit('event1', 'Another emit after removing callback1.');