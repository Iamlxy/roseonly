function ajax(options) {
  // 1. 判断用户有没有传递 url
  if (!options.url) {
    // 告诉使用者 url 必须传递
    // 手动抛出一个错误
    // throw 手动抛出异常
    throw new Error('url 是必填项')
  }

  // 2. 准备一套默认值
  const defInfo = {
    data: '',
    dataType: 'string', // 不需要执行 JSON.parse
    async: true,
    type: 'GET',
    success: function () {}
  }

  // 3. 把用户的信息替换到默认值里面
  for (let attr in options) {
    defInfo[attr] = options[attr]
  }

  // 4. 检测所有的参数是不是符合规则
  // 4-1. 检测 async
  if (typeof defInfo.async !== 'boolean') {
    // async 参数不和规则
    throw new Error('async 只接受布尔值')
  }

  // 4-2. 检测 type
  if (!(defInfo.type.toUpperCase() === 'GET' || defInfo.type.toUpperCase() === 'POST')) {
    // type 是一个 GET 或者 POST 以外的东西
    throw new Error('目前只接受 get 和 post请求，请期待更新')
  }

  // 4-3. 检测 success
  if (typeof defInfo.success !== 'function') {
    throw new Error('success 必须是一个函数')
  }

  // 4-4. 检测data
  //      key=value&key=value
  //      {}
  if (!(typeof defInfo.data === 'string' && /^(\w+=\w+&?)*$/.test(defInfo.data) || Object.prototype.toString.call(defInfo.data) === '[object Object]')) {
    // 证明是一个不合法字符串或者不是个对象
    throw new Error('data 只能传递 key=value&key=value 的字符串或者 对象')
  }

  // 5. 搞定参数 data
  let str = ''
  if (Object.prototype.toString.call(defInfo.data) === '[object Object]') {
    // 循环遍历对象
    for (let attr in defInfo.data) {
      str += `${attr}=${defInfo.data[attr]}&`
    }

    // slice 截取字符串 从哪个索引开始 到哪个索引
    // 传递一个负整数的时候就等于 length + 负整数
    defInfo.data = str.slice(0, -1)
  }

  // 6. 开始发送 ajax 请求
  // try {} catch (e) {}
  // 6-1. 创建 ajax 对象
  let xhr
  try {
    // 如果由这个方法，catch 不执行
    xhr = new XMLHttpRequest()
  } catch (err) {
    // 如果上面出错了，那么就执行我这个东西
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }

  // 6-2. 配置请求地址和请求参数
  //      判断是不是 get 请求，如果是，拼参数
  xhr.open(defInfo.type, defInfo.url + (defInfo.type.toUpperCase() === 'GET' ? '?' + defInfo.data : '') + (defInfo.type.toUpperCase() === 'GET' ? '&_=' + new Date().getTime() : ''), defInfo.async)

  // 6-3. 发送请求
  // 单独判断一下是不是 post 请求
  if (defInfo.type.toUpperCase() === 'POST') {
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(defInfo.data)
  } else {
    xhr.send()
  }

  // 6-4. 接受响应
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /2\d{2}/.test(xhr.status)) {
      // 判断 dataType 是不是 json
      if (defInfo.dataType === 'json') {
        defInfo.success(JSON.parse(xhr.responseText))
      } else {
        defInfo.success(xhr.responseText)
      }
    }
  }
}


function pAjax(options) {
  return new Promise(function (resolve, reject) {
    ajax({
      url: options.url,
      data: options.data || '',
      dataType: options.dataType || '',
      async: options.async || true,
      type: options.type || 'GET',
      success (res) {
        resolve(res)
      }
    })
  })
}
