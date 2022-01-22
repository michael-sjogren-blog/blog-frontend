<script>
import { onMount } from "svelte";
import CreatePostForm from "$lib/CreatePostForm.svelte";
import { endpoints, getAll } from "../services/Api.js";


    let posts = [];
    onMount(() => {
        getAll(endpoints.posts).then(
            data => posts = data
        )
    })

</script>

<article>
    <h2>Blog Posts</h2>
    <CreatePostForm></CreatePostForm>
    {#each posts as {id,title, content} (id)}
        <article class="post">
            <h4 class="title">
                <a href={`/blog/post/${id}`}>
                    {title}
                </a>
            </h4>
            <p>{content}</p>
        </article>
    {/each}
</article>


<style>
    .post .title {
        margin-bottom: 1rem;
    }
    .post {
        border-radius: 1rem;
        box-shadow: .1rem .1rem .1rem #00000008;
        padding: 2rem;
        max-width: 100%;
        margin: 2rem 0;        
    }
</style>