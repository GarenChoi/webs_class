//tabmenu
const tabBtn = document.querySelectorAll(".menu-bar > span");
const tabCont = document.querySelectorAll(".content > .main");

tabBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        tabBtn.forEach(el => {
            el.classList.remove("active");
        })

        btn.classList.add("active");

        tabCont.forEach(div => {
            div.style.display = "none";
        })

        tabCont[index].style.display = "block";
    });
});

//소스 버튼
const modalA = document.querySelector("#modal");
const openBtn = document.querySelector(".source .quiz__source");
const closeBtn = document.querySelector(".title-bar .close");
openBtn.addEventListener("click", () => {
    modalA.classList.add("show");
    modalA.classList.remove("hide");
});
closeBtn.addEventListener("click", () => {
    modalA.classList.add("hide");
});