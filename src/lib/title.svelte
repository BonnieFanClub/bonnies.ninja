<script>
    let Bonnietitle = [
        "B",
        "Bo",
        "Bon",
        "Bonn",
        "Bonni",
        "Bonnie",
        "Bonnies",
        "Bonnies.",
        "Bonnies.n",
        "Bonnies.ni",
        "Bonnies.nin",
        "Bonnies.ninj",
        "Bonnies.ninja",
        "Bonnies.ninja",
        "Bonnies.ninja",
        "Bonnies.ninj",
        "Bonnies.nin",
        "Bonnies.ni",
        "Bonnies.n",
        "Bonnies.",
        "Bonnies",
        "Bonnie",
        "Bonnie",
        "Bonnie",
        "Bonnie",
        "Bonnie",
        "Bonni",
        "Bonn",
        "Bon",
        "Bo"
    ]

    let Bonnimoji = [
    '∪･ω･∪',
    'U●ᴥ●U',
    'U^ｪ^U',
    '∪･ｪ･∪'
    ]

    let indexMoji = 0;
    setInterval(() => {
        document.title = Bonnimoji[indexMoji];
        indexMoji = (indexMoji + 1) % Bonnimoji.length;
    }, 1000);

    let title = "B";
    let indexTitle = 1;
    setInterval(() => {
        title = Bonnietitle[indexTitle];
        indexTitle = (indexTitle + 1 ) % Bonnietitle.length
    }, 300);

</script>

<h1>
    <span id="title">{title}</span><span id="pipe">|</span>
</h1>

<style>
    h1 {
        margin: 0;
        font-size: 10vw;
        color: black;

    }
    #title {
        -webkit-text-stroke: 2px white;
    }

    #pipe {
        animation: 900ms blink infinite alternate;
        -webkit-text-stroke: 2px white;
    }
    @keyframes blink {
        50% {
            color: transparent;
            -webkit-text-stroke: 2px transparent;
        }
    }
</style>
