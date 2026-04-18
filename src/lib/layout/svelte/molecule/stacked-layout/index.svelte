<script lang="ts">
	import { createStackedLayoutState } from '$stylist/layout/function/state/stacked-layout';
	import type { StackedLayoutProps } from '$stylist/layout/interface/recipe/stacked-layout';

	let props: StackedLayoutProps = $props();
	const state = createStackedLayoutState(props);
</script>

<div class={state.classes} {...state.restProps}>
	{@render props.children()}
</div>





