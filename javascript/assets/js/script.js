//결과보기 버튼을 클릭하면 경고창을 띄워주세요
// document.querySelector(".result").addEventListener("click", function(){});
document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
       el.classList.toggle("active")
    });
});



