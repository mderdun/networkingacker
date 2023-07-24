<script>
	// Import on the client-side to avoid SSR issues
	import { onMount } from 'svelte';
	import anime from 'animejs'; // Make sure you have 'animejs' installed in your project
    import MarqueeTextWidget from 'svelte-marquee-text-widget';
	import { LucideAlignVerticalDistributeCenter } from 'lucide-svelte';

	let Letterize;
	let animateMeRef = null; // Initialize to null

	onMount(() => {
		import('letterizejs')
			.then((module) => {
				Letterize = module.default;
				// Your code to initialize Letterize here
				var test = new Letterize({
					targets: '#animateMe'
				});

				test.listAll;
				for (var i = 0; i < test.listAll.length; i++) {
					test.listAll[i].addEventListener('mouseover', function (e) {
						const target = e.target;
                        anime({
							targets: target,
							duration: 100,
							opacity: 0.05,
                            backgroundColor: '#fgf'
						});
					});

					test.listAll[i].addEventListener('mouseout', function (e) {
						const target = e.target;
                        anime({
							targets: target,
							duration: 7000,
							opacity: 1
						});
					});
				}
			})
			.catch((err) => {
				console.error(err);
			});
	});
</script>

<div class="box" bind:this={animateMeRef}>
    <div class="text" id="animateMe">
        <MarqueeTextWidget repeat="{8}" duration="{5.2}">networking:acker:</MarqueeTextWidget>
    </div>
	<div class="text" id="animateMe">
        <MarqueeTextWidget repeat="{8}" duration="{4.5}">acker:networking:</MarqueeTextWidget>
    </div>
    <div class="text" id="animateMe">
        <MarqueeTextWidget repeat="{8}" duration="{4.8}">networking:acker:</MarqueeTextWidget>
    </div>
</div>

<style>
    div.text {
        display: flex;
        overflow: hidden;
		width: 90vw;
		padding-inline: var(--size-7);
    }
	div.box {
		font-weight: 700;
		font-size: 200%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		text-transform: full-width;
		font-family: sans-serif;
		height: 100%;
		box-sizing: border-box;
		margin: 0;
		line-height: 1.2;
		flex-direction: column;
        overflow: hidden;
	}
</style>
