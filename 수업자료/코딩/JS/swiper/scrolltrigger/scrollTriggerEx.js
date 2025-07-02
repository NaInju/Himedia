
gsap.registerPlugin(ScrollTrigger);

/** scrollTrigger1.html */
/* 01. to('elm', {}) */  
gsap.to('.ex1 .box', {
    //애니메이션 속성
    x: 600,
    duration: 3, //3s
})

/* 02. trigger 요소 */  
gsap.to('.ex2 .box', {
    x: 1000,
    rotate: 360,
    duration: 3,
    scrollTrigger: '.ex2 .box', //트리거 요소도 자기 자신, 시작점 : 스크롤이 요소의 top 위치와 일치
})
/* 03. scrollTrigger 객체 */ 
gsap.to('.ex3 .box', {
    x: 1000,
    rotate: 360,
    duration: 3,
    scrollTrigger: {
        trigger: '.ex3 .box',
        //markers: true, //개발할 때 틜 때 트리거 위치 파악 용도
    }
})

/* 04. start,end */ 
// 문자열 형태, 2개의 값
// 첫번째값 => 애니메이션 요소의 시작점,
// 두번째 값 => 뷰포트
// top, bottom, center 등의 키워드, , % 값을 사용
gsap.to('.ex4 .box', { //애니메이션 요소
    x: 1000, rotate: 360, duration: 3,
    scrollTrigger: {
        trigger: '.ex4 .box',
        start: 'top 50%', // 트리거요소 맨 위ㅏ 화면(뷰포트)의 50% 지점에 왔을 때 애니메이션 시작
        end: 'top 50%', // scrub 속성
        //markers: true,
    }
})

/* 05.scrub 속성*/
// 스크롤과 애니메이션 동기화
// true, 숫자를 사용
// true에 0에 가깝고, 숫자는 클수록 애니메이션이 느려짐
gsap.to('.ex5 .box', {
    x: 1000, rotate: 360, duration: 3,
    scrollTrigger: {
        trigger: '.ex5 .box',
        start: 'top 50%',
        end: 'center 40%',
        scrub: 10, //1~5 사용
        /* 
        markers: {
            startColor: "slateblue", endColor: "tomato",
            fontSize: "20px", fontWeight: "bold",indent: 20
        },
        */
    }
})

/* 06. toggleActions */ 
// onEnter onLeave onEnterBack onLeaveBack => 상황
// 값 "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none"
gsap.to('.ex6 .box', {
    x: 1000,rotate: 360,duration: 3,
    scrollTrigger: {
        trigger: '.ex6 .box',
        start: 'top 50%',
        end: 'bottom 40%',
        toggleActions: 'play pause restart none',
        //markers: true,
    }

})

/* 07. pin */ 
gsap.to('.ex7 .box', {
    scale: 2,
    scrollTrigger: {
        trigger: '.ex7 .box',
        start: 'top 60%',
        // end: 'bottom 30%',
        end: '+=800px',
        pin: true,
        //markers: true,
    }
})

/* 08. 연습 */ 
// start: top 60%, end: bottom 30%
// onEnterBack => reverse
// 크기 2배, 시계방향 회전, background: orange
gsap.to('.ex8 .box', {
    scale: 2, rotate: -360, background: 'orange',
    scrollTrigger: {
        trigger: '.ex8 .box',
        start: 'top 60%',
        end: 'botom 30%',
        togleActions: 'play none reverse noe',
        //markers: true,
        }
})


/* 09. from() */
gsap.from('.ex9 .box', {
    x:1000, //이동
    background:'orange',//배경
    autoAlpha: 0.2,//투명
    duration: 5,
    scrollTrigger: {
      trigger: '.ex9 .box',
      start: 'top 60%',
      //markers: true
    }
  })

/* 10. timeline() */
//gsap.timeline({prop: val})
const timelineElm = gsap.timeline({
    scrollTrigger: {
        trigger: '.ex10',
        start: '20% bottom',
        end: '+=800 top',
        scrub: 2,
        // pin: true,
        //markers: true,
    }
})

//체이닝 => 메소드 순차적 진행

timelineElm
    .to('.ex10 .box', {x:1000}) //
    .to('.ex10 .box', {background: 'orange'})
    .to('.ex10 .box', {rotate: 360})
//   

/* 11. create({}) => 스크롤트리거 객체로서 생성 */
const tlElm = gsap.timeline();

ScrollTrigger.create({
    animation: tlElm,
    trigger: '.ex11 .box',
    start: 'top 60%',
    markers: true,
})

tlElm
    .to('.ex11 .box', {x:1000, duration: 2})
    .to('.ex11 .box', {rotate: 360, duration: 1})
    .to('.ex11 .box', {width: 300, duration: 3})
    .to('.ex11 .box', {borderRadius: 50})

//

/* 12. 연습 */
// create 메소드
// 1. 왼쪽 => 오른쪽 1000
// 2. 배경색
// 3. 원형

const tlElm2 = gsap.timeline()

ScrollTrigger.create({
    animation: tlElm2,
    trigger: '.ex12',
    start: 'top top',
    bottom: '+=800',
    markers: true,
})
tlElm2
    .to('.ex12 .box', {x: 1000,y: 400})
    .to('.ex12 .box', {background: 'yellow'})
    .to('.ex12 .box', {borderRadius:500})