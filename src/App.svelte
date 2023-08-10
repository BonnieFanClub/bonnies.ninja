<script>
    import Title from "./lib/title.svelte"
    import Socials from "./lib/socials.svelte"
    import Background from "./lib/background.svelte"
    import Time from "./lib/time.svelte"
    import Timer from './lib/timer.svelte';
</script>

<main>
    <Background/>
    <Title />
    <div class="socials">
        <Socials name="bonnie fanclub" image="/bonnie1.webp" link="https://matrix.to/#/!EOaJuchteaWXqvdooL:mozilla.org" social="matrix"/>
        <Socials name="r/BonnieFanClub" image="" link="https://www.reddit.com/r/BonnieFanClub/" social="reddit"/>
        <Socials name="bonnie_fan_club" image="" link="https://www.instagram.com/bonnie_fan_club/" social="instagram"/>
    </div>
    <Time />
    <Timer/>

</main>

<style>
    .socials {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
