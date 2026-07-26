<script lang="ts">
	import createStickyLayoutState from '$stylist/layout/function/state/sticky-layout/index.svelte';
	import type { StickyLayoutProps } from '$stylist/layout/interface/recipe/sticky-layout';

	let props: StickyLayoutProps = $props();
	const state = createStickyLayoutState(props);
</script>

<div
	class={['layout-sticky', state.fillHeight && 'layout-sticky--fill', props.class]
		.filter(Boolean)
		.join(' ')}
	{...state.restProps}
>
	{#if props.header}
		<header
			class={['layout-sticky__header', state.headerShadow && 'layout-sticky__header--shadow']
				.filter(Boolean)
				.join(' ')}
		>
			{@render props.header()}
		</header>
	{/if}

	<div
		class={['layout-sticky__content', state.fillHeight && 'layout-sticky__content--scroll']
			.filter(Boolean)
			.join(' ')}
	>
		{#if props.children}{@render props.children()}{/if}
	</div>

	{#if props.footer}
		<footer
			class={['layout-sticky__footer', state.footerShadow && 'layout-sticky__footer--shadow']
				.filter(Boolean)
				.join(' ')}
		>
			{@render props.footer()}
		</footer>
	{/if}
</div>

<style>
	.layout-sticky {
		display: flex;
		flex-direction: column;
	}

	.layout-sticky--fill {
		height: 100%;
	}

	.layout-sticky__header {
		position: sticky;
		top: 0;
		z-index: 10;
		flex-shrink: 0;
	}

	.layout-sticky__header--shadow {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.layout-sticky__content {
		flex: 1;
		min-height: 0;
	}

	.layout-sticky__content--scroll {
		overflow-y: auto;
	}

	.layout-sticky__footer {
		position: sticky;
		bottom: 0;
		z-index: 10;
		flex-shrink: 0;
	}

	.layout-sticky__footer--shadow {
		box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
	}
</style>
