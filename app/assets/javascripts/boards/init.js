$(function(){

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['m', 'd'],
    scrollingSpeed: 300,
    sectionsColor : ['#f2f2f2', '#4BBFC3'],
    verticalCentered: false,
  });

});

$(".flipper").flip({
  axis: 'y',
  trigger: 'click'
});

$(".toggle").click(function() {
	$(".flipper").flip('toggle');
})

})