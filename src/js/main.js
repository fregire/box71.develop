(function(){
	// Модуль - Header slider
	var btnPrev = document.querySelector(".slider-head__arrow--prev");
	var btnNext = document.querySelector(".slider-head__arrow--next");
	var headerSlides = document.querySelectorAll(".slider-head__item");
	var nextIndex = document.querySelector(".slider-head__index-next");
	var prevIndex = document.querySelector(".slider-head__index-prev");
	var currentIndex = 0;

	var clearActiveClass = function(){
		for(var i = 0; i < headerSlides.length; i++){
			headerSlides[i].classList.remove("slider-head__item--current");
		}
	}

	var changeIndexNumber = function(elem){
		elem.innerHTML = "0" + currentIndex;
	}

	var moveToNextSlide = function(){
		if(currentIndex >= headerSlides.length - 1){
			currentIndex = -1;
		}
		clearActiveClass();
		currentIndex++;

		headerSlides[currentIndex].classList.add("slider-head__item--current");
		changeIndexNumber(nextIndex);
	}

	var moveToPrevSlide = function(){
		if(currentIndex === 0){
			currentIndex = headerSlides.length;
		}
		clearActiveClass();
		currentIndex--;

		headerSlides[currentIndex].classList.add("slider-head__item--current");
	}

	btnNext.addEventListener("click", moveToNextSlide);
	btnPrev.addEventListener("click", moveToPrevSlide);
})();
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
		lazyLoad: 'ondemand',
	});

	// Из чего мы строим
	$(".tabs__item").click(function(){
		var $id = $(this).attr("data-id");
		$(".tabs__item").removeClass("tabs__item--active");
		$(this).addClass("tabs__item--active");
		$(".show-tab").removeClass("show-tab--active");
		$(".show-tab#" + $id).addClass("show-tab--active");
	});
});