window.addEventListener("load", () => {
    autoSlide();
    addDotClickEvent(); // Thêm sự kiện click cho dots
});

function autoSlide() {
    const dots = document.querySelectorAll('.carousel .dots li');
    setInterval(() => {
        const activeIndex = getItemActiveIndex();
        const nextIndex = (activeIndex + 1) % dots.length;

        dots[nextIndex].classList.add("active");
        dots[activeIndex].classList.remove("active");

        slide(nextIndex);
    }, 5000); // slide speed = 5s
}

function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const dots = document.querySelectorAll('.carousel .dots li');

    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
        toIndex = 0;
    }

    const newItemActive = itemsArray[toIndex];

    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
        newItemActive.classList.add("carousel_item__next");
        itemActive.classList.add("carousel_item__next");
    }, 20);

    // remove all transition class and switch active class
    newItemActive.addEventListener("transitionend", () => {
        itemActive.className = "carousel_item";
        newItemActive.className = "carousel_item carousel_item__active";
    }, {
        once: true
    });
}

function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
}

function addDotClickEvent() {
    const dots = document.querySelectorAll('.carousel .dots li');
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            const clickedIndex = parseInt(dot.getAttribute("data-index"));
            slide(clickedIndex);
            updateDots(clickedIndex);
        });
    });
}


function updateDots(activeIndex) {
    const dots = document.querySelectorAll('.carousel .dots li');
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}