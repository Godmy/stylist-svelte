<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
	import type { BreadcrumbsProps } from '$stylist/navigation/type/struct/breadcrumbs-props';
	import { createBreadcrumbsState, SLASH_ICON } from '$stylist/navigation/function/state/breadcrumbs';

	let props: BreadcrumbsProps = $props();
	const state = createBreadcrumbsState(props);
</script>

<nav aria-label="Breadcrumb" class={props.class ?? ''} {...props}>
	<ol class={state.listClass}>
		{#each props.crumbs ?? [] as crumb, i}
			<li class={state.itemClass}>
				{#if i > 0}
					<BaseIcon name={SLASH_ICON} class={state.separatorClass} />
				{/if}
				{#if crumb.href && i < state.totalCrumbs - 1}
					<a href={crumb.href} class={state.activeLinkClass}>
						{crumb.label}
					</a>
				{:else}
					<span class={state.currentItemClass}>{crumb.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
