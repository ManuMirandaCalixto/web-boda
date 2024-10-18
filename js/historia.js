document.addEventListener("DOMContentLoaded", function () {
    // Datos de la historia
    const historiaData = [
        {
            imgSrc: "img/historia/historia1.jpg",
            title: "Primera cita oficial",
            date: "Diciembre de 2017",
            description: "Una tarde de diciembre de 2017 quedó inmortalizada nuestra primera foto como pareja",
            align: "left"
        },
        {
            imgSrc: "img/historia/historia2.jpg",
            title: "Año 2",
            date: "Fecha año 2",
            description: "Descripción año 2",
            align: "right"
        },
        {
            imgSrc: "img/historia/historia3.jpg",
            title: "Año 3",
            date: "Fecha año 3",
            description: "Descripción año 3",
            align: "left"
        },
        {
            imgSrc: "img/historia/historia2.jpg",
            title: "Año 4",
            date: "Fecha año 4",
            description: "Descripción año 4",
            align: "right"
        },
        {
            imgSrc: "img/historia/historia3.jpg",
            title: "Año 5",
            date: "Fecha año 5",
            description: "Descripción año 5",
            align: "left"
        },
        {
            imgSrc: "img/historia/historia2.jpg",
            title: "Año 6",
            date: "Fecha año 6",
            description: "Descripción año 6",
            align: "right"
        }
    ]

    const historiaContainer = document.getElementById('historia-items');

    historiaData.forEach((struct) => {
        const descriptionItem = `
        <div class="col-md-6 text-center text-md-${struct.align}">
            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-4 m${struct.align === "left" ? "l" : "r"}-md-3">
                <h4 class="titulo-timeline mb-2">${struct.title}</h4>
                <p class="text-uppercase mb-2">${struct.date}</p>
                <p class="m-0">${struct.description}</p>
            </div>
        </div>
        `;

        const imageItem = `
        <div class="col-md-6 text-center text-md-${struct.align === "left" ? "right" : "left"}">
            <img class="img-fluid m${struct.align === "left" ? 'r' : 'l'}-md-3" src=${struct.imgSrc} alt="", heigth="300" width="300">
        </div>
        `;

        const preItem = `<div class="row">`;

        const postItem = `</div>`;

        if (struct.align == "left") {
            historiaContainer.innerHTML += preItem + imageItem + descriptionItem + postItem;
        } else {
            historiaContainer.innerHTML += preItem + descriptionItem + imageItem + postItem;
        }
    })
});