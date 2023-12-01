const database = [
    { nombre: 'Manuel', otraInformacion: '...' },
    { nombre: 'Carlos', otraInformacion: '...' },
    // Agrega más elementos según sea necesario
];

function searchDatabase() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultList = document.getElementById('resultList');

    // Limpiar resultados anteriores
    resultList.innerHTML = '';

    // Si la búsqueda está vacía, no mostrar nada
    if (searchInput === '') {
        return;
    }

    // Filtrar la base de datos según la búsqueda
    const results = database.filter(item => item.nombre.toLowerCase().includes(searchInput));

    // Mostrar resultados filtrados
    results.forEach(item => {
        const listItem = createListItem(item);
        resultList.appendChild(listItem);
    });
}

function createListItem(item) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Agrega un event listener al checkbox para actualizar el placeholder
    checkbox.addEventListener('change', function () {
        updatePlaceholder(item.nombre);
    });

    listItem.appendChild(checkbox);

    const label = document.createElement('label');
    label.textContent = item.nombre;
    listItem.appendChild(label);

    return listItem;
}

function updatePlaceholder(value) {
    const searchInput = document.getElementById('searchInput');
    //searchInput.placeholder = `Buscando por: ${value}`;
    searchInput.value = value;
}
