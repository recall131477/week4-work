(function ($) {
  const changeItem = () => {
    // 切換product-tab__item顯示不同product__content內容
    let index = 0;
    $('.product-tab__item').eq(index).addClass('is-active');
    $('.product__content').eq(index).show();
    $('.product-tab__item').on('click', function () {
      index = $(this).index();
      console.log(index);
      $('.product__content').hide();
      $('.product__content').eq(index).fadeIn();
      $('.product-tab__item').removeClass('is-active');
      $('.product-tab__item').eq(index).addClass('is-active');
    })
  };
  $(function () {
    changeItem();
  });
})(jQuery);
