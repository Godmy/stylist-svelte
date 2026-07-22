<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ButtonComposed from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Deploy changes' },
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'primary',
			options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
		},
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'loading', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'showDot', type: 'boolean', defaultValue: false }
	];

	let eventLog = $state('ready');
</script>

<Story
	{controls}
	component={ButtonComposed}
	title="ButtonComposed"
	description="Composed control button with icon, badge, focus, and click behaviors."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ButtonComposed
				label={values.label as string}
				variant={values.variant as any}
				size={values.size as any}
				loading={Boolean(values.loading)}
				disabled={Boolean(values.disabled)}
				iconLeft="plus"
				iconRight="arrow-right"
				dot={Boolean(values.showDot)}
				onClick={() => {
					eventLog = 'click';
				}}
				onFocus={() => {
					eventLog = 'focus';
				}}
				onBlur={() => {
					eventLog = 'blur';
				}}
			/>
			<p class="_c2">Last event: {eventLog}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #f8fafc;
		padding: 1.5rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
</style>
