document.getElementById('languages-link').addEventListener('click', function(event) {
    event.preventDefault();
    loadData('1.txt', 'languages');
});

document.getElementById('students-link').addEventListener('click', function(event) {
    event.preventDefault();
    loadData('2.txt', 'students');
});

function loadData(file, key) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayData(data[key]);
        })
        .catch(error => {
            console.error('Помилка завантаження:', error);
            document.getElementById('data-display').innerText = 'Не вдалося завантажити дані';
        });
}

function displayData(items) {
    const displayDiv = document.getElementById('data-display');
    displayDiv.innerHTML = '';

    if (items && items.length > 0) {
        const list = document.createElement('ul');
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            list.appendChild(listItem);
        });
        displayDiv.appendChild(list);
    } else {
        displayDiv.textContent = 'Дані не знайдено';
    }
}
