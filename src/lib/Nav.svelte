<script>

import { page } from "$app/stores";

</script>
<nav>
    <ul>
        <li>
            <a class:active={$page.url.pathname === "/"} href="/"><span>My Blog</span></a>
        </li>
        <li>
            <a class:active={$page.url.pathname === "/blog"} href="/blog">Blog</a>
        </li>
        <li>
            <a class:active={$page.url.pathname === "/about"} href="/about">About</a>
        </li>
    </ul>
</nav>

<style>
    nav {
        max-width: 100%;
        background-color: rgb(34, 43, 43);
    }
    a {
        text-transform: uppercase;        
    }

    .active {
        color: var(--white);
    }
    li {
        margin: 1rem 0;
        min-width: 200px;
        height: auto;
    }
    ul {
        max-width: 900px;
        margin: 0 0 auto 0;
        display: flex;
        flex-wrap: wrap;
        padding: 1rem;
        justify-content: space-around;
    }
</style>