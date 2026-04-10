<script lang="ts">
	import { createToolButtonState } from '$stylist/control/function/state/tool-button';
	import type { ToolButtonProps } from '$stylist/control/type/struct/tool-button-props';

	let props: ToolButtonProps = $props();
	const state = createToolButtonState(props);
</script>

<button
	class="tool-button"
	class:active={state.active}
	aria-pressed={state.active}
	aria-label={state.label ?? state.tool}
	title={state.label ?? state.tool}
	onclick={state.handleClick}
>
	<span class="icon">{state.icon}</span>
	{#if state.label}
		<span class="label">{state.label}</span>
	{/if}
</button>

<style>
	.tool-button {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 12px;
		border: 1px solid transparent;
		background: var(--color-surface-primary, #ffffff);
		color: var(--color-text-primary, #333);
		border-radius: var(--radius-md, 8px);
		cursor: pointer;
		transition: all 150ms var(--easing-standard, ease);
		font-size: 14px;
	}

	.tool-button:hover {
		background: var(--color-surface-secondary, #f5f5f5);
	}

	.tool-button:active {
		background: var(--color-surface-tertiary, #e0e0e0);
	}

	.tool-button.active {
		background: var(--color-primary-container, #e3f2fd);
		color: var(--color-on-primary-container, #0d47a1);
		border-color: var(--color-primary, #1976d2);
	}

	.icon {
		font-size: 18px;
		line-height: 1;
	}

	.label {
		font-size: 12px;
		font-weight: 500;
	}
</style>
