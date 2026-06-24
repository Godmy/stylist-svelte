<script lang="ts">
	import createIconState from '$stylist/svg/function/state/icon/index.svelte';
	import type { RecipeIcon } from '$stylist/svg/interface/recipe/icon';
	import Svg from '../svg/index.svelte';

	let props: RecipeIcon = $props();
	const state = createIconState(props);
</script>

{#if state.container === 'none'}
	<span class="icon-wrap" {...state.restProps}>
		<Svg
			svg={state.localSvg}
			class={state.iconClasses}
			size={state.numericSize}
			strokeWidth={state.strokeWidth}
			aria-label={state.ariaLabel}
		/>
	</span>
{:else}
	<span class={state.containerClasses} {...state.restProps}>
		<span class="icon-wrap">
			<Svg
				svg={state.localSvg}
				class={state.iconClasses}
				size={state.numericSize}
				strokeWidth={state.strokeWidth}
				aria-label={state.ariaLabel}
			/>
		</span>
	</span>
{/if}

<style>
	.icon-wrap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
</style>
