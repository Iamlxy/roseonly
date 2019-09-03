$(function(){
    // 导航栏下拉菜单栏
    $(".nav li").hover(
        function() {
            $(this).children(".menus2").show();
        },
        function() {
            $(this).children(".menus2").hide();
        }
    );

    // 地区选择中国和香港切换
    $(".div_lang").hover(
        function() {
            $(this).children(".select").show();
        },
        function() {
            $(this).children(".select").hide();
        }
    );
        

    //首先将#back-to-top隐藏
	$("#back-to-top").hide();
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	$(window).scroll(function(){ 
		if ($(window).scrollTop()>900){
			$("#back-to-top").fadeIn(500);
		} else {
			$("#back-to-top").fadeOut(500);
		}
    });
    // 回到顶部
    $(".go_top").click(function(){
		$('body,html').animate({scrollTop:0},200);
		return false;
    });
    
    //点击客服热线
    $("#zhichiBtnBox").hover(function () {
        $(".mes_content").css({
            display: 'block'
        })
    }, function () {
        $(".mes_content").css({
            display: 'none'
        })
    });

    // 点击出现二维码
    $("#ewmBox").hover(function () {
        $(".ewm_content").css({
            display: 'block'
        })
    }, function () {
        $(".ewm_content").css({
            display: 'none'
        })
    });

    // 点开用户图标出现登录注册
    $(".yonghu11").hover(
        function() {
            $(this).children("li").children(".header_toplogin_con").show();
        },
        function() {
            $(this).children("li").children(".header_toplogin_con").hide();
        }
    );


///
        //吸顶菜单
    var banOffTop=$(".nav-container").offset().top;
    //获取到距离顶部的垂直距离
        // console.log(banOffTop)
        // var scTop=0;//初始化垂直滚动的距离
        $(document).scroll(function(){
            scTop=$(this).scrollTop();//获取到滚动条拉动的距离
            // console.log(scTop)
            //console.log(scTop);查看滚动时，垂直方向上，滚动条滚动的距离
            if(scTop>=banOffTop){
                // console.log(true)
            //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
                $(".nav-bar").addClass("fixDiv");
            }else{
                $(".nav-bar").removeClass("fixDiv");
                // console.log(false)
            }
        })


})