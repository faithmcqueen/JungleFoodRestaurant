// Create ready function with jQuery
$ (document).ready(function () {
// When mouse touches img color should change
$('.bg_sm').mouseenter(function() {
	$(this).attr('src','images/sm-img2.png');
	});
//when mouse leaves img color goes back to original
	$('.bg_sm').mouseout(function() {
	$(this).attr('src','images/sm-img.png');
	});
	
});// ent ready function