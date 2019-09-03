// class SignUP {
//     constructor() {
//         this.ajax = new Ajax();
//     }
//     register() {
//         let _phone = document.getElementById("phone").value;
//         let _psw = document.getElementById("psw").value;

//         if (/^\w{6,12}$/g.test(_psw)) {
//             this.ajax.request({
//                 url: "../server/signup.php",
//                 method: "get",
//                 send: {
//                     phone: _phone,
//                     psw: _psw
//                 },
//                 success: function (_data) {
//                     _data = window.eval("(" + _data + ")");
//                     if (_data.code === 2000) {
//                         alert("恭喜你注册成功");
//                         window.location.href = "./signin.html"
//                     }
//                 }
//             });
//         }
//     }
// }

// function main() {
//     document.getElementById("btn").onclick = function () {
//         new SignUP().register();
//     };
// }
// window.onload = main;

const form=document.querySelector('form')
const inps = document.querySelectorAll('input')

form.addEventListener('submit', async e => {
    e = e || window.event
    e.preventDefault()
  
    const phone = inps[0].value
    const psw = inps[1].value
  
    if (/^\w{6,12}$/g.test(psw)) {
    await pAjax({
            url: "../server/signup.php",
            method: "post",
            send: {
                phone: phone,
                psw: psw
            },
            success: function (_data) {
                _data = window.eval("(" + _data + ")");
                if (_data.code === 2000) {
                    alert("恭喜你注册成功");
                    window.location.href = "./signin.html"
                }
            }
        });
    }
  
   
  
  })
