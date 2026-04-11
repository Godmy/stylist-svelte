<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import Controls from './index.svelte';
</script>

<Story component={Controls} title="Controls" category="Organisms/Control/Controls" description="Placeholder controls component">
	{#snippet children(values: any)}
		<Controls />
	{/snippet}
</Story>
