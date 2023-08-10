<script>
        let now = new Date();
    setInterval(() => {
        now = new Date()
    }, 300)

</script>

<div class="clock">
    <h2>
        {now.toLocaleTimeString()}
    </h2>
</div>
