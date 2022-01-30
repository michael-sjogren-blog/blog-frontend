<script>
    import CreatePostForm from "$lib/CreatePostForm.svelte";
    import { deleteOne, endpoints, getAll } from "../services/Api.js";
    import { postsStore } from "../store.js";
    import { onMount } from "svelte";

    onMount(() =>
        getAll(endpoints.posts).then((data) => {
            $postsStore = data;
        })
    );
    const onDeletePost = (id) => {
        deleteOne(endpoints.posts, id).then(() => {
            const index = $postsStore.findIndex((e) => e.id === id);
            if (index > -1) {
                let newPosts = [...$postsStore];
                newPosts.splice(index, 1);
                $postsStore = [...newPosts];
            }
        });
    };
</script>
<h1>Blog Posts</h1>

<section class="posts-container">
    <div class="create-form">
        <CreatePostForm />
    </div>
    <div class="posts">
        {#if $postsStore === undefined}
            <p>No Posts exists.</p>
        {:else}
            {#each $postsStore as { id, title, likeCount, authorId, datePosted, content } (id)}
                <article class="post">
                    <small class="post-date">
                        {new Date(datePosted).toDateString()}
                    </small>
                    <small class="post-author">
                        ,AuthorId: {authorId}
                    </small>
                    <small class="post-likes">
                        ,Likes: {likeCount}
                    </small>
                    <header class="post-header">
                        <h5 class="title">
                            <a href={`/posts/${id}`}>
                                {title}
                            </a>
                        </h5>
                    </header>
                    <p class="post-content-snapshot">{@html content}</p>
                </article>
            {/each}
        {/if}
    </div>
</section>

<style>
    .create-form {
        grid-area: form;
    }
    .posts-container {
        display: grid;
        grid-template-areas:
            "posts form form ."
            "posts form form .";
    }

    .posts {
        margin: 1rem;
        max-width: 600px;
        grid-area: posts;
    }
    .post-header {
        display: flex;
        font-size: 1.5rem;
    }

    .title {
        flex: 1;
        text-transform: capitalize;
        margin-bottom: 1rem;
    }

    .post {
        background-color: var(--white);
        max-width: 900px;
        border-radius: 1rem;
        box-shadow: 0.1em 0.1em 0.1em #00000028;
        padding: 2em;
        margin: 2em 0;
    }

    .post-content-snapshot {
        text-align: justify;
        line-height: 1.5rem;
        max-height: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
