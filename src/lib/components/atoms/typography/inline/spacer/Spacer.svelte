<script lang="ts">
	let {
		size = '1rem',
		axis = 'vertical',
		class: className = ''
	} = $props<{
		size?: string | number;
		axis?: 'vertical' | 'horizontal';
		class?: string;
	}>();

	const width = axis === 'horizontal' ? (typeof size === 'number' ? `${size}px` : size) : '1px';
	const height = axis === 'vertical' ? (typeof size === 'number' ? `${size}px` : size) : '1px';
</script>

<div
	style:width={width}
	style:height={height}
	class={`inline-block flex-shrink-0 ${className}`}
	aria-hidden="true"
></div>
