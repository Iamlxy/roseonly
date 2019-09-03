// 验证登录的问题

const login = getCookie('login')

if (!login) {
  window.location.href = './login.html?pathname=' + window.location.href
}


// 已经登录过

// 1. 获取 localStorage 里面的数据
let cartList = JSON.parse(localStorage.getItem('cartList')) || []
// const cartList = []

// 判断数组的长度

const box = document.querySelector('.container')


// 渲染页面
bindHtml()
function bindHtml() {
  // if (!cartList.length) {
  //   // 证明没有东西
  //   box.innerHTML = `
  //     <div class="jumbotron">
  //       <h1>您的购物车空空如也</h1>
  //       <p>点击下方按钮快去选购吧! ^_^</p>
  //       <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">去选购</a></p>
  //     </div>
  //   `
  //   return
  // }

  // 全选按钮要不要选中取决于什么？
  // 数据里面每一个的 is_select 都是 true，那么我就是 true
  // 数据里面只要有一个 is_select 不是 true，我就是 false
  const selectAll = cartList.every(item => item.inselect === 1)

  // 准备一个变量 存储所选商品数量
  const selectInfo = selectShop()

////////////////////
let str=`
<div class="order">
<div class="shopping">
    <div class="shop-a">
        <div class="shop-left" style="width:800px">我的购物车</div>
        <a href="" class="shop-right" id="clear">清空购物车</a>
    </div>
    <table class="shopping_cart" border="0" cellspacing="0" cellpadding="0" data-shopid="0">
  <tr class="shopping_cart_title">
  <td width="40">&nbsp;</td>
  <td width="110">品牌</td>
  <td width="490">商品名称</td>
  <td width="120">单价</td>
  <td width="13"></td>
  <td width="60">数量</td>
  <td width="13"></td>
  <td>操作</td>
</tr>

`
cartList.forEach(item => {
  str +=`
  <tr height="120" class="wg_cart_list">
  <td><input ${item.inselect === 1 ? 'checked' : ''} id="select" data-id="${item.goods_id}" type="checkbox"/> </td>
  <td>
      roseonly</td>
  <td>
      <img src="${item.goods_small_logo}"
          class="shopping_cart_img" alt="产品图" style="cursor:pointer;"
          onclick="window.open('http://www.roseonly.com.cn/item/5128.html')" />
      <div class="shopping_cart_name">
          <label for="">
          ${item.goods_name}</label>
      </div>
  </td>
  <td class="td_price_5128">&yen;${item.goods_price}</td>
  <td>
      <button data-id="${item.goods_id}" type="button" class="btn btn-default" id="sub" ${item.cart_number - 0 === 1 ? 'disabled' : ''}>-</button>
  </td>
  <td>
  <button type="button" class="btn btn-default" disabled>${item.cart_number}</button>
  </td>
  <td align="right">
  <button data-id="${item.goods_id}" type="button" class="btn btn-default" id="add" ${item.cart_number - 0 >= item.goods_number ? 'disabled' : ''}>+</button>
  </td>
  <td><a href="" class="cart_del" id="del" data-id="${item.goods_id}" style="text-decoration: none;">删除</a></td>
  </tr>


`
})
str+=`

</table>
     <div class="sel_all">
                    <input type="checkbox" id="selectAll" ${selectAll ? 'checked' : ''}/>
                    <label for="">全选</label>
                </div>
                <div class="cart_total">合计：&yen;<font id="cart_total">${selectInfo.price.toFixed(2)}</font>
                    <input type="button" class="cart_button1" value="去结算" id="pay" />
                </div>
            </div>
            <div class="clear" style="clear: both"></div>
            <div class="help-right">
                <div class="help-nav">订单帮助</div>
                <p>热线电话：400-1314-520</p>
                <p>客服邮箱：<a href="mailto:service@roseonly.com">service@roseonly.com</a>&nbsp;&nbsp;客服工作时间：周一至周日9:00-21:00
                </p>
                <p>如果您在下单过程中遇到问题，请与我们联系。因为鲜花商品对配送时效有特殊要求，订购后请随时登录查询物流状态。</p>
            </div>
        </div>
`


////////////////////////////

  box.innerHTML = str
}

// 事件委托
box.addEventListener('click', e => {
  e = e || window.event
  const t = e.target

  // 数量上涨
  if (t.id === 'add') {
    // 遍历数组找到 id 对应的那一条
    const id = t.getAttribute('data-id')

    cartList.forEach(item => {
      if (item.goods_id === id) {
        item.cart_number = item.cart_number - 0 + 1
      }
    })

    localStorage.setItem('cartList', JSON.stringify(cartList))
    bindHtml()
  }

  // 数量减少
  if (t.id === 'sub') {
    // 遍历数组找到 id 对应的那一条
    const id = t.getAttribute('data-id')

    cartList.forEach(item => {
      if (item.goods_id === id) {
        item.cart_number = item.cart_number - 0 - 1
      }
    })

    localStorage.setItem('cartList', JSON.stringify(cartList))
    bindHtml()
  }

  // 删除一条
  if (t.id === 'del') {
    const id = t.getAttribute('data-id')

    // 删除数组中 goods_id === id 的那一条
    // filter
    // 1 2 3
    // 1 3
    cartList = cartList.filter(item => item.goods_id - 0 !== id - 0)

    localStorage.setItem('cartList', JSON.stringify(cartList))
    bindHtml()
  }

  // 单选判断
  if (t.id === 'select') {
    // console.log('我在点击选择复选框')
    // console.log(t.checked)
    const id = t.getAttribute('data-id')

    // 遍历数组，找到 id 对应的那一条
    cartList.forEach(item => {
      if (item.goods_id === id) {
        item.inselect = t.checked ? 1 : 0
      }
    })

    localStorage.setItem('cartList', JSON.stringify(cartList))
    bindHtml()
  }

  // 全选判断
  if (t.id === 'selectAll') {

    // 遍历数组
    cartList.forEach(item => {
      item.inselect = t.checked ? 1 : 0
    })

    localStorage.setItem('cartList', JSON.stringify(cartList))
    bindHtml()
  }

  // 判断结算
  if (t.id === 'pay') {
    alert('结算成功！ 您已经支付 ： ￥' + selectShop().price.toFixed(2))
    cartList = cartList.filter(item => item.inselect !== 1)

    localStorage.setItem('cartList', JSON.stringify(cartList))
    bindHtml()
  }

  // 判断清空
  if (t.id === 'clear') {
    cartList = []
    localStorage.setItem('cartList', JSON.stringify([]))
    bindHtml()
  }
})

// 计算所选商品数量的函数
// 能返回一个对象 { count: 10, price: 123.00 }
function selectShop() {
  // 找到所有选中过的商品
  const tmp = cartList.filter(item => item.inselect === 1)

  // console.log(tmp) // 所有选中商品的数组
  let count = 0
  let price = 0

  for (var i = 0; i < tmp.length; i++) {
    count += tmp[i].cart_number - 0
    price += tmp[i].goods_price * tmp[i].cart_number
  }

  return {
    count,
    price
  }
}
