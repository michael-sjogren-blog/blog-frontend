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
        <h1>{post.title}</h1>
        <span>{new Date(post.datePosted).toDateString()}</span>
        |
        <span>{post.likeCount}^</span>
        |
        <span>{post.authorId}</span>

    </header>

    <p>
        {@html post.content}
    </p>
</article>