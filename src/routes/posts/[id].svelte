<script context="module">
    import { endpoints, getOne } from "../../services/Api";
    export const load = async ({params}) => {
        const postId = params.id;
        const post = await getOne(endpoints.posts,postId)
        return {props: {post}}
    }
</script>

<script>
    export let post;
    
</script>

<article>
    <header>
        <h1 class="post-title">{post.title}</h1>
        <span class="post-date">{new Date(post.datePosted).toDateString()}</span>
        |
        <span class="post-likes">{post.likeCount}^</span>
        |
        <span class="post-author">{post.authorId}</span>

    </header>

    <p class="post-content">
        {@html post.content}
    </p>
</article>

<style>


</style>