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
<h1>
    Heading 1
</h1>

<h2>
    Heading 2
</h2>

<h3>
    Heading 3
</h3>
<h4>
    Heading 4
</h4>

<h5>
    Heading 5
</h5>
<br>
<hr>
<CreatePostForm></CreatePostForm>
<section>
    <hr>
    <h2>Blog Posts</h2>
    {#each posts as {id,title, content} (id)}
        <article class="post">
            <h5 class="title">
                <a href={`/blog/post/${id}`}>
                    {title}
                </a>
            </h5>
            <p class="content-snapshot">{@html content}</p>
        </article>
    {/each}
</section>


<style>
    .post .title {
        text-transform: capitalize;
        margin-bottom: 1rem;
    }
    .post {
        border: 1px ridge var(--primary);
        background-color: white;
        max-width: 900px;
        border-radius: 1rem;
        box-shadow: .1rem .1rem .1rem #00000008;
        padding: 2em;
        margin: 2em 0;        
    }

    .content-snapshot{
        text-align: justify;
        line-height: 1.5rem;
        max-height: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>