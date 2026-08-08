<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainSearchToggle from './index.svelte';

	let open = $state(false);
</script>

<Story
	component={DomainSearchToggle}
	title="DomainSearchToggle"
	description="Round toggle button that opens or closes the domain search overlay."
>
	{#snippet children()}
		<div class="_c1">
			<DomainSearchToggle {open} onToggle={() => (open = !open)} />
			<p class="_c2">State: {open ? 'open' : 'closed'}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #f8fafc;
		padding: 1rem;
	}
	._c2 {
		font-size: 0.875rem;
		color: #64748b;
	}
</style>
