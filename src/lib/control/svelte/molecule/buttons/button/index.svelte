<script lang="ts">
	/**
	 * Button — молекула, собранная из атомов
	 *
	 * Атомы:
	 * - container: архитектура (размер, layout)
	 * - background: информация (фон, градиент)
	 * - border: информация (граница, скругление)
	 * - click: интерактивность (клики, hover, disabled)
	 */

	import type { ButtonMoleculeProps } from '$stylist/control/function/state/button-molecule';
	import { createButtonMoleculeState } from '$stylist/control/function/state/button-molecule';

	let props: ButtonMoleculeProps = $props();
	const state = createButtonMoleculeState(props);
</script>

<button
	{...state.restAttrs}
	type={state.props.type ?? 'button'}
	class={state.BASE_BUTTON_CLASSES + ' ' + state.classes}
	style={state.inlineStyles}
	disabled={state.isDisabled}
	onclick={state.handleClick}
	ondblclick={state.handleDblClick}
	oncontextmenu={state.handleContextMenu}
	onmousedown={state.handleMouseDown}
	onmouseup={state.handleMouseUp}
	onmouseenter={state.handleMouseEnter}
	onmouseleave={state.handleMouseLeave}
>
	{#if state.isLoading}
		<svg class={state.LOADER_CLASSES} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
		<span class={state.SR_ONLY_CLASSES}>{state.loadingLabel}</span>
	{/if}

	{#if state.props.children}
		{@render state.props.children()}
	{:else if state.isLoading}
		{state.loadingLabel}
	{/if}
</button>



