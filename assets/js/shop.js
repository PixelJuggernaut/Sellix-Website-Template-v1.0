$('.shop__category').click(function () {
    if(!$(this).hasClass('active')) {
        $('.shop__category').removeClass('active');
        $(this).addClass('active');
        $('.shop__cards').fadeOut();
        $('#category-'+$(this).data('category-index')).fadeIn();
    }
});