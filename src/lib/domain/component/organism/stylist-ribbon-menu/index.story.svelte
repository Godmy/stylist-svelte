<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import StylistRibbonMenu from './index.svelte';
</script>

<Story
	component={StylistRibbonMenu}
	title="StylistRibbonMenu"
	description="Expandable ribbon launcher for primary stylist sections."
>
	{#snippet children()}
		<div class="_c1">
			<StylistRibbonMenu />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding: 2rem;
	}
</style>
