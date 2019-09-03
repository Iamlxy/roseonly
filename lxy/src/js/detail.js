// 查看一下地址栏有没有带 id 信息过来

// 获取 container 容器
const box = document.querySelector('.container_details')

const reg = /id=(\d+)/

// if (reg.test(window.location.search)) {
//     // 表示你没有携带 id 参数
//     box.innerHTML = `
//     <div class="jumbotron">
//       <h1>您还没有选择商品</h1>
//       <p>点击下面按钮返回列表页选择</p>
//       <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">去选购</a></p>
//     </div>
//   `
// } else {
//     // 使用 id 去获取商品信息
   
// }
const id = reg.exec(window.location.search)[1]

// 获取回来以后使用响应渲染页面
getDetail(id)
async function getDetail(id) {
    const res = await pAjax({
        url: '../server/getDetail.php',
        dataType: 'json',
        data: {
            id: id
        }
    })

    bindHtml(res.detail)
}

function bindHtml(data) {
    box.innerHTML = `
  <div class="main_jewel">
  <div class="jewel_window">
      <div class="image_reel1">
          <img src="${data.goods_big_logo}" alt="">
      </div>
  </div>
  <div class="jewel_paging">
      <div class="fl">
          <img src="../static/left.jpg" alt="">
      </div>
      <a href="" rel="1"><img class="detail_img"
              src="${data.goods_small_logo}" alt=""></a>
      <a href="" rel="2"><img class="detail_img"
              src="${data.goods_small_logo}" alt=""></a>
      <a href="" rel="3"><img class="detail_img"
              src="${data.goods_small_logo}" alt=""></a>
      <a href="" rel="4"><img class="detail_img"
              src="${data.goods_small_logo}" alt=""></a>
      <a href="" rel="4"><img class="detail_img"
              src="${data.goods_small_logo}" alt=""></a>
      <div class="fr">
          <img src="../static/right.jpg">
      </div>
  </div>
</div>
<div class="details_num1_right">
  <div class="right_title">${data.goods_name}</div>
  <div class="right_xxc">1071210040</div>
  <div class="right_pay">
      <span>价格</span>
      <div class="r_pay_discount">超值爱礼</div>
      ￥${data.goods_price}
      <div class="r_pay_original">(价值￥${data.goods_value})</div>
  </div>
  <div class="right_select">
      <span class="right_font_tit">颜色：</span>
      <div class="color">
          <img src="${data.goods_small_logo}" alt="">
      </div>
  </div>
  <div class="right_select">
      <span>数量</span>
      <input type="text" value="1" class="right_number">
      <div class="right_u_d">
          <a href="" class="right_up"></a>
          <a href="" class="right_down"></a>
      </div>
      <div class="clear"></div>
  </div>
  <div>
      <a href="./index.html" class="button_bar1" id="pay">立即购买</a>
      <a href="./cart.html" id="addCart" class="button_bar2">加入购物车</a>
  </div>
  <div class="fwcn_txt">服务承诺：官方正品&nbsp;&nbsp;&nbsp;免邮配送&nbsp;&nbsp;&nbsp;同城速递</div>

</div>
<div class="clear"></div>


<div><img src="https://www.roseonly.com.cn/assets/roseonly/images/xq_08.png" alt=""></div>
<div class="div_details1">
  <img src="${data.goods_introduce}" alt="">
</div>
  `

    bindEvent(data)
}

function bindEvent(data) {
    console.log(data)
    const addCart = document.querySelector('#addCart')

    addCart.addEventListener('click', function () {
        // const id = this.getAttribute('data-id')

        // 验证登录
        const login = getCookie('login')

        if (!login) {
            // 如果你没有登录，那么跳转回登录页
            alert('您还没有登录，请先登录')

            // console.log(window.location.pathname + window.location.search)
            // console.log(window.location)

            window.location.href = './login.html?pathname=' + window.location
        } else {
            // 如果你登录了，那么加入购物车

            // 把当前页面中渲染的这个数据存进去
            // console.log(data)
            // console.log('我要把这个数据存储到 localStorage 里面')

            // 1. 先获取 localStorage 里面的购物车数据
            const cartList = JSON.parse(localStorage.getItem('cartList')) || []
            // 将来如果我拿到的是空数组。证明没有东西
            // 如果有定西我一定拿不到空数组

            if (!cartList.length) {
                // 如果能进入 if 条件 !cartList.length 是 true ， cartList.length 就是 false
                // 证明没有东西
                // data.cart_number = data.cart_number - 0 + 1
                data.cart_number = 1//方法有bug，此处是人为强制初始值是1
                cartList.push(data)
            } else {
                // 证明里面有数据

                // 判断里面有没有我这个数据
                // some
                const isCart = cartList.some(item => {
                    return item.goods_id === data.goods_id
                })

                if (!isCart) {
                    // data.cart_number = data.cart_number - 0 + 1
                    data.cart_number=1//方法有bug，此处是人为强制初始值是1
                    cartList.push(data)
                } else {
                    // 购物车里面有我这个数据

                    // 找到我这个数据，把数量 + 1
                    // 遍历数组，找到一个 id 和我一样的，把这一项的 cart_number +1

                    cartList.forEach(item => {
                        if (item.goods_id === data.goods_id) {
                            item.cart_number = item.cart_number - 0 + 1
                        }
                    })
                }
            }

            localStorage.setItem('cartList', JSON.stringify(cartList))
        }
    })
}



box.addEventListener('click', e => {
    e = e || window.event
    const t = e.target

    // 判断结算
  if (t.id === 'pay') {
      alert("购买成功")
  }
})









