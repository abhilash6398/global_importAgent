
function setLeftspacing() {
  const elem = document.getElementById("containerbox");
  const leftPos = elem && elem.offsetLeft;
  const windowWidth = $(window).width();

  if (windowWidth > 1132) {
    $(".g-services-slider .g-services-item:first-child").css("marginLeft", `${leftPos + 8}px`)
  }

}

$(document).ready(function () {


  $('#g-banner-slider').bxSlider({
    pager: false,
    auto: true,
    speed: 0,
    mode: 'fade',
    controls: false,
    pause: 4000
  });

  $(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    let headerHeight = $(".g-header").height();
    if (windowScroll >= (headerHeight + 30)) {
      $(".g-header").addClass("isFixed");
    } else {
      $(".g-header").removeClass("isFixed");
    }

  });

  function getSliderProgressBar(slideElement, oldIndex, newIndex, elem) {
    let count = -1;
    for (let i = 0; i < slideElement.prevObject.length; i++) {
      const elem = slideElement.prevObject[i];
      if (elem && elem.getAttribute('aria-hidden') === 'true') {
        count++;
      }
    }

    let progressLength = (newIndex + 1) * (100 / count) + '%';
    $(elem).css('max-width', 'calc(15px + ' + progressLength + ')')
  }


  const serviceSlider = $('#g-services-slider').bxSlider({
    auto: false,
    controls: false,
    speed: 500,
    minSlides: 1,
    maxSlides: 10,
    moveSlides: 1,
    slideWidth: 360,
    infiniteLoop: false,
    pager: false,
    onSliderLoad: function () { setLeftspacing(); },
    onSliderResize: function () { setLeftspacing(); },
    onSlideAfter: function () { setLeftspacing(); },
    onSlideBefore: function (slideElement, oldIndex, newIndex) {
      getSliderProgressBar(slideElement, oldIndex, newIndex, "#elem1")
    }
  });

  $('#rightControl2').click(function () {
    serviceSlider.goToNextSlide();
    return false;
  });

  $('#leftControl2').click(function () {
    serviceSlider.goToPrevSlide();
    return false;
  });


  $('.mobileMenu').click(function () {
    $('.g-nav').addClass('isOpen');
    $('body').addClass('body-hidden')
  });

  $('.mobileClose').click(function () {
    $('.g-nav').removeClass('isOpen');
    $('body').removeClass('body-hidden')
  });

  $('.g-nav-list-item-link').click(function () {
    $(this).toggleClass('isOpen');
    $(this).next('.g-sunmenu-container').slideToggle(300);
  });

  $('.fs-acc-title').click(function () {
    if ($(this).hasClass('isOpen')) {
      $(this).removeClass('isOpen');
      $(this).next('.fs-acc-desc').slideUp(300);
    } else {
      $('.fs-acc-title').removeClass('isOpen');
      $('.fs-acc-desc').slideUp(300);
      $(this).addClass('isOpen');
      $(this).next('.fs-acc-desc').slideDown(300);
    }

  });

  $(".auth-field-control").blur(function () {
    let inputValue = $(this).val();

    if(inputValue && inputValue.toString().length > 0){
        $(this).parent('.auth-form-field').addClass('isActive');
    } else {
        $(this).parent('.auth-form-field').removeClass('isActive');
    }

   
});

});



