
var highlightLink = function(){
    console.log('inside');
var path = window.location.pathname;

$('.header .align-middle p').removeClass('active-url');

    if (path.indexOf('index.html') > 0)
        $('[data-url=about]').addClass('active-url');
    else if(path.indexOf('post-advertisement.html') > 0)
        $('[data-url=adds]').addClass('active-url');
    else if(path.indexOf('recommended.html') > 0)
        $('[data-url=recommended]').addClass('active-url');
};

$(document).ready(function(){
    highlightLink();
    console.log('sdfsdgfsd');
    $('.container-1').css('min-height',$(window).height());
})  
// function initialize() {
//     var mapCanvas = document.getElementById('map-canvas');
//     var mapOptions = {
//       center: new google.maps.LatLng(13.024099, 77.643148),
//       zoom: 14,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//     var map = new google.maps.Map(mapCanvas, mapOptions)
// }
// google.maps.event.addDomListener(window, 'load', initialize);  
