// swiper.js

//***ex1 */
const swiper1 = new Swiper('.ex1 .swiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //*** ex2 */
  // 애니메이션 시간 변수처리
  const slideDuration = 5000;
  document.documentElement.style.setProperty('--slide-duration',`${slideDuration}ms`)
  // :root {--slide-duration: 2000ms}

  const swiper2 = new Swiper('.swiper2', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: slideDuration,
    },

    pagination: {
      el: '.my-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span>
        <div class="progress"><div class="bar"></div></div>
        <span class="${totalClass}"></span>
        `;
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });

  //'<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>'

  /** ex3 */
  // Mobile First => default가 모바일, 분기점(breakpoint)은 `px이상(이하 아니고) 기준
  // 1440 이상 4개 ,1240 이상 3개, 768 이상 2게, 모바일 
  const swiper3 = new Swiper('.swiper3', {
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 1,
    breakpoints : {
      768: {
        slidesPerView: 2,     
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1680: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  })

  //*** ex4 */
  // 애니메이션 시간 변수처리
  // const slideDuration = 5000;
  // document.documentElement.style.setProperty('--slide-duration',`${slideDuration}ms`)
  // // :root {--slide-duration: 2000ms}

  const btnPlayStop = document.querySelector('.btn-play-stop');

  let idPlaying = true;

  const swiper4 = new Swiper('.swiper4', {
    loop: true,
    autoplay: {delay: slideDuration,},
    pagination: {
      el: '.my-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {  // ✅ 함수 이름을 고침!
        return `
          <span>${current}</span>
          <div class="progress"><div class="bar"></div></div>
          <span>${total}</span>
        `;
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });

  // btnPlayStop.addEventListener('click', () => {버튼 전용함수}) => 
btnPlayStop.addEventListener('click', playStop)

  function playStop() { //다른곳에 재사용할 함수
    // 여기다 bar 선언 하기
    if(isPlaying) { //=> 버튼(i태그) 교체, slide 멈춤
      btnPlayStop.innerHTML = '<i class="ri-play-circle-line"></i>'
      // isPlaying = false;
      swiper4.autoplay.pause();
    } else {
      btnPlayStop.innerHTML = '<i class="ri-pause-circle-line"></i>';
      // isPlaying = true;
      swiper4.autoplay.resume();
    }
    isPlaying = !isPlaying
  }


  // ** ex5
  const swiper5 = new Swiper('.swiper5', {
    autoplay : {delay: 2000},
    loop: true,
    slidesPerView: 3,
    spaceBetween: 80,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })