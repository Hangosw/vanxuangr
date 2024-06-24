var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var pagination = document.getElementById('pagination');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

// Initialize pagination
for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement('span');
    dot.setAttribute('data-index', i);
    pagination.appendChild(dot);
}

var paginationDots = document.querySelectorAll('#pagination span');

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[index].style.display = 'block';

    // Update pagination
    for (var i = 0; i < paginationDots.length; i++) {
        paginationDots[i].classList.remove('active');
    }
    paginationDots[index].classList.add('active');
}

function prevSlide() {
    showSlide(currentSlide - 1);
    currentSlide--;
}

function nextSlide() {
    showSlide(currentSlide + 1);
    currentSlide++;
}

// Event listeners for buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Event listener for pagination dots
pagination.addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN') {
        var index = parseInt(event.target.getAttribute('data-index'));
        showSlide(index);
        currentSlide = index;
    }
});

// Show initial slide
showSlide(currentSlide);