// Функция для скрытия/показа заголовка и навигации при прокрутке
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    if (window.innerWidth <= 600){
    let header = document.querySelector(".Header");
    let nav = document.querySelector("nav");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Скроллим вниз — прячем заголовок и навигацию
        header.style.top = "-10000px";
        nav.style.top = "-70px";
    } else {
        // Скроллим вверх — показываем заголовок и навигацию
        header.style.top = "0";
        nav.style.top = "100px";
    }
    lastScrollTop = currentScroll;
    }
});
document.addEventListener("DOMContentLoaded", function() {
// Отображение кнопки при прокрутке
window.onscroll = function() {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; // Показываем кнопку
    } else {
        button.style.display = "none"; // Скрываем кнопку
    }
};

// Прокрутка вверх при клике на кнопку
document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Плавная прокрутка вверх
};
});
//-------------------------------------------------------------------------------
// 1

// Изменение текста заголовка (если он есть) или добавление нового заголовка H1
document.querySelector("h1").textContent = "Добро пожаловать на наш сайт!";

// Изменение цвета текста заголовка с id="Front" на красный
const h4 = document.querySelector('h4');
h4.style.color = 'red';

// Замена текста первого параграфа
const firstParagraph = document.querySelector("main .main p");
if (firstParagraph) {
    firstParagraph.textContent = "Это новый текст параграфа.";
}

// Скрытие всех видео
const videos = document.querySelectorAll('video'); 
videos.forEach(video => {
    video.style.display = 'none'; 
});

//-------------------------------------------------------------------------------
// 12
function showMessage(message) {
    console.log(message);
}
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);  
    
    if (element) {  

        if (element.style.display === "none") {
            element.style.display = "block"; 
        } else {
            element.style.display = "none";  
        }
    }
}


function updateH1FromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector("h1");
    if (h1) {
        if (utmTerm) {
            h1.textContent = utmTerm;  
        } else {
            h1.textContent = "Добро пожаловать на наш сайт!";  
        }
    }
}



function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

//-------------------------------------------------------------------------------

showMessage("Скрипт загружен!");

logCurrentTime();

document.addEventListener("DOMContentLoaded", function () {
    resetBackgroundColor(); 
    changeBackgroundColor("lightblue");  
  

    toggleVisibility(".content");

    updateH1FromURL();
});

//-------------------------------------------------------------------------------
// 13

const h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
    alert("Вы кликнули на заголовок - так держать!"); 
});
document.addEventListener("DOMContentLoaded", () => {
    const studentPhoto = document.querySelector(".main img");

    if (studentPhoto) {
        studentPhoto.addEventListener("mouseover", () => {
            studentPhoto.style.transform = "scale(1.1)";
            studentPhoto.style.transition = "transform 0.3s";
        });

        studentPhoto.addEventListener("mouseout", () => {
            studentPhoto.style.transform = "scale(1)";
        });

        studentPhoto.addEventListener("click", () => {
            const teacherPhotoURL = "Love.jpg";
            studentPhoto.src = teacherPhotoURL;
            studentPhoto.style.transform = "scale(0.8)";  // Уменьшаем на 20%
            studentPhoto.style.transition = "transform 0.3s";  // Плавный переход
        });

        studentPhoto.addEventListener("dblclick", () => {
            alert("Не налегай, у меня не так много любимых преподавателей");
        });
    }
});

