<script lang="ts">
	export let name = 'Gustavo Zahorcsak Matias Silvano';
	export let subtitle = 'Bioinformatician & Software Developer';

	import Background from './Background.svelte';
</script>

<Background />

<!-- backdrop-blur-md -->
<div class="fixed inset-0 flex items-center justify-center bg-white/10"> 
    <div class="bg-white p-8 rounded-xl shadow-lg">
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-5xl font-bold text-gray-800 m-0">{name}</h1>
            <p class="text-2xl text-gray-600 mt-3">{subtitle}</p>
        </div>
    </div>
    <a 
        href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
        class="fixed bottom-4 right-4 transition-colors"
    >
        Conway's Game of Life
    </a>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
