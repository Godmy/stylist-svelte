<script lang="ts">
	import type { CardWithImageRecipe } from '$stylist/commerce/interface/recipe/card-with-image';
	import { createCardWithImageState } from '$stylist/commerce/function/state/card-with-image';

	let props: CardWithImageRecipe = $props();
	const state = createCardWithImageState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	{#if props.image}
		<img src={props.image} alt="" class={state.imageClasses} />
	{/if}

	<div class={state.bodyClasses}>
		{#if props.title || props.subtitle}
			<div class={state.headerClasses}>
				{#if props.title}
					<h3 class={state.titleClasses}>{props.title}</h3>
				{/if}
				{#if props.subtitle}
					<p class={state.subtitleClasses}>{props.subtitle}</p>
				{/if}
			</div>
		{/if}

		{#if props.description}
			<p class={state.descriptionClasses}>{props.description}</p>
		{/if}

		{#if props.footer}
			<div class={props.footerClass}>
				{@render props.footer()}
			</div>
		{/if}

		{#if props.actions}
			<div class={props.actionsClass}>
				{@render props.actions()}
			</div>
		{/if}
	</div>
</div>
