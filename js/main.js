const burgerMenu = document.getElementById('burger-menu');

const overlay = document.getElementById('nav-mobile');

burgerMenu.addEventListener('click', function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

const headerButton = document.querySelector(".header__button");
const modalWindow = document.querySelector(".dialog");
const closeButton = document.querySelector(".dialog__button-close");
const body = document.querySelector("body");

headerButton.addEventListener("click", () => {
    modalWindow.showModal();
    body.classList.add("scroll-lock");
});

closeButton.addEventListener("click", () => {
    modalWindow.close();
    body.classList.remove("scroll-lock");
});



document.querySelectorAll(".nav__link").forEach(item => {
    item.addEventListener("click", event => {
        // Найти текущую активную ссылку и удалить класс 'nav__link--active'
        const currentActive = document.querySelector(".nav__link--active");
        if (currentActive) {
            currentActive.classList.remove("nav__link--active");
        }
        // Добавить класс 'nav__link--active' к ссылке, по которой был совершен клик
        event.target.classList.add("nav__link--active");
    });
});

// смена количества уведомлений
document.documentElement.style.setProperty('--favorite-notification-number', '"5"');

const dialog = document.querySelector("dialog")
// tooltip
tippy('.dialog__person-info', {
    content: 'Укажите количество детей, которые будут с вами, возраст которых от 6 до 18 лет. Дети до 6 лет размещаются бесплатно.',
    appendTo: dialog,
    maxWidth: 256,
    placement: "bottom",
});

