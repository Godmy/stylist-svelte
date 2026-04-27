<script lang="ts">
	import { BreadcrumbDropdown } from '$stylist/navigation/component/atom/breadcrumb-dropdown';
	import { BreadcrumbLink } from '$stylist/navigation/component/atom/breadcrumb-link';
	import { BreadcrumbSeparator } from '$stylist/navigation/component/atom/breadcrumb-separator';
	import type { BreadcrumbsProps } from '$stylist/navigation/type/struct/breadcrumbs-props';
	import { createBreadcrumbsState } from '$stylist/navigation/function/state/breadcrumbs';

	let props: BreadcrumbsProps = $props();
	const state = createBreadcrumbsState(props);
</script>

<nav aria-label="Breadcrumb" class={props.class ?? ''} {...state.restProps}>
	<ol class={state.listClass}>
		{#each state.visibleCrumbs as crumb, i (crumb.id)}
			<li class={state.itemClass} onmouseleave={state.clearHoveredId}>
				{#if i > 0}
					<BreadcrumbSeparator class={state.separatorClass} />
				{/if}
				<div class={state.linkClusterClass}>
					<BreadcrumbLink
						href={crumb.href}
						current={i === state.totalCrumbs - 1}
						class={i === state.totalCrumbs - 1 ? state.currentItemClass : state.activeLinkClass}
						onclick={(event: MouseEvent) => state.handleNavigate(crumb.id, event)}
						onmouseenter={() => state.setHoveredId(crumb.id)}
						onfocus={() => state.setHoveredId(crumb.id)}
						onblur={state.clearHoveredId}
					>
						{crumb.label}
					</BreadcrumbLink>
					<BreadcrumbDropdown
						open={state.hoveredId === crumb.id}
						items={state.getDropdownItems(crumb.id)}
						onSelect={state.handleDropdownSelect}
					/>
				</div>
			</li>
		{/each}
	</ol>
</nav>
