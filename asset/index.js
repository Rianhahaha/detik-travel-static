// Initialize the thumbnail slider
const thumbnailSwiper = new Swiper('.thumbnail-slider', {
    spaceBetween: 20,
    slidesPerView: 1, 

    loop: true,
});

// Initialize the main slider with a fading effect and link it to the thumbnail slider
const mainSwiper = new Swiper('.main-slider', {
    spaceBetween: 10,
    effect: 'fade', // Apply fading effect
    fadeEffect: {
        crossFade: true, // Smooth transition
    },
    thumbs: {
        swiper: thumbnailSwiper,
    },
    loop: true, 
});

function displaySelectedImage(event, elementId) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;
    const iconElement = document.querySelector('.input-icon');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            selectedImage.src = e.target.result;
            // Change the icon here
            iconElement.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>';
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-custom a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});