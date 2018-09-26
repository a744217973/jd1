window.addEventListener('load', function() {
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true, //可选选项，自动滑动
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: true,
	})
	//调用京东吸顶函数
	// 调用秒杀活动函数
	jd.ceiling()
	jd.seckill()
})

var jd = {
	// 秒杀活动函数
	seckill: function() {
		// 设置一个未来时间的总毫秒
		var futureTime = new Date(2018, 8, 25, 22, 00, 00).getTime()
		// 获取当前的总毫秒
		var currentTime = new Date().getTime()
		// 计算出当前的时间
		var time = (futureTime - currentTime) / 1000
		//获取span标签
		var spans = document.querySelectorAll('.time span')
		setInterval(function() {
			time--;
			if(time <= 0) {
				time = 7200
			}
			var hour = Math.floor(time / 3600)
			var minute = Math.floor(time % 3600 / 60)
			var second = Math.floor(time % 60);
			spans[0].innerHTML = Math.floor(hour / 10);
			spans[1].innerHTML = Math.floor(hour % 10)
			spans[3].innerHTML = Math.floor(minute / 10)
			spans[4].innerHTML = Math.floor(minute % 10)
			spans[6].innerHTML = Math.floor(second / 10)
			spans[7].innerHTML = Math.floor(second % 10)

		}, 1000)
	},
	ceiling: function(e) {
		//获取轮播图的高
		var lunBoTu = document.querySelector('.swiper-container-ios').offsetHeight
		document.addEventListener('scroll', scroll)
		scroll()

		function scroll() {
			var header = document.querySelector('#jd_header')
			opacity = document.documentElement.scrollTop / lunBoTu

			if(opacity > 1) {
				header.style.backgroundColor = "rgba(255,0,0,1)"
			} else {
				header.style.backgroundColor = "rgba(255,0,0," + opacity + ")"
			}
		}
	}
}