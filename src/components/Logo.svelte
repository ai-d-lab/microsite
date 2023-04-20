<script>
    // logos are named 1.png, 2.png, 3.png, etc. until 8.png
    const random = Math.floor(Math.random() * 8) + 1

    const src = `/logo/${random}.png`

    console.log(random)

</script>

<img src={src} class="mx-auto w-80 md:w-96 mt-4">
