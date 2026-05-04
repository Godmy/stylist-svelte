<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import StylistRibbonMenu from './index.svelte';
</script>

<Story
	component={StylistRibbonMenu}
	title="StylistRibbonMenu"
	description="Expandable ribbon launcher for primary stylist sections."
>
	{#snippet children()}
		<div class="rounded-3xl border border-slate-200 bg-white p-8">
			<StylistRibbonMenu />
		</div>
	{/snippet}
</Story>
