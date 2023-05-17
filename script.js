var patterns = [
    ["hotdog", "sate", "wortel", "jagung", "ayam", "kol"],
    ["ayam", "kol", "hotdog", "daging", "jagung", "wortel"],
    ["sate", "daging", "tomat", "kol", "jagung", "hotdog"],
    ["tomat", "kol", "hotdog", "daging", "ayam", "jagung"],
    ["tomat", "kol", "hotdog", "daging", "sate", "wortel"],
    ["jagung", "kol", "hotdog", "ayam", "hotdog", "wortel"],
];

var salad = [
    "https://ik.imagekit.io/lshkgi0dm/bg/wortel.png?updatedAt=1682339707964",
    "https://ik.imagekit.io/lshkgi0dm/bg/jagung.png?updatedAt=1682339730263",
    "https://ik.imagekit.io/lshkgi0dm/bg/kol.png?updatedAt=1682339755582",
    "https://ik.imagekit.io/lshkgi0dm/bg/tomat.png?updatedAt=1682339781740",
];

var pizza = [
    "https://ik.imagekit.io/lshkgi0dm/bg/sate.png?updatedAt=1682339837845",
    "https://ik.imagekit.io/lshkgi0dm/bg/hotdog.png?updatedAt=1682339816766",
    "https://ik.imagekit.io/lshkgi0dm/bg/ayam.png?updatedAt=1682339859988",
    "https://ik.imagekit.io/lshkgi0dm/bg/daging.png?updatedAt=1682339879224",
];

function handleInputChange() {
    var select = document.getElementById("lastResultInput");
    var selectedValue = select.options[select.selectedIndex].value;
    var predictionButton = document.getElementById("predictionButton");

    if (selectedValue === "") {
        predictionButton.classList.add("disabled");
        predictionButton.setAttribute("disabled", true);
    } else {
        predictionButton.classList.remove("disabled");
        predictionButton.removeAttribute("disabled");
    }
}

function generatePrediction() {
    var lastResult = document.getElementById("lastResultInput").value;

    var prevPatternIndex = -1;
    var patternIndex;

    if (
        lastResult ===
        "https://ik.imagekit.io/lshkgi0dm/bg/hotdog.png?updatedAt=1682339816766"
    ) {
        patternIndex = 0;
    } else if (
        lastResult ===
        "https://ik.imagekit.io/lshkgi0dm/bg/sate.png?updatedAt=1682339837845"
    ) {
        patternIndex = 1;
    } else if (
        lastResult ===
        "https://ik.imagekit.io/lshkgi0dm/bg/wortel.png?updatedAt=1682339707964"
    ) {
        patternIndex = 2;
    } else if (
        lastResult ===
        "https://ik.imagekit.io/lshkgi0dm/bg/jagung.png?updatedAt=1682339730263"
    ) {
        patternIndex = 3;
    } else if (
        lastResult ===
        "https://ik.imagekit.io/lshkgi0dm/bg/ayam.png?updatedAt=1682339859988"
    ) {
        patternIndex = 4;
    } else if (
        lastResult ===
        "https://ik.imagekit.io/lshkgi0dm/bg/kol.png?updatedAt=1682339755582"
    ) {
        patternIndex = 5;
    } else {
        patternIndex = Math.floor(Math.random() * patterns.length);
    }

    var prevPatternIndex = patternIndex;
    var pattern = patterns[patternIndex];

    var predictions = [];

    for (var i = 0; i < pattern.length; i++) {
        var prediction = {};
        prediction.image = getImageByPattern(pattern[i]);
        prediction.percentage = calculatePercentage(pattern[i]);
        predictions.push(prediction);
    }

    for (var j = 0; j < predictions.length; j++) {
        var predictionId = "prediction" + (j + 1);
        var predictionElement = document.getElementById(predictionId);
        predictionElement.innerHTML = `
                    <img src="${predictions[j].image}" alt="Prediction ${j + 1
            }">
                    <div class="percentage">${predictions[j].percentage}%</div>
                `;
    }

    var finalPrediction =
        predictions[Math.floor(Math.random() * predictions.length)];
    var finalPredictionImage = document.getElementById(
        "finalPredictionImage"
    );
    finalPredictionImage.src = finalPrediction.image;
    var finalPredictionPercentage = document.getElementById(
        "finalPredictionPercentage"
    );
    finalPredictionPercentage.textContent =
        finalPrediction.percentage + "%";

    var predictionButton = document.getElementById("predictionButton");
    predictionButton.classList.add("disabled");
    predictionButton.setAttribute("disabled", true);
}

function getImageByPattern(item) {
    var image;
    if (item === "hotdog") {
        image = getRandomElement(pizza);
    } else if (item === "sate") {
        image = getRandomElement(pizza);
    } else if (item === "wortel") {
        image = getRandomElement(salad);
    } else if (item === "jagung") {
        image = getRandomElement(salad);
    } else if (item === "ayam") {
        image = getRandomElement(pizza);
    } else if (item === "kol") {
        image = getRandomElement(salad);
    } else if (item === "daging") {
        image = getRandomElement(pizza);
    } else if (item === "tomat") {
        image = getRandomElement(salad);
    } else if (item === "kol") {
        image = getRandomElement(salad);
    }

    if (image) {
        if (pizza.includes(image)) {
            pizza = pizza.filter((el) => el !== image);
        } else if (salad.includes(image)) {
            salad = salad.filter((el) => el !== image);
        }
    }

    return image;
}

function calculatePercentage(item) {
    var randomPercentage = Math.floor(Math.random() * 101);
    return randomPercentage;
}

function getRandomElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateFinalResult() {
    var finalResultPattern = [];
    var currentPatternIndex = Math.floor(Math.random() * patterns.length);

    for (var turn = 1; turn <= 37; turn++) {
        var currentPattern = patterns[currentPatternIndex];
        finalResultPattern.push(currentPattern);

        var nextPatternIndex;
        do {
            nextPatternIndex = Math.floor(Math.random() * patterns.length);
        } while (nextPatternIndex === currentPatternIndex);

        currentPatternIndex = nextPatternIndex;
    }

    var finalResult = [];
    for (var i = 0; i < finalResultPattern.length; i++) {
        var pattern = finalResultPattern[i];
        var item = pattern[Math.floor(Math.random() * pattern.length)];
        finalResult.push(item);
    }

    return finalResult;
}