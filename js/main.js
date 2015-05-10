
// $(document).ready(function(){
    var highlightLink = function(){
        console.log('inside');
    var path = window.location.pathname;

    $('.header .align-middle p').removeClass('active-url');

    // if('/^\/about-us.html/'.test(path)){
    // if(/^\/samprathi/.test(path)){
        if (path.indexOf('index.html') > 0)
            $('[data-url=about]').addClass('active-url');
        else if(path.indexOf('post-advertisement.html') > 0)
            $('[data-url=adds]').addClass('active-url');
        else if(path.indexOf('recommended.html') > 0)
            $('[data-url=recommended]').addClass('active-url');
    };

$(document).ready(function(){
    highlightLink();
})    
    
// })