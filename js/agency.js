/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});


$("#goToTop").click(function() {
	$('html, body').animate({ scrollTop: 0 },1500, 'easeInOutExpo');
});

$("#titleeffect l1").addClass("load");
//$('header').ready(function() {
//    var number = 1 + Math.floor(Math.random() * 4);
//    var fileName = 'url(./img/header-bg' + number + '.jpg)';
//    $('header').css("background-image", fileName);
//});

$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});

$('header').ready(function(cdata){
    var jsonFile = $.getJSON("./js/counter.json", function(){
        $.each(cdata, function(i, field){
            console.log( field + " " );
        });
        //console.log( "success " + cdata );
    });

});
