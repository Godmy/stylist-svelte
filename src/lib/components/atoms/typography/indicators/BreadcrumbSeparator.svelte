<script lang="ts">
	let {
		separator = '/',
		class: className = ''
	} = $props<{
		separator?: string;
		class?: string;
	}>();
</script>

<span class={`mx-2 text-gray-400 ${className}`} aria-hidden="true">
	{separator}
</span>
