<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainAiAgent from './index.svelte';

	let open = $state(true);
</script>

<Story
	component={DomainAiAgent}
	title="DomainAiAgent"
	description="Floating panel for the AI agent workspace, opened from the AI button in DomainMenu."
>
	{#snippet children()}
		<div class="_c1">
			<DomainAiAgent {open} onClose={() => (open = false)} />
			{#if !open}
				<button type="button" class="_c2" onclick={() => (open = true)}>Reopen panel</button>
			{/if}
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		min-height: 24rem;
	}
	._c2 {
		border-radius: 999px;
		border: 1px solid #e2e8f0;
		background: #ffffff;
		padding: 0.6rem 1rem;
		cursor: pointer;
	}
</style>
