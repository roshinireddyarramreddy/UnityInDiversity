let section_first_page = document.getElementById("sectionfirstpage");
let hyd_page = document.getElementById("hydPage");
let bgl_page = document.getElementById("bglPage");
let dl_page = document.getElementById("dlPage");
let chn_page = document.getElementById("chennaiPage");
let main_el = document.getElementById("main");
let home_btn1 = document.getElementById("backbtn1");
let home_btn2 = document.getElementById("backbtn2");
let home_btn3 = document.getElementById("backbtn3");
let home_btn4 = document.getElementById("backbtn4");

let first_home_page_hyd = document.getElementById("hyd");
let second_home_page_bgl = document.getElementById("bgl");
let third_home_page_dl = document.getElementById("dl");
let fourth_home_page_cnn = document.getElementById("cnn");

let display_func1 = function() {
    section_first_page.classList.add("hiding");
    hyd_page.classList.remove("hyderabad-page");
}

let display_func2 = function() {
    section_first_page.classList.add("hiding");
    bgl_page.classList.remove("banglore-page");
}

let display_func3 = function() {
    section_first_page.classList.add("hiding");
    dl_page.classList.remove("delhi-page");
}

let display_func4 = function() {
    section_first_page.classList.add("hiding");
    chn_page.classList.remove("chennai-Page");
}

let home_displ1 = function() {
    section_first_page.classList.remove("hiding");
    hyd_page.classList.add("hyderabad-page");
}

let home_displ2 = function() {
    section_first_page.classList.remove("hiding");
    bgl_page.classList.add("banglore-page");
}

let home_displ3 = function() {
    section_first_page.classList.remove("hiding");
    dl_page.classList.add("delhi-page");
}

let home_displ4 = function() {
    section_first_page.classList.remove("hiding");
    chn_page.classList.add("chennai-page");
}

first_home_page_hyd.addEventListener("click", display_func1);
second_home_page_bgl.addEventListener("click", display_func2);
third_home_page_dl.addEventListener("click", display_func3);
fourth_home_page_cnn.addEventListener("click", display_func4);

home_btn1.addEventListener("click", home_displ1);
home_btn2.addEventListener("click", home_displ2);
home_btn3.addEventListener("click", home_displ3);
home_btn4.addEventListener("click", home_displ4);
