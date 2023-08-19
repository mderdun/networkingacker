<script>

</script>

<article class="quotebox">
    <div class="quote">
<slot name="quote">
    <span class="missing">No quote provided.</span>
</slot>
</div>
<div class="citation">
    <slot name="citation">
        <span class="missing">No citation given.</span>
    </slot>
</div>
</article>

<style>
.quotebox {
    background-color: var(--quote);
    margin-top: 1rem;
    padding: 0.1rem 1rem 1.5rem 1rem;
    border-radius: 0.5rem;
}

.quote {
    font-family: var(--font-serif);
    font-weight: 300;
    font-size: var(--font-size-2);
    line-height: 1.7rem;
    border-bottom: 2px dashed var(--surface-1);
    padding-bottom: 1.4rem;
    white-space: pre-wrap;
}

.citation {
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: var(--font-size-0);
    color: var(--text-2);
    padding-top: 0.7rem;
}

:global(.bold) {
    font-weight: 700;
}
</style>