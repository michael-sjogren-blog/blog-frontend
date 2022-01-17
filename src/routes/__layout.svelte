<script>
import Footer from "$lib/Footer.svelte";
import Header from "$lib/Header.svelte";
import '../styles/globals.css';

</script>
<Header/>
<main>
    <slot></slot>
</main>

<Footer/>