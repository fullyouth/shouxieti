export function jsonp(url) {
  return new Promise((resolve, reject) => {
    // 创建一个唯一的回调函数名
    const uniqueCallbackName = `jsonp_callback_${Date.now()}_${Math.random().toString(36).substring(2)}`;

    // 创建一个 script 标签
    const script = document.createElement('script');
    script.src = `${url}?callback=${uniqueCallbackName}`;

    // 定义全局回调函数
    window[uniqueCallbackName] = function(data) {
      resolve(data);
      // 清除全局回调函数和 script 标签
      delete window[uniqueCallbackName];
      document.body.removeChild(script);
    };

    // 处理错误情况
    script.onerror = function() {
      reject(new Error('JSONP request failed'));
      delete window[uniqueCallbackName];
      document.body.removeChild(script);
    };

    // 将 script 标签添加到文档中
    document.body.appendChild(script);
  });
}