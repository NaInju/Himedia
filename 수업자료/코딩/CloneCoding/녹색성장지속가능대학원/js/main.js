// window.alert();

// 전체 페이지 효과
// section => parallax 효과
    const sections = gsap.utils.toArray('#wrap section'); // => Node List 형태의 유사배열을 배열로 변환

    sections.forEach(section => { //.array는 필요없음. 이미 위에 구문에서 array로 만들어서 중복됨.
        gsap.from(section, {
            y: 100, //기본 단위는 px, 퍼센트 쓰고 싶을땐 붙이면 됨.
            opacity: 0,duration: 0.5,
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
            }

        })
    })

// ** popup
const btnPopup = document.querySelector('#popup button')
btnPopup.addEventListener('click', function() {
   document.querySelector('#popup').style.display = 'none';
})


/** header */ 

// - 헤더 스타일 변경 => scroll 클래스 넣다 뺐다
const header = document.querySelector('#header');
const gnbDep1 = document.querySelectorAll('#gnb .dep1>li')



gnbDep1.forEach(dep1 => {
    //gnbDep2 구현
    dep1.addEventListener('mouseenter', () => {
        header.classList.add('scroll')

        })
    dep1.addEventListener('mouseleave', () => {
        header.classList.remove('scroll')
    })
    
})


//  ** 헤더 scroll
// const header = document.querySelector('#header')

// header.addEventListener('mouseenter', function(){
//     header.classList.add('scroll')
// })

// header.addEventListener('mouseleave', function(){
//     header.classList.remove('scroll')
// })

const langBtn = document.querySelector('.header-util .lang-wrap button')
const langwrap = document.querySelector('.header-util .lang-wrap')
// const langIco = document.querySelector('')

const searchBtn = document.querySelector('.search-wrap button')
const searchBox = document.querySelector('.search-wrap .search-box')

langBtn.addEventListener('click', () => {
    langwrap.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= header.offsetHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

searchBox.style.display = 'none'; //초기값,.
searchBtn.addEventListener('click', () => {
    //header.classList.toggle('scroll')
    //searchBox.classList.toggle('show')
    // 토글 직접 작성
    if(searchBox.style.display === 'none') {
        searchBox.style.display = 'flex';
        header.classList.add('scroll');
    } else {
        searchBox.style.display = 'none';
        // header.classList.remove('scroll'); => 무조건 remove
        if(window.scrollY < header.offsetHeight) {
        header.classList.remove('scroll')
        }
    //searchBox.style.display = 'flex'
    }
})


// ** allmenu */
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

langBtn.addEventListener('click', () => {
  langWrap.classList.toggle('active');
  searchBox.style.display = 'none'
})



/* 메인비주얼 스와이퍼 */ 

const progressBar = document.querySelector('.main-swiper .bar')
const playBtn = document.querySelector('.main-swiper .btn-play')
const stopBtn = document.querySelector('.main-swiper .btn-stop')
let isPaused = false;
let progressTimeout;
let animationDuration = 3000;

document.documentElement.style.setProperty('--animation-duration',`${animationDuration}ms`)
//css에 사용할 변수 설정

function resetProgressBar() {
    progressTimeout = setTimeout(() => {
        progressBar.style.animation = 'none';
        //애니메이션 초기화
        progressBar.offsetHeight; //요소를 다시 찾아서 아래 animation을 다시시작
        progressBar.style.animation = 'progress ${animationDuration}ms linear'
        // 다음 슬라이드
    },animationDuration)
}

const mainSwiper = new Swiper('.main-swiper', {
    // speed: 400,
    // spaceBetween: 100,
    autoplay: {
        delay: animationDuration,
    },
    effect: 'fade',
    pagination: {
        el: ".swiper-pagination",
        
    },
    on: {
        slideChangeTransitionsStart: () => {
            //progress bar animation
            resetProgressBar()
        }
    },
    // 뒤에 쉼표 그냥 미리 써놓기. 플러그인은 뒤에 쉼표있어도 구동
});

playBtn.addEventListener('click', () => {
    // 애니메이션 running
    progressBar.style.animationPlayState = 'running';
    
    mainSwiper.autoplay.start();

    //스탑버튼으로 바꿈
    stopBtn.style.display = 'block'
    playBtn.style.display = 'none'
})
stopBtn.addEventListener('click', () => {

    // 애니메이션
    progressBar.style.animationPlayState = 'paused';
    //스와이퍼 오토플레이 속성 멈춤
    mainSwiper.autoplay.stop();

    //플레이버튼으로 바꿈
    stopBtn.style.display = 'none'
    playBtn.style.display = 'block';
})



/** Faculty */

const facultySwiper = new Swiper('.faculty-swiper', {
  // Optional parameters
  loop: true,
  autoplay: {delay: 0,},
  speed: 4000,
  //slidesPerView: 4, // 화면에 보여질 슬라이드 갯수
  slidesPerView: 'auto', //css에 적용된 크기
  //**연속적으로 자연스럽게 흐르게 => css의 transition-timing-function: linear */
//   spaceBetween: 60,

});


/* news tab */ 

const newsContents = document.querySelectorAll('.tab-contents .cont-box');

const tabsBtn = document.querySelectorAll('.btn-box button');
tabsBtn.forEach((tab, i) => {
    tab.addEventListener('click',function(){
        // e.preventDefault();
        //클릭한 탭 제외한 나머지 탭 => 제거(remove)
        tabsBtn.forEach(t => t.classList.remove('active'))

        //클릭 이벤트가 발생한 탭 => 추가(add)
        this.classList.add('active')
        //newsTabs[i].classList.add('active')
        // console.log(i)

        //* Contents
        newsContents.forEach(cont => cont.style.display = 'none');
        newsContents[i].style.display = 'block'
    })
})


/* 배너 */
const bannerLink = document.querySelector(".banner-wrap .main-link")
const bannerBar = document.querySelector(".banner-wrap .progress .bar")

bannerLink.addEventListener('mouseover', function() {
    // 애니메이션 실행
    bannerBar.style.animation = "progress 2s"
})
bannerLink.addEventListener('mouseout', function() {
    bannerBar.style.animation = "none" //초기화
})

// bannerLink.style.width = "500px"

/*
bannerLink.addEventListner('mouseenter', function() {
    bannerBar.style.animation = 'none; //애니메이션 초기화
    bannerBar.offsetHeight; //요소를 다시 찾아서 아래 animation을 다시시작
    bannerBar.style.animation = 'progress 2s'
})
*/

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