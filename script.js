// script.js

// Funkcja obsługująca kliknięcia
function selectOption(option) {
    // Sprawdź która opcja została wybrana
    // Poprawiono warunek, aby sprawdzał ID logiczne ('yes'), a nie tekst przycisku
    if (option === 'yes') {
        // Efekt tęczy
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Ukryj pytanie
            displayCatHeart(); // Pokaż kota z sercem
        });
    } else if (option === 'no') {
        // Zmień tekst przycisku "Nie"
        document.getElementById('no-button').innerText = 'Napewno?'; 
        
        // Powiększ przycisk "Tak"
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5; // Zmniejszyłem mnożnik z 2 na 1.5, żeby nie rosło zbyt gwałtownie
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Błąd opcji!');
    }
}

// Funkcja migania kolorami (Rainbow)
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); 
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD'; // Reset do różowego tła zamiast białego
        if (callback) {
            callback();
        }
    }, 2000);
}

// Funkcja wyświetlająca początkowego kota
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Upewnij się, że masz ten plik w folderze!
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Funkcja wyświetlająca kota z sercem (po kliknięciu TAK)
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; // Wyczyść kontener
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Upewnij się, że masz ten plik w folderze!
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none'; // Ukryj przyciski
    };
}

// Uruchomienie na starcie
displayCat();