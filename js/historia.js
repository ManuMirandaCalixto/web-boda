document.addEventListener("DOMContentLoaded", function () {
    // Datos de la historia
    const historiaData = [
        {
            imgSrc: "img/historia/historia1.jpg",
            title: "Primera cita oficial",
            date: "Noviembre de 2017",
            description: "Después de ese primer beso en el parque y sin saber muy bien cómo iba a salir todo decidimos empezar nuestra aventura juntos que no ha hecho nada más que empezar.",
            align: "left"
        },
        {
            imgSrc: "img/historia/historia2.jpg",
            title: "Alcázar",
            date: "Febrero de 2018",
            description: "Se podría decir que es nuestro lugar favorito... Hemos perdido la cuenta de las veces que hemos ido juntos y las que quedan por ir.",
            align: "right"
        },
        {
            imgSrc: "img/historia/historia3.jpg",
            title: "Granada",
            date: "Abril de 2018",
            description: "Nuestro primer viaje juntos. Siempre que lo recordamos consigue sacarnos una sonrisa y un bonito recuerdo.",
            align: "left"
        },
        {
            imgSrc: "img/historia/historia4.jpg",
            title: "Tenerife",
            date: "Septiembre de 2019",
            description: "Nuestro primer viaje en avión, lleno de nervios, emoción y  un poco de miedo a volar (por parte de Manu). La próxima vez será rumbo a nuestra luna de miel en Vietnam y Camboya.",
            align: "right"
        },
        {
            imgSrc: "img/historia/historia5.jpg",
            title: "Pedida de matrimonio",
            date: "Noviembre de 2022",
            description: "Una encerrona con final feliz. Algo que Manu tenía en mente desde mucho tiempo, pensado al milímetro, pero sin contar que soy muy cabezota y que no quería ir por el camino de Niebla donde todo estaba previsto. Solo puedo decir... \"jeje regalo\", y de lo segura que estoy de haberte dado ese \"Sí\" aquel 14 de noviembre.",
            align: "left"
        },
        {
            imgSrc: "img/historia/historia6.jpg",
            title: "Pepi se une a la familia",
            date: "Enero de 2023",
            description: "\"Yo soy la Pepi\". Ya lo dije una vez en sueños, y es que esa bolita de amor estaba para nosotros. Ha gastado más de una vida ya, pero las que le quedan las va a pasar con nosotros.",
            align: "right"
        },
        {
            imgSrc: "img/historia/historia7.jpg",
            title: "Foto Preboda",
            date: "AÑADIR FECHA",
            description: "AÑADIR DESCRIPCIÓN",
            align: "left"
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