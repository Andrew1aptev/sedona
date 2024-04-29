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

