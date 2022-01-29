<script>
    import { sanitizeHTML } from "../services/Sanitizer.js";
    import { create, endpoints } from "../services/Api";
    import { postsStore } from "../store.js";
    import FormError from "$lib/FormError.svelte"
    import Editor from "cl-editor/src/Editor.svelte"
    let newPost = {
        title: "",
        content: "",
        authorid: 0,
    };
    let valid = false;
    let fields = { title: "", content: "", authorid: 1 };
    let errors = { title: "", content: "", authorid: 1 };

    let content = ''
    let editor

    const onSubmitForm = (e) => {
        valid = true;
        if (fields.title.trim().length < 3) {
            valid = false;
            errors.title = "The title text must be above 5 characthers long.";
        } else {
            errors.title = "";
        }

        if (fields.content.trim().length < 1) {
            valid = false;
            errors.content =
                "The content text must be above 1 characther(s)";
        } else {
            errors.content = "";
        }

        if (!valid) return;

        create(endpoints.posts, fields).then( data =>  {
            editor.setHtml("",true)
            fields.title = "";
            $postsStore = [...$postsStore,data]
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
                <FormError>{errors.title}</FormError>
            {/if}
        </div>
        <div>
            <label for="content">Content</label>
            <Editor bind:this={editor} html={fields.content} on:change={(e) => fields.content = e.detail} />
            {#if errors.content !== ''}
                <FormError>{errors.content}</FormError>
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
        margin: 0 auto;
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
        filter: brightness(.99);
        background-color: var(--white);
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
        background-color: var(--white);
        filter: brightness(.99);
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
        font-weight: 500;
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
