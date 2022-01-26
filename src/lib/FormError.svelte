<small class="error">
    <slot/>
</small>

<style>
    :global(.error) {
        margin: 1em auto;
        display: block;
        color: var(--danger);
    }

    :global(.error::before){
        content: '*';
        font-size: 1rem;
        font-weight: bold;
        margin-right: .5em;
        width: 30px;
        height: 30px;
    }
</style>