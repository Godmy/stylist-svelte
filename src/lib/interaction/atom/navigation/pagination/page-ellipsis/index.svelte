<script lang="ts">
	import type { PageEllipsisProps } from '$stylist';

	let { class: className = '', ...restProps }: PageEllipsisProps = $props();
</script>

<div class={`flex items-center px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] ${className}`} {...restProps}>
	<span>�</span>
</div>







