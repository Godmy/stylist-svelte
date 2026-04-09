<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		title?: string;
		description?: string;
		headerClass?: string;
		bodyClass?: string;
		footerClass?: string;
	};

	let {
		title,
		description,
		headerClass = '',
		bodyClass = '',
		footerClass = '',
		class: className = '',
		children,
		...restProps
	}: Props = $props();
</script>

<div class={`base-card rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] ${className}`} {...restProps}>
	{#if title || description}
		<div class={`base-card__header p-4 border-b border-[var(--color-border-primary)] ${headerClass}`}>
			{#if title}
				<h3 class="text-lg font-semibold">{title}</h3>
			{/if}
			{#if description}
				<p class="text-sm text-[var(--color-text-secondary)]">{description}</p>
			{/if}
		</div>
	{/if}
	
	<div class={`base-card__body p-4 ${bodyClass}`}>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
