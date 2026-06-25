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
			<TokenSettings title="Design Token Registry" />
		</div>
	{/snippet}
</Story>

<style>
	.token-story-panel {
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 1.25rem;
	}
</style>
