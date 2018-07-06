$(".menu__phone-trigger").click(function(){
	$(".nav").addClass("nav--opened");
});

$(document).click(function(event) {
    if ($(event.target).closest(".menu").length) return;
    $(".nav").removeClass("nav--opened");
    event.stopPropagation();
});