document.addEventListener('DOMContentLoaded',function(){
  const imgHeight = document.querySelector('.main_visual').offsetHeight;
  const header = document.querySelector('header');
  const nav = document.querySelector('.nav_text');

  window.addEventListener('scroll',function(){
    if(window.scrollY < imgHeight){
      header.classList.remove('change-color');
      nav.classList.remove('change-color');
    }else{
      header.classList.add('change-color');
      nav.classList.add('change-color');
   }
  })
});
document.addEventListener('DOMContentLoaded',function(){
  const imgHeight = document.querySelector('.main_visual').offsetHeight;
  const header = document.querySelector('header');
  const nav = document.querySelector('.nav_text2');

  window.addEventListener('scroll',function(){
    if(window.scrollY < imgHeight){
      header.classList.remove('change-color');
      nav.classList.remove('change-color');
    }else{
      header.classList.add('change-color');
      nav.classList.add('change-color');
   }
  })
});
document.addEventListener('DOMContentLoaded',function(){
  const imgHeight = document.querySelector('.main_visual').offsetHeight;
  const header = document.querySelector('header');
  const nav = document.querySelector('.nav_text3');

  window.addEventListener('scroll',function(){
    if(window.scrollY < imgHeight){
      header.classList.remove('change-color');
      nav.classList.remove('change-color');
    }else{
      header.classList.add('change-color');
      nav.classList.add('change-color');
   }
  })
});
document.addEventListener('DOMContentLoaded',function(){
  const imgHeight = document.querySelector('.main_visual').offsetHeight;
  const header = document.querySelector('header');
  const nav = document.querySelector('.nav_text4');

  window.addEventListener('scroll',function(){
    if(window.scrollY < imgHeight){
      header.classList.remove('change-color');
      nav.classList.remove('change-color');
    }else{
      header.classList.add('change-color');
      nav.classList.add('change-color');
   }
  })
});
document.addEventListener('DOMContentLoaded',function(){
  const imgHeight = document.querySelector('.main_visual').offsetHeight;
  const header = document.querySelector('header');
  const nav = document.querySelector('.nav_text5');

  window.addEventListener('scroll',function(){
    if(window.scrollY < imgHeight){
      header.classList.remove('change-color');
      nav.classList.remove('change-color');
    }else{
      header.classList.add('change-color');
      nav.classList.add('change-color');
   }
  })
});

document.addEventListener('DOMContentLoaded',function(){
  const imgHeight = document.querySelector('.global_header').offsetHeight;
  const header = document.querySelector('header');

  window.addEventListener('scroll',function(){
    if(window.scrollY < imgHeight){
      header.classList.remove('change-color');
    }else{
      header.classList.add('change-color');
   }
  })
});

// スクロールするとロゴ画像・ログイン・カート画像変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".main_visual").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("headerLogoScroll");
    } else {
      $(".js-header").removeClass("headerLogoScroll");
    }
  });
});

// ハンバーガーメニューを押すとタイトルが出る
$(function(){
  $('.btn').click(function(){
    $(this).toggleClass("push");
    $('.header-logo').toggleClass("push");
  });
});