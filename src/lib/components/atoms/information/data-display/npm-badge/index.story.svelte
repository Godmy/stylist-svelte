<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import NPMBadge from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'type',
			type: 'select',
			options: ['version', 'downloads', 'license', 'size', 'custom'],
			defaultValue: 'version'
		},
		{
			name: 'value',
			type: 'text',
			defaultValue: '1.0.0'
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: ''
		},
		{
			name: 'link',
			type: 'text',
			defaultValue: ''
		}
	];
</script>

<Story
	{controls}
	component={NPMBadge}
	title="NPMBadge Component"
	description="An NPM badge component for displaying package information"
	tags={['information', 'data-display', 'badge', 'npm']}
>
	{#snippet children(values: any)}
		<NPMBadge
			type={values.type as 'version' | 'downloads' | 'license' | 'size' | 'custom'}
			value={values.value as string}
			label={values.label as string}
			link={values.link as string}
		/>
	{/snippet}
</Story>
