<script lang="ts">
	import Icon from '$lib/components/atoms/media/Icon.svelte';
	type Status = 'pending' | 'active' | 'completed' | 'error';
	type Size = 'sm' | 'md' | 'lg';

	type Props = {
		status?: Status;
		size?: Size;
		stepNumber?: number;
		iconName?: string;
		class?: string;
	};

	const {
		status = 'pending',
		size = 'md',
		stepNumber,
		iconName,
		class: className = ''
	}: Props = $props();

	const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium';
	const statusClasses: Record<Status, string> = {
		pending: 'bg-gray-200 text-gray-600 border-2 border-gray-200',
		active: 'bg-primary-500 text-white border-2 border-primary-500',
		completed: 'bg-green-500 text-white border-2 border-green-500',
		error: 'bg-red-500 text-white border-2 border-red-500'
	};
	const sizeClasses: Record<Size, string> = {
		sm: 'w-6 h-6 text-xs',
		md: 'w-8 h-8 text-sm',
		lg: 'w-10 w-10 text-base'
	};

	// iconSizeMap is no longer needed as Icon component expects string literals directly
	// const iconSizeMap: Record<Size, string> = {
	// 	sm: '12',
	// 	md: '16',
	// 	lg: '20'
	// };
</script>

<span class={`${baseClasses} ${statusClasses[status as Status]} ${sizeClasses[size as Size]} ${className}`}>
	{#if status === 'completed'}
		<Icon name="check" size={size} />
	{:else if status === 'error'}
		<Icon name="x" size={size} />
	{:else if iconName}
		<Icon name={iconName} size={size} />
	{:else if stepNumber !== undefined}
		<span>{stepNumber}</span>
	{:else}
		<span>•</span>
	{/if}
</span>