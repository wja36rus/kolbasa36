$(document).ready(function () {

    new Splide('#image-carousel', {
        type: 'loop',
        fixedWidth: '20rem',
        fixedHeight: '20rem',
        gap: '1rem',
        perPage: 4,
        perMove: 1,
    }).mount();

    var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.sizer4'
        }
    );

    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
        console.log('loaded');
    });

    var burger_button = $('#burger-top');
    var burger_state = 'notactive';
    var mob_menu = $('.menu-top');

    function menu_open() {
        if (burger_state == 'notactive') {
            burger_button.addClass('active').removeClass('notactive');
            mob_menu.addClass('active').removeClass('notactive');
            burger_state = 'active';
            console.log('active');
        } else if (burger_state == 'active') {
            burger_button.addClass('notactive').removeClass('active');
            mob_menu.addClass('notactive').removeClass('active');
            burger_state = 'notactive'
            console.log('notactive');
        }
        ;
    }

    $('.mob-nav a').on('click', menu_open)
    burger_button.on('click', menu_open);

    var Modal = $('#ModalImage');

    var img = $(".grid-item > img");
    var ModalIgm = $(".modal-image-content");
    var ModalClose = $(".modal-close");


    img.on('click', function () {
        Modal.css("display", "flex");
        ModalIgm.attr("src", this.src);
        console.log(this.src);
    });

    ModalClose.on('click', function () {
        Modal.css("display", "none");
    })

    $('#send1').click(function (e) {
        e.preventDefault();
        var SenderName = $('#SenderName');
        var SenderPhone = $('#SenderPhone');

        if (SenderName.val() === "") {
            $('.error1').empty().text("Введите имя");
        } else if (SenderPhone.val() === "") {
            $('.error1').empty().text("Введите телефон");
        } else {
            $('.error1').empty();
            $('.success1').removeClass('d-none');

            setTimeout(() => {
                $('.success1').addClass('d-none');
                SenderName.val('');
                SenderPhone.val('');
            }, 1500)
        }

    });

    $('#send2').click(function (e) {
        e.preventDefault();
        var SenderName = $('#SenderName2');
        var SenderPhone = $('#SenderPhone2');

        if (SenderName.val() === "") {
            $('.error2').empty().text("Введите имя");
        } else if (SenderPhone.val() === "") {
            $('.error2').empty().text("Введите телефон");
        } else {
            $('.error2').empty();
            $('.success2').removeClass('d-none');

            setTimeout(() => {
                $('.success2').addClass('d-none');
                SenderName.val('');
                SenderPhone.val('');
            }, 1500)
        }

    });

    $('#send3').click(function (e) {
        e.preventDefault();
        var SenderName = $('#SenderName3');
        var SenderPhone = $('#SenderPhone3');

        if (SenderName.val() === "") {
            $('.error3').empty().text("Введите имя");
        } else if (SenderPhone.val() === "") {
            $('.error3').empty().text("Введите телефон");
        } else {
            $('.error3').empty();
            $('.success3').removeClass('d-none');

            setTimeout(() => {
                $('.success3').addClass('d-none');
                SenderName.val('');
                SenderPhone.val('');
            }, 1500)
        }

    });

});