$(document).ready(function(){
	$(".tabs").slick({
		slidesToShow: 4,
		prevArrow: "<button class='tabs__btn btn btn--arrow btn--prev'>Назад</button>",
		nextArrow: "<button class='tabs__btn btn btn--arrow btn--next'>Еще</button>",
	});

	$(".projects__list").slick({
		slidesToShow: 4,
		prevArrow: "<button class='projects__arrow btn btn--arrow btn--prev'>Назад</button>",
		nextArrow: "<button class='projects__arrow btn btn--arrow btn--next'>Еще</button>",
	})
});