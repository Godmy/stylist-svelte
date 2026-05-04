<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ButtonComposed from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Deploy changes' },
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] },
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
		<div class="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
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
			<p class="text-sm text-slate-500">Last event: {eventLog}</p>
		</div>
	{/snippet}
</Story>
