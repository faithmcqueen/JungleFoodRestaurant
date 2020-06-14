// Create ready function with jQuery
$ (document).ready(function () {
//Information about the location should be hidden first
$('.location_info').hide();
// Create function to show the location info depending on which location they click
//it should dissappear if they click it again
$('h2').click(function() {
    $(this).next('.location_info').slideToggle(2000);
    $(this).css('color','#246a86');
});

}); // End of ready function