<script context="module">
	export const title = 'SkeletonCircle';
	export const category = 'Atoms/Feedback/Placeholders';
</script>

<script>
	import SkeletonCircle from './index.svelte';

	// State variables
	let size = 48;
	let showContent = false;

	// Content placeholder (initials)
	const initials = '<span class="text-xs font-semibold text-white drop-shadow">UI</span>';
</script>

<div class="story-container">
	<h2>{title}</h2>
	<p>Circular skeleton placeholder for avatar or badge loading states.</p>

	<!-- Interactive Demo -->
	<div class="interactive-demo">
		<div class="space-y-6 p-6">
			<div class="flex items-center gap-4">
				<SkeletonCircle {size} content={showContent ? initials : undefined} />
				<div class="text-sm text-gray-500">
					Adjust the diameter to mimic avatars, chips or compact media previews.
				</div>
			</div>
		</div>
	</div>

	<!-- Controls -->
	<div class="controls-demo">
		<h3>Controls</h3>
		<div class="grid gap-3 sm:grid-cols-2">
			<label class="flex flex-col gap-1 text-sm">
				Size ({size}px)
				<input type="range" min="16" max="120" step="4" bind:value={size} />
			</label>
			<label class="flex items-center gap-2 text-sm">
				<input type="checkbox" bind:checked={showContent} />
				Show initials placeholder
			</label>
		</div>
	</div>

	<!-- Tags (optional) -->
	<div class="tags">
		<span class="tag">loading</span>
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
	}

	.controls-demo .grid {
		display: grid;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.controls-demo label {
		display: flex;
		flex-direction: column;
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
