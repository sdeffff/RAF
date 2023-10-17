//loader

const loader = document.querySelector(".loader"),
loadTxt = document.querySelector(".loader-txt");

window.onload = () => {
    loader.style.height = "0px";
    loadTxt.classList.add("active");
}

//----------------------------------------------

//main-txt animation-------------------------------
function rotate() {
    const show = document.querySelector(".mask span[data-show]");
    const next = show.nextElementSibling || document.querySelector(".mask span:first-child");
    const up = document.querySelector(".mask span[data-up]");
 
    if (up) {
        up.removeAttribute("data-up");
    }

    show.removeAttribute("data-show");
    show.setAttribute("data-up", "")

    next.setAttribute("data-show", "");
}

setInterval(rotate, 2000);

//----------------------------------------------
//map show function
const mapBox = document.querySelector(".map-box"),
mapBtn = document.querySelector(".map-btn");


mapBtn.addEventListener("click", () => {
    overflow.classList.add("active");
    mapBox.classList.add("active");
})
//----------------------------------------------

//adress-schedule -------------------------------

const adressBtn = document.getElementById("adress"),
adressBox = document.querySelector(".adress-schedule");


adressBtn.addEventListener("click", () => {
    adressBox.classList.add("active");
    overflow.classList.add("active");
})
//----------------------------------------------

//meal section----------------------------------
const mealBtnFirst = document.getElementById("mFirst"),
mealBtnSecond = document.getElementById("mSecond");

mealBtnFirst.addEventListener("click", ()=> {
    mealBtnFirst.classList.add("active")
    mealBtnSecond.classList.remove("active");
})


mealBtnSecond.addEventListener("click", ()=> {
    mealBtnSecond.classList.add("active")
    mealBtnFirst.classList.remove("active");
})

// meals list

const mealMoreBtn = document.querySelector(".meals-more"),
mealLess = document.getElementById("btnLess"),
mealList = document.querySelector(".meals-list");

mealMoreBtn.addEventListener("click", () => {
    mealList.classList.add("active");
    mealLess.style.display = "flex";
    mealMoreBtn.style.display = "none";
});

mealLess.addEventListener("click", () => {
    mealList.classList.remove("active");
    mealMoreBtn.style.display = "flex";
    mealLess.style.display = "none";
});


//------------------------------------------------
//delivery number copying 
const number = document.getElementById("number");

number.addEventListener("click", () => {
    navigator.clipboard.writeText(number.innerText);

    number.style.color = "#fa7f35";
})

function funcOff() {
    number.style.color = "#000";
}

//-----------------------------------------------

// go-to-top----------------------------------


const stripe = document.querySelectorAll(".stripe"),
goToTopBtn = document.querySelector(".go-to-top-btn"),
goToTopMenu = document.querySelector(".go-to-top-menu");

goToTopBtn.addEventListener("click", () => {
    goToTopMenu.classList.toggle("active");

    [...stripe].forEach(stripe => {
        stripe.classList.toggle("active");
    });
});

goToTopMenu.addEventListener("click", () => {
    goToTopMenu.classList.remove("active");
});

window.addEventListener("scroll", () => {
    window.scrollY > 750 ? goToTopBtn.classList.add("active") : goToTopBtn.classList.remove("active");
})
//----------------------------------------------

//e-mail copying -----------------------------
const autor = document.querySelector(".autor");

autor.addEventListener("click", () => {
    const autorTxt = document.getElementById("autorTxt");
    navigator.clipboard.writeText(autorTxt.innerText);

    const copyTxt = document.querySelector(".tooltip");
    copyTxt.innerHTML = "Скопійовано!"
});

// делаем текст как прежде при убирании мышки
function funcOut() {
    const copyTxt = document.querySelector(".tooltip");
    copyTxt.innerHTML = "Скопіювати"
}

//----------------------------------------------

//gallery section---------------------------------------------------------
//gallery imgs
const galImgs = document.querySelectorAll(".gallery-img"),
overflow = document.querySelector(".overflow"),
imgs = [...galImgs];

//gallery imgs active
const galActImgs = document.querySelectorAll(".gallery-active-img"),
actImgs = [...galActImgs];

//about the company 
const companyBtn = document.getElementById("company"),
companyTxt = document.querySelector(".about-the-company");

companyBtn.addEventListener("click", () => {
    companyTxt.classList.add("active");
    
    overflow.classList.add("active");
});
//functions
overflow.addEventListener("click", () => {
    actImgs[0].classList.remove("active");
    actImgs[1].classList.remove("active");
    actImgs[2].classList.remove("active");
    actImgs[3].classList.remove("active");
    actImgs[4].classList.remove("active");
    actImgs[5].classList.remove("active");
    actImgs[6].classList.remove("active");
    overflow.classList.remove("active");
    mapBox.classList.remove("active");
    adressBox.classList.remove("active");
    companyTxt.classList.remove("active");
})

imgs[0].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[0].classList.add("active");
})

imgs[1].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[1].classList.add("active");
})

imgs[2].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[2].classList.add("active");
})

imgs[3].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[3].classList.add("active");
})

imgs[4].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[4].classList.add("active");
})

imgs[5].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[5].classList.add("active");
})

imgs[6].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[6].classList.add("active");
})

imgs[7].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[7].classList.add("active");
})

imgs[8].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[8].classList.add("active");
})

imgs[9].addEventListener("click", () => {
    overflow.classList.add("active");
    actImgs[9].classList.add("active");
})
//gallery section---------------------------------------------------------

// 1. Animate on scroll -- done
// 2. Lazy loading -- done
// 3. make really great adaptation  -- 
// 4. find out how to share this website with other peoples -- 
// 6. make locomitive animation on text in new section, delivery and maybe some more --   
// 9. custom cursor -- done
// 10. pre-loader -- done
// 11. go-to-top-btn -- 50% (create the menu -- done) -- done
// 12. create gallery -- done
// filter in meals section -- 
// re-create menu (big words, full-screen, with animations and so on) -- done
// maybe swap delivery and reviews sections idk 
// re-create loader (in watch later video); -- done
// adresses and schedule pop-up -- done
// create accept cookies button -- 