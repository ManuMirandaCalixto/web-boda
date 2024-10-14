document.addEventListener("DOMContentLoaded", function () {
    // Datos de las diapositivas
    const carouselData = [
        {
            imgSrc: "img/carousel/carousel1.jpg",
            title: "Manu & Mayka",
            subtitle: "Os invitamos a nuestra boda",
            videoSrc: "https://www.youtube.com/embed/lAIGb1lfpBw"
        },
        {
            imgSrc: "img/carousel/carousel2.jpg",
            title: "Manu & Mayka",
            subtitle: "En efecto, Hablamos de:",
            videoSrc: "https://www.youtube.com/embed/lAIGb1lfpBw"
        },
        {
            imgSrc: "img/carousel/carousel3.jpg",
            title: "Manu & Mayka",
            subtitle: "La boda de MariManu",
            videoSrc: "https://www.youtube.com/embed/lAIGb1lfpBw"
        }
    ];

    // Contenedor del carrusel
    const carouselContainer = document.getElementById('carousel-items');

    // Generar las diapositivas
    carouselData.forEach((slide, index) => {
        const isActive = index === 0 ? 'active' : '';  // La primera diapositiva es la activa

        const slideItem = `
            <div class="carousel-item position-relative ${isActive}" style="height: 100vh; min-height: 400px;">
                <img class="position-absolute w-100 h-100" src="${slide.imgSrc}" style="object-fit: cover;" height="800" width="1366">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style="max-width: 900px;">
                        <h1 class="display-1 font-secondary text-white mt-n3 mb-md-4">${slide.title}</h1>
                        <div class="d-inline-block border-top border-bottom border-light py-3 px-4">
                            <h3 class="text-uppercase font-weight-normal text-white m-0" style="letter-spacing: 2px;">${slide.subtitle}</h3>
                        </div>
                        <button type="button" class="btn-play mx-auto" data-toggle="modal" data-src="${slide.videoSrc}" data-target="#videoModal">
                            <span></span>
                        </button>

                        <div id="countdown-container">
                            <div class="circle" id="days_circle">
                                <span class="countdown-value" id="days_value">0</span>
                                <span class="countdown-label">Días</span>
                            </div>
                            <div class="circle" id="hours_circle">
                                <span class="countdown-value" id="hours_value">0</span>
                                <span class="countdown-label">Horas</span>
                            </div>
                            <div class="circle" id="minutes_circle">
                                <span class="countdown-value" id="minutes_value">0</span>
                                <span class="countdown-label">Minutos</span>
                            </div>
                            <div class="circle" id="seconds_circle">
                                <span class="countdown-value" id="seconds_value">0</span>
                                <span class="countdown-label">Segundos</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;

        // Agregar la diapositiva al carrusel
        carouselContainer.innerHTML += slideItem;
    });


// Aquí puedes programar la lógica del countdown para que solo se ejecute una vez
setupCountdown();

// Lógica para configurar el countdown (ejemplo)
function setupCountdown() {
    const countdownDate = new Date(2025, 9, 11, 12, 0, 0).getTime(); // Fecha de la boda

    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Actualizar elementos del countdown en cada diapositiva
        document.querySelectorAll("#days_value").forEach(el => el.innerHTML = days);
        document.querySelectorAll("#hours_value").forEach(el => el.innerHTML = hours);
        document.querySelectorAll("#minutes_value").forEach(el => el.innerHTML = minutes);
        document.querySelectorAll("#seconds_value").forEach(el => el.innerHTML = seconds);

        // Si el countdown ha terminado
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelectorAll("#days_value").forEach(el => el.innerHTML = "0");
            document.querySelectorAll("#hours_value").forEach(el => el.innerHTML = "0");
            document.querySelectorAll("#minutes_value").forEach(el => el.innerHTML = "0");
            document.querySelectorAll("#seconds_value").forEach(el => el.innerHTML = "0");
        }
    }, 1000);
}
});