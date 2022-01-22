<script>

import { page } from "$app/stores";

</script>
<nav>
    <span>
        <a class:active={$page.url.pathname === "/"} href="/"><span>My Blog</span></a>
    </span>

    <ul>
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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 100%;
        background-color: rgb(34, 43, 43);
    }
    a {
        font-weight: bold;
        letter-spacing: .2rem;
        color: var(--white);
        text-transform: capitalize;
    }
    a:hover{
        text-decoration: none;
        color: var(--primary);
        opacity: .75;
    }

    .active {
        color: var(--primary);
    }

    span {
        justify-self: flex-start;
        margin: 1rem 0;
        min-width: 200px;
        height: auto;
        display: block;
    }
    li {
        margin: 1rem 0;
        min-width: 200px;
        height: auto;
    }
    ul {
        flex: 5;
        max-width: 900px;
        margin: 0 0 auto 0;
        display: flex;
        flex-wrap: wrap;
        padding: 1rem;
        justify-content: space-evenly;
    }
</style>