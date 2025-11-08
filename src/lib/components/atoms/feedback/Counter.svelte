<script lang="ts">
	type Variant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
	type Size = 'sm' | 'md' | 'lg';

	type Props = {
		count?: number;
		max?: number;
		variant?: Variant;
		size?: Size;
		class?: string;
	};

	const {
		count = 0,
		max = 99,
		variant = 'primary',
		size = 'md',
		class: className = ''
	}: Props = $props();

	const displayCount = $derived(count > max ? `${max}+` : count);

	const variantClasses: Record<Variant, string> = {
		primary: 'bg-primary-500 text-primary-50',
		secondary: 'bg-secondary-500 text-secondary-50',
		danger: 'bg-red-500 text-white',
		success: 'bg-green-500 text-white',
		warning: 'bg-yellow-500 text-gray-800',
		info: 'bg-blue-500 text-white'
	};

	const sizeClasses: Record<Size, string> = {
		sm: 'px-1 min-w-[1.25rem] h-5 text-xs',
		md: 'px-1.5 min-w-[1.5rem] h-6 text-sm',
		lg: 'px-2 min-w-[1.75rem] h-7 text-base'
	};
</script>

<span
	class={`inline-flex items-center justify-center rounded-full font-medium ${variantClasses[variant as Variant]} ${sizeClasses[size as Size]} ${className}`}
>
	{displayCount}
</span>