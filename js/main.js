const navigation = document.querySelector('.menu-list')
const indicator = document.querySelector('#indicator')

navigation.addEventListener('mouseover', updateIndicator);
navigation.addEventListener('mouseleave', resetIndicator);

function updateIndicator(event) {
    const menuElememt = (event.target.closest('.menu-item'));
    indicator.style.left = menuElememt.offsetLeft+'px';
    indicator.style.width = menuElememt.offsetWidth+'px';
}
function resetIndicator(event) {
    indicator.style.left = 0;
    indicator.style.width = 0;
}

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 200) {
        document.getElementById('upbtn').style.bottom = '15px';
    } else {
       document.getElementById('upbtn').style.bottom = '-80px';
    }
}
    
document.querySelector('body').insertAdjacentHTML("beforeend",'<div id="upbtn" onclick="smoothJumpUp()"></div>');
let smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 10);
    }
}

const likeBtn = document.querySelector(".like-btn")
likeBtn.addEventListener('click', () => {
    const likeCount = document.querySelector('.count-like')
    likeBtn.classList.toggle('active')
    console.log(likeCount.textContent)
    if (likeBtn.classList.contains('active')) {
        likeCount.innerText = Number(likeCount.textContent) + 1;
    } else {
        likeCount.innerText = Number(likeCount.textContent) - 1;
    }
})
