<script>
    import { sanitizeHTML } from "../services/Sanitizer.js";

    import { create, endpoints } from "../services/Api";

    let newPost = {
        title: "",
        content: "",
        authorid: 0,
    };

    let valid = false;
    let fields = { title: "", content: "", authorid: 1 };
    let errors = { title: "", content: "", authorid: 1 };

    const onSubmitForm = (e) => {
        valid = true;
        if (fields.title.trim().length < 5) {
            valid = false;
            errors.title = "The title text must be above 5 characthers long.";
        } else {
            errors.title = "";
        }

        if (fields.content.trim().length < 5) {
            valid = false;
            errors.content =
                "The content text must be above 5 characthers long.";
        } else {
            errors.content = "";
        }

        if (!valid) return;

        console.log("Unsanitized Field", fields.content);
        fields.content = sanitizeHTML(fields.content);
        console.log("Santized Field", fields.content);

        create(endpoints.posts, fields).then( res =>  {
            console.log(res);

            fields.title = "";
            fields.content = "";
        })

    };
</script>

<div>
    <h5>Create A Post</h5>
    <form on:submit|preventDefault={onSubmitForm}>
        <div>
            <label for="title">Title</label>
            <input
                bind:value={fields.title}
                id="title"
                name="title"
                type="text"
            />
            {#if errors.title !== ''}
            <div>
                {errors.title}
            </div>
            {/if}
        </div>
        <div>
            <label for="content">Content</label>
            <textarea id="content" bind:value={fields.content} name="content" />
            {#if errors.content !== ''}
            <div>
                {errors.content}
            </div>
            {/if}
        </div>
        <div>
            <input
                hidden
                id="authorid"
                name="authorid"
                type="number"
                value="1"
            />
        </div>
        <input class="btn" type="submit" value="Create Post" />
    </form>
</div>

<style>
    form {
        max-width: 100%;
    }
    textarea {
        color: rgb(3, 3, 3);
        font-size: 1rem;
        line-height: 1.6;
        text-align: justify;
        resize: none;
        border-radius: 1rem;
        padding: 1rem;
        width: 100%;
        resize: vertical;
        border: 1px solid rgba(0, 0, 0, 0.068);
        transition: all 0.25s;
    }

    .btn {
        margin: 1em auto;
        border-radius: 0.25em;
        font-size: 1.125rem;
        padding: 0.8em;
        border: 1px solid rgba(0, 0, 0, 0.068);
        transition: all 0.25s;
    }
    input {
        border-radius: 0.25rem;
        font-size: 1rem;
        padding: 0.5em;
        border: 1px solid rgba(0, 0, 0, 0.068);
        transition: all 0.25s;
    }
    label {
        font-size: 1.15rem;
        padding: 0.5em 0;
        display: block;
        font-weight: 300;
    }
    input:focus {
        outline: none;
        border: 1px solid var(--link);
    }
    textarea:focus {
        outline: none;
        border: 1px solid var(--link);
    }
</style>
