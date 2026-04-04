<script lang="ts">
	import Stylist from './index.svelte';
	import type { StylistSelection } from './index.svelte';

	interface StoryProps {
		class?: string;
		initialCategory?: 'architecture' | 'information' | 'interaction';
		onSelectionChange?: (selection: StylistSelection) => void;
	}

	let {
		class: className = '',
		initialCategory = 'architecture',
		...restProps
	}: StoryProps = $props();

	function handleSelectionChange(selection: StylistSelection) {
		console.log('Selection changed:', selection);
	}
</script>

<div class="story-container">
	<div class="story-preview">
		<Stylist
			class={className}
			initialCategory={initialCategory}
			onSelectionChange={handleSelectionChange}
			{...restProps}
		/>
	</div>
</div>

<style>
	.story-container {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 400px;
		padding: var(--spacing-6);
		background: var(--color-background-secondary);
	}

	.story-preview {
		position: relative;
	}
</style>
