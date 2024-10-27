document.addEventListener("DOMContentLoaded", function () {
    // Datos de la galería
    const galeriaData = [
        "img/galeria/galeria1.png",
        "img/galeria/galeria2.png",
        "img/galeria/galeria3.png",
        "img/galeria/galeria4.png",
        "img/galeria/galeria5.png",
        "img/galeria/galeria6.png",
        "img/galeria/galeria7.png",
        "img/galeria/galeria8.png",
        "img/galeria/galeria9.png",
        "img/galeria/galeria10.png",
        "img/galeria/galeria11.png",
        "img/galeria/galeria12.png",
        "img/galeria/galeria13.png",
        "img/galeria/galeria14.png",
        "img/galeria/galeria15.png",
        "img/galeria/galeria16.png",
        "img/galeria/galeria17.png",
        "img/galeria/galeria18.png",
        "img/galeria/galeria19.png",
        "img/galeria/galeria20.png",
        "img/galeria/galeria21.png",
        "img/galeria/galeria22.png",
        "img/galeria/galeria23.png",
        "img/galeria/galeria24.png",
        "img/galeria/galeria25.png",
        "img/galeria/galeria26.png",
        "img/galeria/galeria27.png",
        "img/galeria/galeria28.png",
        "img/galeria/galeria29.png",
        "img/galeria/galeria30.png",
        "img/galeria/galeria31.png",
        "img/galeria/galeria32.png",
        "img/galeria/galeria33.png",
        "img/galeria/galeria34.png",
        "img/galeria/galeria35.png",
        "img/galeria/galeria36.png",
        "img/galeria/galeria37.png",
        "img/galeria/galeria38.png",
        "img/galeria/galeria39.png",
        "img/galeria/galeria40.png",
        "img/galeria/galeria41.png",
        "img/galeria/galeria42.png",
        "img/galeria/galeria43.png",
        "img/galeria/galeria44.png",
        "img/galeria/galeria45.png",
        "img/galeria/galeria46.png",
        "img/galeria/galeria47.png",
        "img/galeria/galeria48.png",
        "img/galeria/galeria49.png",
        "img/galeria/galeria50.png",
        "img/galeria/galeria51.png",
        "img/galeria/galeria52.png",
        "img/galeria/galeria53.png",
        "img/galeria/galeria54.png",
        "img/galeria/galeria55.png"
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
