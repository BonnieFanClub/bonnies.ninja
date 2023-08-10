<script>


    let timer = 0
    function reset() {
        if (timer !== 0) {
            timer = 0
        }
        clearInterval(time)
    }
    let time;
    function start() {

        time= setInterval(() => {
            timer += 1
        },1000)
    }


</script>

<button on:click="{start}">
    start
</button>
<button on:click="{reset}">
    reset
</button>
<h1>{timer}s</h1>
