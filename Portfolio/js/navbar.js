// navbar for easy writing into html pages
document.write("<nav class=\"navbar fixed-top navbar-expand-sm navbar-light shadow-sm mb-5 bg-white rounded\">\n" +
    "        <div class=\"container\">\n" +
    "            <a class=\"navbar-brand me-auto\">Bailey Gardner</a>\n" +
    "            <button class=\"navbar-toggler shadow-none\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\"\n" +
    "                    aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
    "                <span class=\"navbar-toggler-icon\"></span>\n" +
    "            </button>\n" +
    "            <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n" +
    "                <div class=\"navbar-nav ms-auto\">\n" +
    "                    <a class=\"nav-link\" href=\"#home-anchor\">\n" +
    "                        <span class=\"navbar-custom-collapse\" data-bs-toggle=\"collapse\"\n" +
    "                              data-bs-target=\".collapse.show\">HOME</span>\n" +
    "                    </a>\n" +
    "                    <a class=\"nav-link\" href=\"#about-anchor\">\n" +
    "                        <span class=\"navbar-custom-collapse\" data-bs-toggle=\"collapse\"\n" +
    "                              data-bs-target=\".collapse.show\">ABOUT</span>\n" +
    "                    </a>\n" +
    "                    <a class=\"nav-link\" href=\"#portfolio-anchor\">\n" +
    "                        <span class=\"navbar-custom-collapse\" data-bs-toggle=\"collapse\"\n" +
    "                              data-bs-target=\".collapse.show\">PORTFOLIO</span>\n" +
    "                    </a>\n" +
    "                    <a class=\"nav-link\" href=\"#contact-anchor\">\n" +
    "                        <span class=\"navbar-custom-collapse\" data-bs-toggle=\"collapse\"\n" +
    "                              data-bs-target=\".collapse.show\">CONTACT</span>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </nav>");

// prevent nav bar from updating url when navigating to section of the same page
$("a.nav-link").on("click", function(event) {
   event.preventDefault();
   $(window).scrollTop($($(this).attr("href")).offset().top);
});