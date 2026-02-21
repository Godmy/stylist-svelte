<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import LinkCard from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Documentation' },
		{ name: 'description', type: 'text', defaultValue: 'Read setup, architecture, and migration guides.' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] },
		{ name: 'showArrow', type: 'boolean', defaultValue: true },
		{ name: 'newTab', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={LinkCard} title="LinkCard" description="Navigation card for quick access destinations." {controls}>
	{#snippet children(values: any)}
		<LinkCard title={values.title} description={values.description} href="#" variant={values.variant} showArrow={values.showArrow} newTab={values.newTab} icon="->" />
	{/snippet}
</Story>
