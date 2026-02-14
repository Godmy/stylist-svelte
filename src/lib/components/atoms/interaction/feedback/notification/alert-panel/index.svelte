<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { mergeClasses } from '$stylist/utils/classes';

	let {
		title = '',
		description = '',
		variant = 'info',
		showIcon = true,
		class: className = '',
		...restProps
	} = $props<{
		title?: string;
		description?: string;
		variant?: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary' | 'danger';
		showIcon?: boolean;
		class?: string;
	} & HTMLAttributes<HTMLDivElement>>();

	const statusIcons: Record<string, string> = {
		info: 'ℹ',
		success: '✓',
		warning: '⚠',
		error: '✕',
		primary: '●',
		secondary: '◆',
		danger: '▲'
	};
</script>

<div class={mergeClasses('alert-container', `variant-${variant}`, className)} {...restProps}>
	<div class="alert-content">
		{#if showIcon}
			<span class={mergeClasses('alert-icon', `variant-${variant}`)}>{statusIcons[variant]}</span>
		{/if}
		<div class="alert-content">
			<h3 class="alert-title">{title}</h3>
			{#if description}
				<p class="alert-description">{description}</p>
			{/if}
		</div>
	</div>
</div>



