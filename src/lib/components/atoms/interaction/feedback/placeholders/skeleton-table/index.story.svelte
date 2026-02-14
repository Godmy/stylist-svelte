<script context="module">
	export const title = 'TableSkeleton';
	export const category = 'Atoms/Feedback/Placeholders';
</script>

<script>
	import SkeletonTable from './skeleton-table/index.svelte';

	// Default values for controls
	let rows = 5;
	let columns = 4;
</script>

<div class="story-container">
	<h2>{title}</h2>
	<p>TableSkeleton component for showing loading states of table data.</p>

	<!-- Interactive Demo -->
	<div class="interactive-demo">
		<SkeletonTable {rows} {columns} />
	</div>

	<!-- Controls -->
	<div class="controls-demo">
		<h3>Controls</h3>
		<label>
			Rows:
			<input type="number" bind:value={rows} min="1" max="20" />
		</label>
		<label>
			Columns:
			<input type="number" bind:value={columns} min="1" max="10" />
		</label>
	</div>

	<!-- Tags (optional) -->
	<div class="tags">
		<span class="tag">skeleton</span>
		<span class="tag">loading</span>
		<span class="tag">table</span>
		<span class="tag">placeholder</span>
	</div>
</div>

<style>
	.story-container {
		padding: 20px;
		max-width: 100%;
		font-family: sans-serif;
	}

	h2,
	h3 {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}

	.interactive-demo {
		margin: 1.5rem 0;
	}

	.controls-demo {
		margin-top: 2rem;
		display: flex;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
	}

	.controls-demo label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.tags {
		margin-top: 1rem;
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag {
		background: #f0f0f0;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.875rem;
	}
</style>



