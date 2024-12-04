<script lang="ts">
	const navItems = [
		{ name: 'Profile', path: './profile' },
		{ name: 'Projects', path: './projects' },
		{ name: 'Experience', path: './experience' },
		{ name: 'Education', path: './education' }
	];
</script>

<nav class="fixed top-0 left-0 w-full bg-primary shadow-md z-50">
	<div class="max-w-7xl mx-auto px-4 py-3 flex justify-center">
		<div class="flex gap-8">
			{#each navItems as { name, path }}
				<a 
					href={path} 
					class="text-lg font-semibold text-white px-3 py-2 rounded-md 
					transition-colors hover:bg-primary-700 hover:text-gray-300"
				>
					{name}
				</a>
			{/each}
		</div>
	</div>
</nav>