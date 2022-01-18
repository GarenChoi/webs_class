//결과보기 버튼을 클릭하면 경고창을 띄워주세요
// document.querySelector(".result").addEventListener("click", function(){});
document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
        document.querySelectorAll(".result > div").forEach(function(el){
            el.classList.toggle("selected")
        });
    });
});

// document.querySelector("#sample2 .btn2").addEventListener("click", function(){
//     document.querySelectorAll("#sample2 .view > div").forEach(function(el){
//         el.classList.toggle("selected");
//     });
// });
