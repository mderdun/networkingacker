<script lang="ts">
	import { formatDate } from '$lib/utils.js';

    export let data;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />
</svelte:head>

<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p>Published {formatDate(data.meta.date)}</p>
    </hgroup>

    <div class="tags">
        {#each data.meta.tags as tag}
            <a href="/blog/tags/{tag}">{tag}</a>
        {/each}
    </div>

    <div class="prose">
        <svelte:component this={data.content} />
    </div>

</article>

<style>
    :global(a) {
        color: inherit;
        text-decoration: none;
    }

    :global(p) {
        font-size: var(--font-size-2);
    }

    article {
        max-inline-size: var(--size-content-3);
        margin-inline: auto;
    }

    h1 {
        text-transform: capitalize;
    }

    h1 + p {
        margin-top: var(--size-2);
        color: var(--text-2);
    }

    .tags {
        display: flex;
        gap: var(--size-3);
        margin-block: var(--size-7);
    }

    .tags > * {
        padding: var(--size-2) var(--size-3);
        border-radius: var(--radius-round);
        background-color: var(--surface-4);
    }
</style>