
  // 1. 获取 form 标签
const form = document.querySelector('form')

// 2. 获取input
const inps = document.querySelectorAll('input')


form.addEventListener('submit', async e => {
  e = e || window.event
  e.preventDefault()

  const phone = inps[0].value
  const psw = inps[1].value

  const res = await pAjax({
    url: '../server/login.php',
    dataType: 'json',
    type: 'POST',
    data: {
      phone,
      psw
    }
  })

  if (res.code === 0) {
    alert('用户名或密码错误')
    return
  }

  // 登录成功
  // 设置 cookie 信息
  setCookie('login', 1)
  // 跳转页面
  // window.location.href = '../index.html'

  // 判断一下地址栏有没有携带 pathname 信息
  const reg = /pathname=(.+)/

  if (reg.test(window.location.search)) {
    const href = reg.exec(window.location.search)[1]
    window.location.href = href
  } else {
    window.location.href = './index.html'
  }

})

