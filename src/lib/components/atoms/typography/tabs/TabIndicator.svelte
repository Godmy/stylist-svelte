<script lang="ts">
	type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gray';

	type Props = {
		left?: string;
		width?: string;
		color?: Color;
		class?: string;
	};

	const {
		left = '0px',
		width = '0px',
		color = 'primary',
		class: className = ''
	}: Props = $props();

	const colorClasses: Record<Color, string> = {
		primary: 'bg-indigo-500',
		secondary: 'bg-gray-500',
		success: 'bg-green-500',
		warning: 'bg-yellow-500',
		danger: 'bg-red-500',
		gray: 'bg-gray-500'
	};
</script>

<div
	class={`absolute bottom-0 h-0.5 transition-all duration-300 ease-out ${colorClasses[color as Color]} ${className}`}
	style={`width: ${width}; left: ${left}`}
></div>