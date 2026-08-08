<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainSearchField from './index.svelte';

	let value = $state('');
</script>

<Story
	component={DomainSearchField}
	title="DomainSearchField"
	description="Search input used inside the domain quick-search overlay."
>
	{#snippet children()}
		<div class="_c1">
			<DomainSearchField bind:value onEscape={() => (value = '')} />
			<p class="_c2">Value: {value || 'empty'}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 0.5rem;
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
