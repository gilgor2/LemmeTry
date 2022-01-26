//로딩 페이지

const delLoad = () => {
	setTimeout(() => {
		document.querySelector('.loading').style.display = 'none';
		document.querySelector('.page').style.display = 'block';
	}, 3000);
};

//스크롤 애니메이션
// const onScroll = () => {
// 	const scrollAni = document.querySelectorAll('.sa');
// 	for (const dom of scrollAni) {
// 		console.log(dom.getBoundingClientRect().top);
// 		console.log(
// 			'window',
// 			window.innerHeight,
// 			'box',
// 			dom.getBoundingClientRect().top
// 		);
// 		if (window.innerHeight > dom.getBoundingClientRect().top + 200) {
// 			dom.classList.add('aniDone');
// 		} else if(window.innerHeight < dom.getBoundingClientRect().top -50){
// 			dom.classList.remove('aniDone');
// 		}
// 	}
// };

const onScroll = ()=>{
	const boxes = document.querySelector(".boxes");
	const page = document.querySelector(".page");
	const topTitle = document.querySelector(".topTitle");

	let currentY=document.querySelector('html').scrollTop
	console.log(currentY)
	//스크롤 빠르게
	topTitle.style.transform = `translateY(-${currentY}px)`
	//스크롤 액션
	if( currentY >= 0 && currentY<=200){
		boxes.firstElementChild.classList.remove("boxOn")
		// page.style.backgroundColor = "white";
		// page.style.color = "black";

	}else if(200<currentY && currentY<=1200){
		boxes.firstElementChild.classList.add("boxOn")
		boxes.lastElementChild.classList.remove("boxOn")
		
		page.style.backgroundColor = "white";
		page.style.color = "black";

	}else{
		boxes.firstElementChild.classList.remove("boxOn")
		boxes.lastElementChild.classList.add("boxOn")
		
		page.style.backgroundColor = "black";
		page.style.color = "white";
	}

	
};
window.onload = delLoad;
window.addEventListener('load', onScroll);
window.addEventListener('scroll', onScroll);
// document.addEventListener('DOMContentLoaded',()=>{const scrollAni = document.querySelectorAll('.sa');})
