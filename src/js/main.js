(function(){
	// Модуль - Header slider
	var btnPrev = document.querySelector(".slider-head__arrow--prev");
	var btnNext = document.querySelector(".slider-head__arrow--next");
	var headerSlides = document.querySelectorAll(".slider-head__item");
	var nextIndexElem = document.querySelector(".slider-head__index-next");
	var prevIndexElem = document.querySelector(".slider-head__index-prev");
	var MAX_INDEX = headerSlides.length;
	var currentIndex = 0;

	prevIndexElem.innerHTML = "0" + MAX_INDEX;
	btnPrev.style.backgroundImage = headerSlides[headerSlides.length - 1].style.backgroundImage;
	btnNext.style.backgroundImage = headerSlides[1].style.backgroundImage;

	var clearActiveClass = function(){
		for(var i = 0; i < headerSlides.length; i++){
			headerSlides[i].classList.remove("slider-head__item--current");
		}
	}
	var changeIndexNumber = function(elemNext, elemPrev, index, maxIndex, minIndex){
		var indexPrev, indexNext;
		if(index === minIndex){
			indexPrev = maxIndex;
		}
		if(index === maxIndex){
			indexNext = minIndex;
		} 
		var resultNext = indexNext || index + 1;
		var resultPrev = indexPrev || index - 1;

		changeBtnBG(btnPrev, btnNext, resultPrev, resultNext);

		elemNext.innerHTML = "0" + resultNext;
		elemPrev.innerHTML = "0" + resultPrev;
	}
	var changeBtnBG = function(btnPrev, btnNext, indexPrev, indexNext){
		btnPrev.style.backgroundImage = headerSlides[indexPrev - 1].style.backgroundImage;
		btnNext.style.backgroundImage = headerSlides[indexNext - 1].style.backgroundImage;
	}	
	var moveToNextSlide = function(){
		if(currentIndex >= MAX_INDEX - 1){
			currentIndex = -1;
		}
		clearActiveClass();
		currentIndex++;

		headerSlides[currentIndex].classList.add("slider-head__item--current");

		var index = headerSlides[currentIndex].getAttribute("data-index");
		changeIndexNumber(nextIndexElem, prevIndexElem, parseInt(index), MAX_INDEX, 1);
	}

	var moveToPrevSlide = function(){
		if(currentIndex === 0){
			currentIndex = MAX_INDEX;
		}
		clearActiveClass();
		currentIndex--;

		headerSlides[currentIndex].classList.add("slider-head__item--current");

		var index = headerSlides[currentIndex].getAttribute("data-index");
		changeIndexNumber(nextIndexElem, prevIndexElem, parseInt(index), MAX_INDEX, 1);

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

	// Открытие/Закрытие окна обратного звонка
	$(".btn--callback").click(function(){
		$(".modal").fadeIn(500);
		$(".modal__content--callback").fadeIn(400);
		$("html").addClass("popup-opened");
	});	

	$(".modal__close").not(".modal__close--order").click(function(){
		$(".modal").fadeOut();
		$(".modal__content--callback").fadeOut();
		$(".modal__content--project").fadeOut();
		$(".modal__content--order").fadeOut();
		$("html").removeClass("popup-opened");
	});

	$(".projects__item").click(function(){
		 $(window).trigger('resize');
		$(".modal").fadeIn(500);
		$(".modal__content--project").fadeIn(400);
		$("html").addClass("popup-opened");
	});

	$(".project__pict-slider").slick({
		slidesToShow: 5,
		asNavFor: ".project__main-pict",
		focusOnSelect: true,
		prevArrow: "<button class='project__arrows btn btn--arrow btn--prev'>Назад</button>",
		nextArrow: "<button class='project__arrows btn btn--arrow btn--next'>Еще</button>",
	});
	$(".project__main-pict").slick({
		slidesToShow: 1,
		asNavFor: ".project__pict-slider"
	});
	$(".btn--order").click(function(){
		$(".modal__content--order").fadeIn(400);
		$(".modal__overlay").css("z-index", "10");
	});

	$(".modal__close--order").click(function(){
		$(".modal__content--order").fadeOut(400);
		$(".modal__overlay").css("z-index", "-1");
	})
});