// Write any custom javascript functions here


//-----------------------navigation bar sticky and resize-------------------

  $('#nonresponsive-topbar').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
  $(this).removeClass('shrink');
})

//-----------------------part0 resize with background image-------------------

var part0 = $('#part0'),
    imgWidth = 1200,
    imgHeight = 800,
    imgRatio = imgHeight/imgWidth,
    part0Height = part0.height(),
    part0Width = part0.width();

var part2 = $('#part2'),
    ac = $('#activity-1'),
    carouselWidth = 1280,
    carouselHeight = 660,

    activityWidth = 1152,
    activityHeight = 650,

    carouselRatio = carouselHeight/carouselWidth,

    activityRatio = activityHeight/activityWidth,

    part2Height = part2.height(),
    part2Width = part2.width(),

    acHeight = ac.height(),
    acWidth = ac.width();


$(document).ready(function() {
    part0.css('height', imgRatio*part0Width);
    part2.css('height', carouselRatio*part2Width);
    console.log(activityRatio*acWidth);
    $('.activity').css('height', activityRatio*acWidth);
});

$(window).resize(function() {
    part0Width = part0.width();
	part0.css('height',imgRatio*part0Width);
	part2Width = part2.width();
	part2.css('height', carouselRatio*part2Width);
	acWidth = part2Width*0.9;
	console.log(activityRatio + ", " + acWidth);
	console.log(activityRatio*acWidth);
    $('.activity').css('height', activityRatio*acWidth);
});

//-------------------------------slick-carousel-------------------------------

$(document).ready(function(){
  $('.carousel').slick({
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 4000
  });
});