class Prediction {
    constructor() {
        this.fruitPrediction = document.getElementById("fruit-prediction");
        this.meatPrediction = document.getElementById("meat-prediction");
        this.greedyPrediction = document.getElementById("greedy-prediction");
        this.boxPrediction = document.getElementById("box-prediction");
        this.finalPrediction = document.getElementById("final-prediction");
        this.countdown = document.getElementById("countdown");
        this.fruit = [
            "https://ik.imagekit.io/lshkgi0dm/bg/wortel.png?updatedAt=1682339707964",
            "https://ik.imagekit.io/lshkgi0dm/bg/jagung.png?updatedAt=1682339730263",
            "https://ik.imagekit.io/lshkgi0dm/bg/kol.png?updatedAt=1682339755582",
            "https://ik.imagekit.io/lshkgi0dm/bg/tomat.png?updatedAt=1682339781740",
        ];
        this.meat = [
            "https://ik.imagekit.io/lshkgi0dm/bg/sate.png?updatedAt=1682339837845",
            "https://ik.imagekit.io/lshkgi0dm/bg/hotdog.png?updatedAt=1682339816766",
            "https://ik.imagekit.io/lshkgi0dm/bg/ayam.png?updatedAt=1682339859988",
            "https://ik.imagekit.io/lshkgi0dm/bg/daging.png?updatedAt=1682339879224",
        ];
        this.greedy = [
            "https://ik.imagekit.io/lshkgi0dm/bg/wortel.png?updatedAt=1682339707964",
            "https://ik.imagekit.io/lshkgi0dm/bg/jagung.png?updatedAt=1682339730263",
            "https://ik.imagekit.io/lshkgi0dm/bg/kol.png?updatedAt=1682339755582",
            "https://ik.imagekit.io/lshkgi0dm/bg/tomat.png?updatedAt=1682339781740",
            "https://ik.imagekit.io/lshkgi0dm/bg/sate.png?updatedAt=1682339837845",
            "https://ik.imagekit.io/lshkgi0dm/bg/hotdog.png?updatedAt=1682339816766",
            "https://ik.imagekit.io/lshkgi0dm/bg/ayam.png?updatedAt=1682339859988",
            "https://ik.imagekit.io/lshkgi0dm/bg/daging.png?updatedAt=1682339879224",
        ];
        this.box = [
            "https://ik.imagekit.io/lshkgi0dm/bg/wortel.png?updatedAt=1682339707964",
            "https://ik.imagekit.io/lshkgi0dm/bg/jagung.png?updatedAt=1682339730263",
            "https://ik.imagekit.io/lshkgi0dm/bg/kol.png?updatedAt=1682339755582",
            "https://ik.imagekit.io/lshkgi0dm/bg/tomat.png?updatedAt=1682339781740",
            "https://ik.imagekit.io/lshkgi0dm/bg/sate.png?updatedAt=1682339837845",
            "https://ik.imagekit.io/lshkgi0dm/bg/hotdog.png?updatedAt=1682339816766",
            "https://ik.imagekit.io/lshkgi0dm/bg/ayam.png?updatedAt=1682339859988",
            "https://ik.imagekit.io/lshkgi0dm/bg/daging.png?updatedAt=1682339879224",
        ];
    }

    startCountdown() {
        var time = 10;
        var countdownInterval = setInterval(() => {
            time--;
            this.countdown.innerHTML = time;
            if (time === 0) {
                clearInterval(countdownInterval);
                this.showPrediction();
            }
        }, 1000);
    }
    showPrediction() {
        var randomFruit = Math.floor(Math.random() * this.fruit.length);
        var randomMeat = Math.floor(Math.random() * this.meat.length);
        var randomGreedy = Math.floor(Math.random() * this.greedy.length);
        var randomBox = Math.floor(Math.random() * this.box.length);
        this.fruitPrediction.innerHTML = '<img src="' + this.fruit[randomFruit] + '">';
        this.meatPrediction.innerHTML = '<img src="' + this.meat[randomMeat] + '">';
        this.greedyPrediction.innerHTML = '<img src="' + this.greedy[randomGreedy] + '">';
        this.boxPrediction.innerHTML = '<img src="' + this.box[randomBox] + '">';
        this.finalPrediction.innerHTML = '<img src="' + this.greedy[randomGreedy] + '">';
        this.fruitPrediction.classList.add("animation-prediction");
        this.meatPrediction.classList.add("animation-prediction");
        this.greedyPrediction.classList.add("animation-prediction");
        this.boxPrediction.classList.add("animation-prediction");
        setTimeout(() => {
            this.finalPrediction.classList.remove("animation-final-prediction");
            this.fruitPrediction.classList.remove("animation-prediction");
            this.meatPrediction.classList.remove("animation-prediction");
            this.greedyPrediction.classList.remove("animation-prediction");
            this.boxPrediction.classList.remove("animation-prediction");
        }, 2000);
        setTimeout(() => {
            this.finalPrediction.classList.add("show");
        }, 1000);
    }
    startCountdown() {
        var time = 10;
        var countdownInterval = setInterval(() => {
            time--;
            this.countdown.innerHTML = time;
            if (time === 0) {
                clearInterval(countdownInterval);
                this.showPrediction();
            }
        }, 1000);
    }

    start() {
        this.startCountdown();
    }
}

var prediction = new Prediction();
prediction.start();



