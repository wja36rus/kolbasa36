$(document).ready(function(){

    new Splide( '#image-carousel', {
        type: 'loop',
        fixedWidth : '20rem',
        fixedHeight: '20rem',
        gap        : '1rem',
        perPage:4,
        perMove:1,
    } ).mount();

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.sizer4'
      }
    );
    
    $grid.imagesLoaded().progress( function() {
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
        }
        else if (burger_state == 'active') {
            burger_button.addClass('notactive').removeClass('active');
            mob_menu.addClass('notactive').removeClass('active');
            burger_state = 'notactive'
            console.log('notactive');
        };
    }

    

    $('.mob-nav a').on('click', menu_open)
    burger_button.on('click', menu_open);

});