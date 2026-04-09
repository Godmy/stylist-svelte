<script lang="ts">
	import type { PageEllipsisRecipe } from '$stylist/navigation/interface/recipe/page-ellipsis';

	let { class: className = '', ...restProps }: PageEllipsisRecipe = $props();
</script>

<div class={`flex items-center px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] ${className}`} {...restProps}>
	<span>�</span>
</div>







