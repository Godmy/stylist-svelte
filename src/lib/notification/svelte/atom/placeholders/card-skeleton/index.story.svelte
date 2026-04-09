<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import CardSkeleton from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'count', type: 'number', defaultValue: 3, min: 1, max: 6, step: 1 },
		{ name: 'showAvatar', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={CardSkeleton} title="CardSkeleton" description="Card grid loading state with optional avatar placeholder." {controls}>
	{#snippet children(values: any)}
		<CardSkeleton count={values.count} showAvatar={values.showAvatar} />
	{/snippet}
</Story>



