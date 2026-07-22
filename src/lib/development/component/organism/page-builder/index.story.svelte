<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import PageBuilder from './index.svelte';

	type Props = {
		title: string;
		showToolbar: boolean;
		editable: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Page Builder' },
		{ name: 'showToolbar', type: 'boolean', defaultValue: true },
		{ name: 'editable', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="organisms-page-builder"
	title="Organisms / Interaction / Controls / Page Builder"
	component={PageBuilder}
	category="Organisms/Interaction/Controls"
	description="Visual page builder with drag-and-drop ordering."
	{controls}
>
	{#snippet children(values: any)}
		{@const typedProps = values as Props}
		<div class="sb-organisms-page-builder _c1">
			<h2 class="_c2">{typedProps.title}</h2>
			<div class="_c3">
				<PageBuilder showToolbar={typedProps.showToolbar} editable={typedProps.editable} />
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c2 {
		margin-bottom: 1.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-left: auto;
		margin-right: auto;
		max-width: 56rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
	}
</style>
