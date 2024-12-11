$('.hc-saying__carousel__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.hc-saying__carousel__item'
    });
    $('.hc-saying__carousel__item').slick({
        slidesToShow: 3,
        slidesToScroll: .5,
        vertical:true,
      	centerMode: true,
        asNavFor: '.hc-saying__carousel__image',
        dots: false,
        arrows: true,
		prevArrow:'<button type="button" class="slick-prev slick-arrow"><svg style="color: rgb(10, 30, 38);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> </svg></button>',
		nextArrow:'<button type="button" class="slick-next pull-right"><svg style="color: rgb(10, 30, 38);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" fill="#0a1e26"></path> </svg></button>',
        focusOnSelect: true,
        verticalSwiping:true,
        draggable:true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    vertical: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                }
            }
        ]
    });