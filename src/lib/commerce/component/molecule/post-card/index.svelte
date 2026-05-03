<script lang="ts">
	import type { PostCardRecipe } from '$stylist/commerce/interface/recipe/post-card';
	import { createPostCardState } from '$stylist/commerce/function/state/post-card';

	let props: PostCardRecipe = $props();
	const state = createPostCardState(props);
</script>

<div class={state.containerClasses}>
	{#if props.image}
		<img src={props.image} alt={props.title} class={state.imageClasses} />
	{/if}
	<div class={state.bodyClasses}>
		<div class={state.headerClasses}>
			<h3 class={state.titleClasses}>{props.title ?? ''}</h3>
			{#if props.date}
				<span class={state.dateClasses}>{props.date}</span>
			{/if}
		</div>
		{#if props.subtitle}
			<p class={state.subtitleClasses}>{props.subtitle}</p>
		{/if}
		{#if props.excerpt}
			<p class={state.excerptClasses}>{props.excerpt}</p>
		{/if}
		<div class={state.metaClasses}>
			{#if props.author}
				<span class={state.authorClasses}>By {props.author}</span>
			{/if}
			{#if (props.tags ?? []).length > 0}
				<div class={state.tagsClasses}>
					{#each props.tags ?? [] as tag}
						<span class={state.tagClasses}>{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
		<div class={state.actionsClasses}>
			{#each props.actions ?? [] as action}
				<button
					onclick={action.onClick}
					class={state.actionButtonClasses}
				>
					{action.label}
				</button>
			{/each}
		</div>
	</div>
</div>
