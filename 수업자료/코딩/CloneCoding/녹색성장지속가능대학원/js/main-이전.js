// window.alert();

// ** popup
const btnPopup = document.querySelector('#popup button')
btnPopup.addEventListener('click', function() {
   document.querySelector('#popup').style.display = 'none';
})


/* 헤더 */ 

//  ** 헤더 scroll
const header = document.querySelector('#header')

header.addEventListener('mouseenter', function(){
    header.classList.add('scroll')
})

header.addEventListener('mouseleave', function(){
    header.classList.remove('scroll')
})

// ** allmenu **
const btnAllmenuOpen = document.querySelector(".header-util .allmenu-open")
const btnAllmenuClose = document.querySelector(".header-util .allmenu-close")
const allmenu = document.querySelector(".header-util .allmenu-popup")

btnAllmenuOpen.addEventListener('click',function() {
    allmenu.style.display = 'flex';
    document.documentElement.style.overflow = 'hidden'
})
btnAllmenuClose.addEventListener('click',function() {
    allmenu.style.display = 'none';
    document.documentElement.style.overflow = 'auto'
})

// ** util

const btnLang = document.querySelector(".header-util .lang-wrap button")
const langWrap = document.querySelector(".header-util .lang-wrap")

btnLang.addEventListener('click', function(){
    // listLang.style.display = 
    langWrap.classList.toggle('active')
})


/* 푸터 */ 
const familyBtn = document.querySelector("#footer .family-site button")
const familyList = document.querySelector("#footer .family-site ul")

/* 
familyBtn.addEventListener('click', function(){
     familyList.style.display = "block"
 }) 
*/
familyBtn.addEventListener('click', function(){
    familyList.classList.toggle('on');
})

/* 메인비주얼 스와이퍼 */ 
const mainSwiper = new Swiper('.main-swiper', {
    // speed: 400,
    // spaceBetween: 100,
    autoplay: true,
    effect: 'fade',
    pagination: {
        el: ".swiper-pagination",
    },
    // 뒤에 쉼표 그냥 미리 써놓기. 플러그인은 뒤에 쉼표있어도 구동
});


/* tab */ 



/* 배너 */
const bannerLink = document.querySelector(".banner-wrap .main-link")
const bannerBar = document.querySelector(".banner-wrap .progress .bar")

bannerLink.addEventListener('mouseover', function() {
    // 애니메이션 실행
    bannerBar.style.animation = "progress 1s"
})
bannerLink.addEventListener('mouseout', function() {
    bannerBar.style.animation = "none" //초기화
})

// bannerLink.style.width = "500px"