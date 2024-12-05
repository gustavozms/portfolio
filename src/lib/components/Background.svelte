<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;
	let baseGridSize = 128;
	let gridSizeX: number;
	let gridSizeY: number;
	let cellSize = 8;
	let grid: { state: number; fadeLevel: number }[][] = [];
	let isMouseDown = false;

	const calculateGridSize = () => {
		const aspectRatio = window.innerWidth / window.innerHeight;
		if (aspectRatio > 1) {
			gridSizeY = baseGridSize;
			gridSizeX = Math.floor(baseGridSize * aspectRatio);
		} else {
			gridSizeX = baseGridSize;
			gridSizeY = Math.floor(baseGridSize / aspectRatio);
		}
	};

	const initializeGrid = () => {
		calculateGridSize();
		grid = Array.from({ length: gridSizeX }, () =>
			Array.from({ length: gridSizeY }, () => ({
				state: Math.random() > 0.5 ? 1 : 0,
				fadeLevel: 0
			}))
		);
	};

	const drawGrid = () => {
		if (!context) return;
		context.clearRect(0, 0, canvas.width, canvas.height);

		for (let x = 0; x < gridSizeX; x++) {
			for (let y = 0; y < gridSizeY; y++) {
				const cell = grid[x][y];
				if (cell.state === 1) {
					// active
					context.fillStyle = '#FE2C55';
					context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
				} else if (cell.fadeLevel > 0) {
					// transition
					context.fillStyle = `rgba(254, 44, 85, ${1 - cell.fadeLevel})`;
					context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
					grid[x][y].fadeLevel = Math.min(cell.fadeLevel + 0.1, 1);
				} else {
					// inactive
					context.fillStyle = 'white';
					context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
				}
			}
		}
	};

	const updateGrid = () => {
		const newGrid = grid.map((row, x) =>
			row.map((cell, y) => {
				const neighbors = countNeighbors(x, y);
				if (cell.state === 1 && (neighbors < 2 || neighbors > 3)) {
					// die
					return { state: 0, fadeLevel: 0.1 };
				}
				if (cell.state === 0 && neighbors === 3) {
					// spawn
					return { state: 1, fadeLevel: 0 };
				}
				return cell;
			})
		);
		grid = newGrid;
		drawGrid();
	};

	const countNeighbors = (x: number, y: number) => {
		let count = 0;
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				if (i === 0 && j === 0) continue;
				const nx = (x + i + gridSizeX) % gridSizeX;
				const ny = (y + j + gridSizeY) % gridSizeY;
				count += grid[nx][ny].state;
			}
		}
		return count;
	};

	const handleMouseDown = () => {
		isMouseDown = true;
	};

	const handleMouseUp = () => {
		isMouseDown = false;
	};

	const handleResize = () => {
		if (!canvas) return;
		calculateGridSize();
		canvas.width = gridSizeX * cellSize;
		canvas.height = gridSizeY * cellSize;
		initializeGrid();
		drawGrid();
	};

	const spawnRandomPattern = () => {
		const patterns = [
			// Glider
			[
				[0, 0],
				[1, 0],
				[2, 0],
				[2, 1],
				[1, 2]
			],
			// Small explosion
			[
				[0, 0],
				[1, 0],
				[0, 1],
				[1, 1],
				[2, 1],
				[1, 2]
			],
			// Line
			[
				[0, 0],
				[1, 0],
				[2, 0]
			],
			// Square
			[
				[0, 0],
				[0, 1],
				[1, 0],
				[1, 1]
			]
		];
		const numPatterns = Math.floor(Math.random() * 3) + 1;

		for (let i = 0; i < numPatterns; i++) {
			const pattern = patterns[Math.floor(Math.random() * patterns.length)];
			const x = Math.floor(Math.random() * (gridSizeX - 5));
			const y = Math.floor(Math.random() * (gridSizeY - 5));

			pattern.forEach(([dx, dy]) => {
				if (x + dx < gridSizeX && y + dy < gridSizeY) {
					grid[x + dx][y + dy] = { state: 1, fadeLevel: 0 };
				}
			});
		}
	};

	onMount(() => {
		if (canvas) {
			context = canvas.getContext('2d');
			handleResize();
		}
		drawGrid();
		const updateInterval = setInterval(updateGrid, 50);
		const spawnInterval = setInterval(spawnRandomPattern, 2000);

		window.addEventListener('resize', handleResize);
		canvas.addEventListener('mousedown', handleMouseDown);

		canvas.addEventListener('mouseup', handleMouseUp);

		return () => {
			clearInterval(updateInterval);
			clearInterval(spawnInterval);
			window.removeEventListener('resize', handleResize);
			canvas.removeEventListener('mousedown', handleMouseDown);
			canvas.removeEventListener('mouseup', handleMouseUp);
		};
	});
</script>

<div
	class="fixed inset-0 flex items-center justify-center w-screen h-screen overflow-hidden bg-white"
>
	<canvas class="bg-white overflow-hidden" bind:this={canvas} on:contextmenu|preventDefault
	></canvas>
</div>
