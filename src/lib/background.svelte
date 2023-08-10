<script>
    let imageFolder = '/background/';
    let images = [];
    let numberImage = 41
    for (let i = 1; i < numberImage + 1; i++) {
        images.push(`bonnie${i}.webp`)
    }
    console.log(images.length)
    if (images.length >= numberImage) {

        let randomIndex = Math.floor(Math.random() * images.length);
        // Get the random image URL
        let randomImage = imageFolder + images[randomIndex];
        document.addEventListener("DOMContentLoaded", () => {
            document.documentElement.style.background = `url('${randomImage}')`;
            document.documentElement.style.backgroundSize = "cover";
            document.documentElement.style.backgroundPosition = "center";
        });
    }
</script>

