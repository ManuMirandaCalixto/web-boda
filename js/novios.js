document.addEventListener("DOMContentLoaded", function () {
    // Datos de los novios
    const noviosData = [
        {
            imgSrc: "img/nosotros/novio.jpg",
            name: "Manuel Miranda Calixto",
            description: "Manu es mi lugar seguro, la persona que pone calma y orden a mi vida. Me encanta cómo se emociona al hablar de mates, que combine sus corbatas con mis vestidos y que le haga perrerías a la Pepi. No he podido elegir mejor compañero de vida, tan diferentes pero con algo que nos une, un sentido del humor absurdo que echamos de menos cada vez que nos estamos juntos.",
            signature: "Mayka",
            align: "right"
        },
        {
            imgSrc: "img/nosotros/novia.jpg",
            name: "Mayka Souto Villegas",
            description: "Tiene por costumbre inventarse canciones y bailar cuando se encuentra feliz, y de alguna forma u otra siempre consigue que se me pegue algo de esa alegría que tiene. Es verdad que también es bastante cabezota, pero siempre transmite entusiasmo y felicidad allá por donde pasa. En definitiva la quiero muchísimo, y no puedo estar más contento de compartir la vida con ella.",
            signature: "Manu",
            align: "left"
        },
        {
            imgSrc: "img/nosotros/pepi.jpg",
            name: "La Pepi",
            description: "Soy Pepi. Mis papás se van a casar, y aunque no puedo ir a la boda soy parte de la familia y por eso tengo un espacio especial.",
            signature: "Pepi",
            align: "right"
        }
    ];

    // Contenedor novios
    const noviosContainer = document.getElementById('novios-items');

    // Generar los paneles
    noviosData.forEach((struct) => {
        const descriptionItem = `
        <div class="col-md-6 p-0 text-center text-md-${struct.align}">
            <div class="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                <h3 class="titulo-sobre_nosotros mb-3">${struct.name}</h3>
                <p class="descripcion-sobre_nosotros">${struct.description}</p>
                <h3 class="font-secondary-firma font-weight-normal mb-3"><i class="fa text-primary pr-3"></i>${struct.signature}</h3>
            </div>
        </div>
        `;

        const imageItem = `
        <div class="col-md-6 p-0" style="min-height: 400px;">
            <img class="position-absolute w-100 h-100" src=${struct.imgSrc} style="object-fit: cover;" height="500" width="600">
        </div>
        `;

        const preItem = `
        <div class="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
        `;

        const postItem = `</div>`;

        if (struct.align == "left") {
            noviosContainer.innerHTML += preItem + imageItem + descriptionItem + postItem;
        }
        else {
            noviosContainer.innerHTML += preItem + descriptionItem + imageItem + postItem;
        }

    })
});


/*
<div class="position-relative">
    FIXME Redes Sociales Manu
    <a class="btn btn-outline-primary btn-square mr-1" href="#"><i class="fab fa-twitter"></i></a>
    <a class="btn btn-outline-primary btn-square mr-1" href="#"><i class="fab fa-facebook-f"></i></a>
    <a class="btn btn-outline-primary btn-square mr-1" href="#"><i class="fab fa-linkedin-in"></i></a>
    <a class="btn btn-outline-primary btn-square" href="#"><i class="fab fa-instagram"></i></a>
</div>
*/