document.addEventListener("DOMContentLoaded", function () {
    // Datos de la galería
    const galeriaData = [
        "img/historia/historia1.jpg",
        "img/historia/historia2.jpg",
        "img/historia/historia3.jpg",
        "img/galeria/galeria3.jpg"
    ];

    const galeriaContainer = document.getElementById('galeria-items');

    // Iniciar la estructura del carrusel
    let carouselHTML = `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">`;

    // Crear indicadores (puntos)
    let indicatorsHTML = '<ol class="carousel-indicators">';
    for (let i = 0; i < galeriaData.length; i++) {
        indicatorsHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" ${i === 0 ? 'class="active"' : ''}></li>`;
    }
    indicatorsHTML += '</ol>';
    carouselHTML += indicatorsHTML;

    // Crear las imágenes del carrusel
    carouselHTML += `<div class="carousel-inner">`;
    galeriaData.forEach((src, index) => {
        carouselHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${src}" class="d-block w-100" alt="Img${index}">
            </div>
        `;
    });
    carouselHTML += `</div>`; // Cierra carousel-inner

    // Crear los controles (botones de anterior y siguiente)
    const controlsHTML = `
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Siguiente</span>
        </a>
    `;

    // Finalizar la estructura del carrusel
    carouselHTML += controlsHTML + `</div>`; // Cierra el contenedor principal del carrusel

    // Insertar el HTML generado en el contenedor
    galeriaContainer.innerHTML = carouselHTML;
});
