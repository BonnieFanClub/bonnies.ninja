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


let d = new Date()
const hour = document.getElementById("hour")
setInterval(() => {
    d = new Date()
    hour.textContent = d.toLocaleTimeString()
}, 300)

document.getElementById('button1').addEventListener('click', function() {
    document.documentElement.style.setProperty('--c1', 'rgb(000, 000, 000)');
    document.documentElement.style.setProperty('--c2', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--c3', 'rgb(255, 255, 255)');
    document.body.style.backgroundColor = '#feb5b5';
});

document.getElementById('button2').addEventListener('click', function() {
    document.body.style.backgroundColor = '#dbfeb5';
    document.documentElement.style.setProperty('--c1', 'rgb(168, 252, 169)');
    document.documentElement.style.setProperty('--c2', 'rgb(122, 138, 164)');
});

document.getElementById('button3').addEventListener('click', function() {
    document.body.style.backgroundColor = '#d5b5fe';
    document.documentElement.style.setProperty('--c1', 'rgb(255, 155, 155)');
    document.documentElement.style.setProperty('--c2', 'rgb(255, 168, 168)');
});

document.getElementById('button4').addEventListener('click', function() {
    document.body.style.backgroundColor = '#b5e5fe';
    document.documentElement.style.setProperty('--c1', 'rgb(255, 155, 155)');
    document.documentElement.style.setProperty('--c2', 'rgb(255, 168, 168)');
});

function checkTime() {
    let now = new Date();
    let minutes = now.getMinutes();
    
    if (minutes === 0) {
        window.location.href = "/soviete/index.html"; // replace with your URL
    }
}

// Check right away
checkTime();

// Then check every minute
setInterval(checkTime, 1000);