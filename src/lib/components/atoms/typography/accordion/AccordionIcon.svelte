<script lang="ts">
	import Icon from '../../media/Icon.svelte';
	
	type Size = 'sm' | 'md' | 'lg';

	type Props = {
		isOpen?: boolean;
		size?: Size;
		class?: string;
	};

	const {
		isOpen = false,
		size = 'md',
		class: className = ''
	}: Props = $props();

	// sizeMap is no longer needed as Icon component expects string literals directly
	// const sizeMap: Record<Size, number> = {
	// 	sm: 16,
	// 	md: 20,
	// 	lg: 24
	// };
</script>

<span class={`inline-flex items-center justify-center transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${className}`}>
	<Icon name="chevron-down" size={size} />
</span>