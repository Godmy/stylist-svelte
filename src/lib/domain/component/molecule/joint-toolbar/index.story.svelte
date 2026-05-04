<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import JointToolbar from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'orientation', type: 'select', defaultValue: 'horizontal', options: ['horizontal', 'vertical'] },
		{ name: 'showLabel', type: 'boolean', defaultValue: true }
	];

	const availableJoints = ['atom', 'molecule', 'organism'] as const;
	let active = $state('atom');
</script>

<Story
	{controls}
	component={JointToolbar}
	title="JointToolbar"
	description="Joint-level selector filtered by the currently active cluster."
>
	{#snippet children(values: any)}
		<div class="rounded-2xl border border-slate-200 bg-white p-4">
			<JointToolbar
				active={active}
				availableJoints={availableJoints}
				orientation={values.orientation as 'horizontal' | 'vertical'}
				showLabel={Boolean(values.showLabel)}
				onSelect={(name) => {
					active = name;
				}}
			/>
		</div>
	{/snippet}
</Story>
