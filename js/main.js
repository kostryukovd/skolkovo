$(document).ready(function () {



        $('.img-slick').slick
        (
            {
                slidesToShow: 4,

                prevArrow: $(".left-arrow"),
                nextArrow: $(".right-arrow"),
                responsive: [
                    {
                        breakpoint: 1100,
                        settings:
                            {
                                slidesToShow: 3,

                            }
                    },
                    {
                        breakpoint: 920,
                        settings:
                            {
                                slidesToShow: 2,

                            }
                    },
                    {
                        breakpoint: 737,
                        settings:
                            {
                                slidesToShow: 1,

                            }
                    },
                    {
                        breakpoint: 523,
                        settings:
                            {
                                slidesToShow: 2,

                            }
                    },
                    {
                        breakpoint: 400,
                        settings:
                            {
                                slidesToShow: 1,

                            }
                    }

                ]
            }
        );

        $('[data-fancybox="gallery1"]').fancybox
        (
            {
                loop: true
            }
        )

    }
);


function expand_menu() {


    var burg = document.getElementsByClassName("burger-menu");

    if (burg[0].classList.contains("js-burger-menu")) {
        burg[0].classList.remove("js-burger-menu");
    } else {
        burg[0].classList.add("js-burger-menu");
    }
}
