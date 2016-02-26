// Write any custom javascript functions here
  $('#nonresponsive-topbar').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
  $(this).removeClass('shrink');
})

var part0 = $('#part0'),
    imgWidth = 1200,
    imgHeight = 800,
    imgRatio = imgHeight/imgWidth,
    part0Height = part0.height(),
    part0Width = part0.width();

$(document).ready(function() {
    part0.height(imgRatio*part0Width);
});

$(window).resize(function() {
    part0Width = part0.width();
	part0.height(imgRatio*part0Width);
});
