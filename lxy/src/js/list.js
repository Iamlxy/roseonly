// 1. 先请求第一页的数据

// 1-1. 准备一个页面数据的对象
const pageInfo = {
    pagenum: 1,
    pagesize: 12,
    // total: 0,
    // totalpage: 0
  }
  
  // 1-2. 请求数据
  getList()
  async function getList() {
    const res = await pAjax({
      url: '../server/getList.php',
      dataType: 'json',
      data: {
        pagenum: pageInfo.pagenum,
        pagesize: pageInfo.pagesize
      }
    })
  
    // pageInfo.total = res.total.count - 0
    // pageInfo.totalpage = Math.ceil(pageInfo.total / pageInfo.pagesize)
  
    // bindPagi()
    bindHtml(res.list)
  }
  
//   // 获取分页器的盒子
//   const box = document.querySelector('.pagi')
  
//   function bindPagi() {
//     new Pagination(box, {
//       pageInfo: pageInfo,
//       textInfo: {
//         first: '首页',
//         prev: '上一页',
//         next: '下一页',
//         last: '末页'
//       },
//       async change (n) {
//         if (n === pageInfo.pagenum) return
  
//         // pagenum = 2
//         pageInfo.pagenum = n
  
//         const res = await pAjax({
//           url: '../server/getList.php',
//           dataType: 'json',
//           data: {
//             pagenum: pageInfo.pagenum, // 2
//             pagesize: pageInfo.pagesize
//           }
//         })
  
//         pageInfo.total = res.total.count - 0
//         pageInfo.totalpage = Math.ceil(pageInfo.total / pageInfo.pagesize)
  
//         bindHtml(res.list) // 第二页的数据
//       }
//     })
//   }
  
  // 获取列表盒子的元素
  const listGroup = document.querySelector('.productList')
  
  function bindHtml(list) {
    console.log(list[0])
    let str = ''
  
    // 遍历 list
    list.forEach(item => {
      str += `
      <a href="./detail.html?id=${item.goods_id}">
      <li>
          <div class="li_img">
              <img src="${item.goods_big_logo}" alt="">
          </div>
          <b class="f14">${item.goods_two_name}</b>
          <p class="f12">${item.goods_name}</p>
          <b class="f14">￥${item.goods_price}</b>
          <div class="oprice">价值￥${item.goods_value}</div>
      </li>
  </a>
  
      `
    })
  
    // 丢到页面里面
    listGroup.innerHTML = str
  }
  