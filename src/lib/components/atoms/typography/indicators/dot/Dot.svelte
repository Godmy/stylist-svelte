<script lang="ts">
	type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
	type Size = 'sm' | 'md' | 'lg';

	type Props = {
		color?: Color;
		size?: Size;
		class?: string;
	};

	const {
		color = 'primary',
		size = 'md',
		class: className = ''
	}: Props = $props();

	const colorClasses: Record<Color, string> = {
		primary: 'bg-indigo-600',
		secondary: 'bg-gray-600',
		success: 'bg-green-600',
		warning: 'bg-yellow-600',
		danger: 'bg-red-600',
		info: 'bg-blue-600',
		gray: 'bg-gray-400'
	};

	const sizeClasses: Record<Size, string> = {
		sm: 'w-2 h-2',
		md: 'w-3 h-3',
		lg: 'w-4 h-4'
	};
</script>

<span class={`inline-block rounded-full ${colorClasses[color as Color]} ${sizeClasses[size as Size]} ${className}`}></span>