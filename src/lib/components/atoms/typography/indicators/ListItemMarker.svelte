<script lang="ts">
	import Icon from '$lib/components/atoms/media/Icon/Icon.svelte';

	export type MarkerType = 'bullet' | 'number' | 'icon';
	export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
	export type Size = 'sm' | 'md' | 'lg';

	type Props = {
		type?: MarkerType;
		value?: string | number;
		color?: Color;
		size?: Size;
		class?: string;
	};

	const {
		type = 'bullet',
		value = '',
		color = 'gray',
		size = 'md',
		class: className = ''
	}: Props = $props();

	const baseClasses = 'inline-flex items-center justify-center flex-shrink-0';

	const colorClasses: Record<Color, string> = {
		primary: 'text-[--color-primary-500]',
		secondary: 'text-[--color-secondary-500]',
		success: 'text-[--color-success-500]',
		warning: 'text-[--color-warning-500]',
		danger: 'text-[--color-danger-500]',
		info: 'text-[--color-info-500]',
		gray: 'text-[--color-text-tertiary]'
	};

	const sizeClasses: Record<Size, string> = {
		sm: 'h-4 w-4 text-xs',
		md: 'h-5 w-5 text-sm',
		lg: 'h-6 w-6 text-base'
	};

	const bulletClasses = 'rounded-full bg-current';
</script>

<span class={`${baseClasses} ${colorClasses[color as Color]} ${sizeClasses[size as Size]} ${className}`}>
	{#if type === 'bullet'}
		<span class={`${bulletClasses} ${size === 'sm' ? 'h-1.5 w-1.5' : size === 'md' ? 'h-2 w-2' : 'h-2.5 w-2.5'}`}></span>
	{:else if type === 'number'}
		{value}
	{:else if type === 'icon' && typeof value === 'string'}
		<Icon name={value} size={size} />
	{/if}
</span>