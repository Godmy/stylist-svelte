<script lang="ts">
	import type { Snippet } from 'svelte';

	type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

	const {
		children,
		maxWidth = 'full',
		class: className = ''
	}: {
		children: Snippet;
		maxWidth?: MaxWidth;
		class?: string;
	} = $props();

	const maxWidthClasses: Record<MaxWidth, string> = {
		sm: 'max-w-screen-sm',
		md: 'max-w-screen-md',
		lg: 'max-w-screen-lg',
		xl: 'max-w-screen-xl',
		'2xl': 'max-w-screen-2xl',
		full: 'max-w-full'
	};

	const finalMaxWidthClass = maxWidthClasses[maxWidth] || 'max-w-full';
</script>

<div class={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${finalMaxWidthClass} ${className}`}>
	{@render children()}
</div>
