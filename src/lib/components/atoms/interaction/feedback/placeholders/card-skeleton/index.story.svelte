<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import CardSkeleton from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'count', type: 'number', defaultValue: 3, min: 1, max: 6, step: 1 },
		{ name: 'showAvatar', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={CardSkeleton} title="CardSkeleton" description="Card grid loading state with optional avatar placeholder." {controls}>
	{#snippet children(values: any)}
		<CardSkeleton count={values.count} showAvatar={values.showAvatar} />
	{/snippet}
</Story>
