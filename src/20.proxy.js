export function myProxy(target, handler) {
  const proxyObject = {};
  Object.keys(target).forEach(key => {
    Object.defineProperty(proxyObject, key, {
      get: function() {
        return handler.get? handler.get(target, key) : target[key];
      },
      set: function(value) {
        if (handler.set) {
          handler.set(target, key, value);
        } else {
          target[key] = value;
        }
        return true;
      }
    });
  });
  return proxyObject;
}