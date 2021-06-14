$("a.nav-link").click(function() {
    event.preventDefault();
    $(window).scrollTop($($(this).attr("href")).offset().top);
});