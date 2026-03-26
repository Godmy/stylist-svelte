<script lang="ts">
	let {
		active = false,
		tool = 'select',
		icon = '↖',
		label,
		onClick
	}: {
		active?: boolean;
		tool?: string;
		icon?: string;
		label?: string;
		onClick?: (tool: string) => void;
	} = $props();

	const handleClick = () => {
		onClick?.(tool);
	};
</script>

<button
	class="tool-button"
	class:active
	aria-pressed={active}
	aria-label={label ?? tool}
	title={label ?? tool}
	onclick={handleClick}
>
	<span class="icon">{icon}</span>
	{#if label}
		<span class="label">{label}</span>
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
