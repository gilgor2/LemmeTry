
// const scrollAnime = ()=>{
//     const sa1 = document.querySelectorAll(".sa1");
//     const sa2 = document.querySelectorAll(".sa2");
//     const sa3 = document.querySelectorAll(".sa3");
//     const uiBox = document.querySelector(".uiBox").style;
//     const back = document.querySelector(".back").style;
//     const gif = document.querySelector(".gif");
//     // 현재 스크롤 위치
//     let currentY=document.querySelector('html').scrollTop

//     console.log(currentY)
//     uiBox.transform = `translateY(${currentY - window.innerHeight}px)`;
//     back.transform = `translateY(${currentY}px)`;
//     if(0<=currentY && currentY<window.innerHeight*2){
//         //첫 화면 요소들에 애니메이션 활성화
//         for (const dom of sa1){
//             dom.classList.add("go")
//         }
//         for (const dom of sa2){
//             dom.classList.remove("go")
//         }
//         gif.classList.remove("ani1")
//     }else if(currentY<=window.innerHeight*5 ){
//         //두번쨰 화면 요소 ""
//         for (const dom of sa1){
//             dom.classList.remove("go")
//         }
//         for (const dom of sa2){
//             dom.classList.add("go")
//         }
//         for (const dom of sa3){
//             dom.classList.remove("go")
//         }
//         gif.classList.add("ani1")
//         gif.classList.remove("ani2")
//     } else{
//         //세번쨰 애니메이션 요소 활성화
//         for (const dom of sa2){
//             dom.classList.remove("go")
//         }
//         for (const dom of sa3){
//             dom.classList.add("go")
//         }
//         gif.classList.remove(".ani1")
//         gif.classList.add("ani2")
        
//     }   
// };
const scrollAnime = () => {
	const sa1 = document.querySelector('.sa1');
	const sa2 = document.querySelector('.sa2');
	const sa3 = document.querySelector('.sa3');
	const uiBox = document.querySelector('.uiBox').style;
	const back = document.querySelector('.back').style;
	const gif = document.querySelector('.gif');
    const title = document.querySelector(".plants").style

	// 현재 스크롤 위치
	let currentY = document.querySelector('html').scrollTop;

    uiBox.transform = `translateY(${currentY }px)`;
    back.transform = `translateY(${currentY}px)`;
    title.transform = `translateY(${-currentY}px)`
    title.opacity = `${0.6 - currentY/400}`

    if(0<=currentY && currentY<window.innerHeight){
        sa1.classList.remove('on');
        gif.classList.add("bg1")
        gif.classList.remove("bg2")
    }else if( currentY <= window.innerHeight*3){

        sa1.classList.add("on");
        sa2.classList.remove("on")

        gif.classList.add("bg2")
        gif.classList.remove("bg1")
        gif.classList.remove("bg3")

    }else if(currentY <= window.innerHeight*5){
        sa2.classList.add("on");
        sa3.classList.remove("on")
        sa1.classList.remove("on")

        gif.classList.add("bg3")
        gif.classList.remove("bg2")
        gif.classList.remove("bg4")
    }else{
        sa3.classList.add("on");
        sa2.classList.remove("on")

        gif.classList.add("bg4")
        gif.classList.remove("bg3")
    }
};

window.addEventListener('load', scrollAnime);
window.addEventListener('scroll', scrollAnime);