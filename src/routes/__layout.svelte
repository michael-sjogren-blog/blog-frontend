<script>
import Footer from "$lib/Footer.svelte";
import Header from "$lib/Header.svelte";
import '../styles/globals.css';

</script>
<div id="page">
    <Header/>
    <main class="container">
        <slot></slot>
    </main>
    
    <Footer/>
</div>
    
<style>
    main {
        grid-area: main;
    }
    
</style>