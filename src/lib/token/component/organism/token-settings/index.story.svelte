<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import TokenSettings from './index.svelte';
</script>

<Story
	title="TokenSettings"
	description="Registry browser for every token setting array, its control type, and the live control preview."
>
	{#snippet children()}
		<div class="token-story-panel">
			<TokenSettings title="Design Token Registry" columns={3} showColumnControl />
		</div>
	{/snippet}
</Story>

<style>
	.token-story-panel {
		box-sizing: border-box;
		min-width: 0;
		border: 1px solid var(--line, var(--color-border-primary, #d7dee8));
		border-radius: 0.5rem;
		background: var(--bg, var(--color-background-secondary, #f8fafc));
		padding: 1.25rem;
	}
</style>
