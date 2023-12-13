document.addEventListener('DOMContentLoaded', function () {
    var footer = document.querySelector('footer');
    var body = document.body;

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var bodyHeight = body.offsetHeight;

        // Adjust this threshold as needed
        var threshold = 100;

        // Check if the user has scrolled to the bottom of the page
        if (scrollPosition + windowHeight >= bodyHeight - threshold) {
            footer.classList.add('visible');
            body.style.paddingBottom = footer.offsetHeight + 'px';
        } else {
            footer.classList.remove('visible');
            body.style.paddingBottom = 0;
        }
    });
});
