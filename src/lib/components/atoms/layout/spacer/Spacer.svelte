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

	const sizeValue = typeof size === 'number' ? `${size}px` : size;
</script>

<div
	class={`inline-block flex-shrink-0 ${axis === 'horizontal' ? 'w-[--spacer-size]' : 'h-[--spacer-size]'} ${className}`}
	style="--spacer-size: {sizeValue}"
	aria-hidden="true"
></div>
