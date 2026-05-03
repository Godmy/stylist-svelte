<script lang="ts">
	import type { PageEllipsisRecipe } from '$stylist/navigation/interface/recipe/page-ellipsis';
	import { createPageEllipsisState } from '$stylist/navigation/function/state/page-ellipsis';

	let props: PageEllipsisRecipe = $props();
	const state = createPageEllipsisState(props);
</script>

<div class={`flex items-center px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] ${props.class ?? ''}`} {...props}>
	<span>…</span>
</div>
