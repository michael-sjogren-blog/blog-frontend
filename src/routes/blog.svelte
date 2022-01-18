<script>
import { onMount } from "svelte";

    const postUrl = "https://localhost:5001/Posts"
    let posts = []
    async function getPosts(){
       const response = await fetch(postUrl).then(res => res);
       if (response.ok)
       {
            posts = await response.json();
       }
    }
    onMount(() => getPosts());
    
</script>

<article>
    <h2>Blog Posts</h2>

    {#each posts as post}
        <article>
            <h4>{post.title}</h4>
            <p>{@html post.content}</p>
        </article>
    {/each}
</article>