<script lang="ts">
	import { expoIn } from "svelte/easing";
    import { fade } from "svelte/transition";
    import { blur } from "svelte/transition";
    
    export let url = '';
</script>

{#key url}
<div class="transition" in:blur={{ duration: 225, easing:expoIn }}>
    <div class="transition" in:fade={{ duration: 200 , easing: expoIn }}>
        <slot />
    </div>
    </div>
{/key}

<style>
    .transition {
        height: 100%;
    }
</style>