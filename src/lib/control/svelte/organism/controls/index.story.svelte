<script lang="ts">
	import Controls from './index.svelte';

	interface StoryProps {
		class?: string;
	}

	let { class: className = '', ...restProps }: StoryProps = $props();
</script>

<div class="story-container">
	<div class="story-preview">
		<Controls />
	</div>
</div>

<style>
	.story-container {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 200px;
		padding: var(--spacing-6);
	}

	.story-preview {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
