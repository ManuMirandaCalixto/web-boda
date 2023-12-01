let data;

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const resultList = document.getElementById('resultList');

    // Oculta la lista de resultados al cargar la página
    resultList.style.display = 'none';

    // Realizar una solicitud HTTP para obtener el archivo JSON
    fetch('json/database.json')
        .then(response => response.json())
        .then(jsonData => {
            // Almacena los datos en la variable global
            data = jsonData;
        });

    // Agrega un event listener al campo de búsqueda
    searchInput.addEventListener('input', function () {
        searchDatabase();
    });
});

function searchDatabase() {
    const searchInput = document.getElementById('searchInput');
    const resultList = document.getElementById('resultList');

    // Verifica si el campo de búsqueda está vacío
    if (searchInput.value.trim() === '') {
        // Si está vacío, oculta la lista de resultados y sale de la función
        resultList.style.display = 'none';
        return;
    }

    // Limpiar resultados anteriores
    resultList.innerHTML = '';

    // Verifica si hay datos antes de filtrar
    if (data) {
        // Filtrar la base de datos según la búsqueda
        const results = data.filter(item => item.nombre.toLowerCase().includes(searchInput.value.toLowerCase()));

        // Mostrar resultados filtrados
        results.forEach(item => {
            if (item.Confirmacion == 0)
            {
                const listItem = createListItem(item);
                resultList.appendChild(listItem);
            }
            
        });

        // Mostrar la lista de resultados solo si hay resultados
        resultList.style.display = results.length > 0 ? 'block' : 'none';
    }
}

function createListItem(item) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Agrega un event listener al checkbox para actualizar el placeholder
    checkbox.addEventListener('change', function () {
        updateValue(item.nombre, checkbox.checked, item.id);
    });

    listItem.appendChild(checkbox);

    const label = document.createElement('label');
    label.textContent = item.nombre;
    listItem.appendChild(label);

    return listItem;
}

function updateValue(value, isChecked, id) {
    const searchInput = document.getElementById('searchInput');
    const searchID = document.getElementById('name_id');
    // Verifica si el checkbox está marcado antes de actualizar el valor de la caja de búsqueda
    if (isChecked) {
        searchInput.value = value;
        searchID.value = id;
    }
}
