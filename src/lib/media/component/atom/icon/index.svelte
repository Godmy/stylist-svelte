<script lang="ts">
	import { createIconState } from '$stylist/media/function/state/icon';
	import type { IconProps } from '$stylist/media/interface/recipe/icon-icon-props';
	import Svg from '../svg/index.svelte';

	let props: IconProps = $props();
	const state = createIconState(props);
</script>

{#if state.container === 'none'}
	<span class="inline-flex items-center justify-center" {...state.restProps}>
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
		<span class="inline-flex items-center justify-center">
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
