// gnb 숨기기
const gnbEl = document.querySelector(".gnb");
const gnbBtnEl = document.querySelector(".gnbBtn")

gnbBtnEl.addEventListener("click", function(){
    gnbBtnEl.classList.toggle("on");
    gnbEl.classList.toggle("on");
});

// 숨어있던 섹션 제목 스크롤 시 보이게하기
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in");
        } else {
            entry.target.classList.remove("fade-in");
        }
    });
},
    { threshold: 0.1 }
);

const targetElements = document.querySelectorAll(".fadeWrap");
targetElements.forEach((element) => {
    observer.observe(element);
});


