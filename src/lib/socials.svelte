<script>
    export let name;
    export let link;
    export let social;
    export let image;
</script>
<a href="{link}">
<div class="card">
    <h2>{name}</h2>
    <div class="social">

            <h2>
                {social}
            </h2>

    </div>
</div>
</a>

<style>
    .card {
        background: black;

        border-radius: 30px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        text-align: center;
        border: solid white 2px;
    }
</style>
