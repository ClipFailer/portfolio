$(function() {

    let header = $("#header"),
        welcomeH = $("#welcome").innerHeight(),
        scrollOffet = $(this).scrollTop();

    // Fixed Header
    checkScroll(scrollOffet);

    $(window).on("scroll", function() {

        scrollOffet = $(this).scrollTop();
        checkScroll(scrollOffet);

    })

    function checkScroll(scrollOffet) {
        
        console.log(scrollOffet);

        if (scrollOffet >= welcomeH - 5) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('#nav a').removeClass('active');
        $this.addClass('active');    

        $('html, body').animate ( {
            scrollTop: blockOffset
        }, 500)

        closeNavToggle();
    })


    // Menu nav toggle
    $('#nav_toggle').on('click', function(event) {
        event.preventDefault();

        $('#nav_toggle').toggleClass('active');
        $('#nav').toggleClass('active');
        $('#header').toggleClass('active');
        
    })

    function closeNavToggle() { 
        $('#nav_toggle').removeClass('active');
        $('#nav').removeClass('active');
        $('#header').removeClass('active');
    }


    // Wedo Accordion
    $('[data-collapse]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $(blockId).slideToggle();

        $this.toggleClass('active');
    })


    // Slider
    $('[data-slider]').slick({
        Infinity: true,
        fade: false,
        sladesToShow: 1,
        sladesToScroll: 1
    });

});