<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;
	let gridSizeX = 256;
	let gridSizeY = 256;
	let cellSize = 4; // px
	let grid: { state: number, fadeLevel: number }[][] = [];
	let isMouseDown = false;

	const initializeGrid = () => {
		grid = Array.from({ length: gridSizeX }, () =>
			Array.from({ length: gridSizeY }, () => ({
				// state: 0,
				state: Math.random() > 0.9 ? 1 : 0,
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
					context.fillStyle = 'black';
					context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
				} else if (cell.fadeLevel > 0) {
					// transition
					const shade = Math.floor(255 * cell.fadeLevel);
					context.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
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

	const handleMouseMove = (event: MouseEvent) => {
		if (isMouseDown) {
			const rect = canvas.getBoundingClientRect();
			const x = Math.floor((event.clientX - rect.left) / cellSize);
			const y = Math.floor((event.clientY - rect.top) / cellSize);
			if (x >= 0 && x < gridSizeX && y >= 0 && y < gridSizeY) {
				grid[x][y] = { state: 1, fadeLevel: 0 };
				grid[x + 1][y + 1] = { state: 1, fadeLevel: 0 };
				grid[x - 1][y - 1] = { state: 1, fadeLevel: 0 };
				drawGrid();
			}
		}
	};

	const handleMouseDown = () => {
		isMouseDown = true;
	};

	const handleMouseUp = () => {
		isMouseDown = false;
	};

	onMount(() => {
		initializeGrid();
		if (canvas) {
			context = canvas.getContext('2d');
			canvas.width = gridSizeX * cellSize;
			canvas.height = gridSizeY * cellSize;
		}
		drawGrid();
		const interval = setInterval(updateGrid, 100);

		canvas.addEventListener('mousedown', handleMouseDown);
		canvas.addEventListener('mouseup', handleMouseUp);
		canvas.addEventListener('mousemove', handleMouseMove);

		return () => {
			clearInterval(interval);
			canvas.removeEventListener('mousedown', handleMouseDown);
			canvas.removeEventListener('mouseup', handleMouseUp);
			canvas.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div class="canvas-container">
	<canvas
		bind:this={canvas}
		on:contextmenu|preventDefault
	></canvas>
</div>

<style>
	.canvas-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: pink;
	}

	canvas {
		background-color: white;
		overflow: hidden;
	}
</style>