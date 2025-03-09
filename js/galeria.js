document.addEventListener("DOMContentLoaded", function () {
    const galeriaData = [
        "img/galeria/2017/2017_1.png",

        "img/galeria/2018/2018_1.png",
        "img/galeria/2018/2018_2.png",
        "img/galeria/2018/2018_3.png",
        "img/galeria/2018/2018_4.png",
        "img/galeria/2018/2018_5.png",
        "img/galeria/2018/2018_6.png",
        "img/galeria/2018/2018_7.png",
        "img/galeria/2018/2018_8.png",
        "img/galeria/2018/2018_9.png",
        "img/galeria/2018/2018_10.png",
        "img/galeria/2018/2018_11.png",
        "img/galeria/2018/2018_12.png",

        "img/galeria/2019/2019_1.png",
        "img/galeria/2019/2019_2.png",
        "img/galeria/2019/2019_3.png",
        "img/galeria/2019/2019_4.png",
        "img/galeria/2019/2019_5.png",
        "img/galeria/2019/2019_6.png",
        "img/galeria/2019/2019_7.png",
        "img/galeria/2019/2019_8.png",
        "img/galeria/2019/2019_9.png",
        "img/galeria/2019/2019_10.png",
        "img/galeria/2019/2019_11.png",
        "img/galeria/2019/2019_12.png",

        "img/galeria/2020/2020_1.png",
        "img/galeria/2020/2020_2.png",
        "img/galeria/2020/2020_3.png",
        "img/galeria/2020/2020_4.png",
        "img/galeria/2020/2020_5.png",
        "img/galeria/2020/2020_6.png",

        "img/galeria/2021/2021_1.png",
        "img/galeria/2021/2021_2.png",
        "img/galeria/2021/2021_3.png",
        "img/galeria/2021/2021_4.png",

        "img/galeria/2022/2022_1.png",
        "img/galeria/2022/2022_2.png",
        "img/galeria/2022/2022_3.png",
        "img/galeria/2022/2022_4.png",
        "img/galeria/2022/2022_5.png",
        "img/galeria/2022/2022_6.png",

        "img/galeria/2023/2023_1.png",
        "img/galeria/2023/2023_2.png",
        "img/galeria/2023/2023_3.png",
        "img/galeria/2023/2023_4.png",
        "img/galeria/2023/2023_5.png",
        "img/galeria/2023/2023_6.png",
        "img/galeria/2023/2023_7.png",
        "img/galeria/2023/2023_8.png",

        "img/galeria/2024/2024_1.png",
        "img/galeria/2024/2024_2.png",
        "img/galeria/2024/2024_3.png",
        "img/galeria/2024/2024_4.png",
        "img/galeria/2024/2024_5.png",
        "img/galeria/2024/2024_6.png",
        "img/galeria/2024/2024_7.png",

        "img/galeria/2025/2025_1.png"
    ];

    const galeriaContainer = document.getElementById('galeria-items');

    // Inicia la estructura del carrusel
    let carouselHTML = `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">`;

    // Genera indicadores
    let indicatorsHTML = '<ol class="carousel-indicators">';
    for (let i = 0; i < galeriaData.length; i++) {
        indicatorsHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}" ${i === 0 ? 'class="active"' : ''}></li>`;
    }
    indicatorsHTML += '</ol>';
    carouselHTML += indicatorsHTML;

    // Genera las imágenes del carrusel
    carouselHTML += `<div class="carousel-inner">`;
    galeriaData.forEach((src, index) => {
        carouselHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${src}" class="d-block w-100" alt="Img${index}">
            </div>
        `;
    });
    carouselHTML += `</div>`; // Cierra carousel-inner

    // Cierra la estructura del carrusel sin añadir controles de navegación
    carouselHTML += `</div>`; // Cierra el contenedor principal del carrusel

    // Inserta solo el contenido del carrusel en el contenedor, sin sobrescribir los botones
    galeriaContainer.insertAdjacentHTML('afterbegin', carouselHTML);
});
