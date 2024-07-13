// Gán biến
// let a = 3
// a = 4
// const n = 234

// khai báo biến 
// var, let, const
// const: không thể gán lại giá trị
// let: có thể gán lại giá trị
// var: không nên dùng

// Phương build-in JS
// console.log(a)

let scrollToTopBtn = document.getElementById("scroll-btn")
console.dir(document.body)
scrollToTopBtn.addEventListener("click",function(){
    document.documentElement.scrollTop = 0
})
console.dir(window)
window.onscroll = function(){
    console.log("Kéo xuống được: ",document.documentElement.scrollTop)
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollToTopBtn.style.display = "block"
    }else{
        scrollToTopBtn.style.display = "none"
    }
}