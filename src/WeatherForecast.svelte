<script>
    import { onMount } from "svelte";

    let weatherForecast = []

    const getWeatherForecast = async() => {

        const res = await fetch('https://localhost:5001/WeatherForecast')
        weatherForecast = await res.json()
        console.log(weatherForecast);
    }

    onMount(()=> getWeatherForecast())

</script>

<section id="forecast">
    {#each weatherForecast as {date,temperatureC,summary} (date)}
    <div>
        <p class="date">{date}</p>
        <p class="temp">{temperatureC}</p>
        <p class="summary">{summary}</p>

    </div>
    {/each}
</section>

<style>
    p {
        padding: 0;
        margin: 0;
    }
</style>