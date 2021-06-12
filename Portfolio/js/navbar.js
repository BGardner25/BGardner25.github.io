// write navbar into tag with id=navbar-placeholder
$(function(){
    $("#navbar-placeholder").load("html/navbar.html");
});

// prevent nav bar from updating url when navigating to section of the same page
$("a.nav-link").on("click", function(event) {
   event.preventDefault();
   $(window).scrollTop($($(this).attr("href")).offset().top);
});