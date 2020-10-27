$(document).ready(function(){

	var windowWidth = $(window).width()
	var windowHeight = $(window).height()
	var mouseX = 0;

	$('#imgDIV').hide();

	$(document).mousemove(function (e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
		if (mouseX > windowWidth / 2) {
			$(".rose").addClass("shake2");
			$(".tkq").addClass("tkqtkq1");
			$(".weapon").addClass("anrlanrl1");
			$(".gun").removeClass ("shake3");
			$(".heart").removeClass("aaa1");
		};

		if (mouseX < windowWidth / 2) {
			$(".rose").removeClass("shake2");
			$(".tkq").removeClass("tkqtkq1");
			$(".weapon").removeClass("anrlanrl1");
			$(".gun").addClass("shake3");
			$(".heart").addClass("aaa1");
		};

		if (mouseY < windowHeight / 2) {
			$(".bg-img").removeClass("op-0");
			$(".bg-img").addClass("bgmove");
			$(".person").addClass("op-0");
			$(".person").removeClass("bgmove");
		};

		if (mouseY > windowHeight / 2) {
			$('#imgDIV').show();
			$(".bg-img").addClass("op-0");
			$(".bg-img").removeClass("bgmove");
			$(".person").addClass("bgmove");
			$(".person").removeClass("op-0");
		};
	})

})

// 이렇게 다른 이미지들에도 마우스 오버 기능 넣자
// 밀도 높이자!